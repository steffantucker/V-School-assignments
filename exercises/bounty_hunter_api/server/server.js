const express = require("express");
const server = express();
const Ajv = require("ajv");
const mongoose = require("mongoose");
const morgan = require("morgan");

const bountiesRoute = require("./routes/bounties");
const bountyRoute = require("./routes/bounty");

const ajv = new Ajv();

const port = 8080;
const db = [
  {
    id: 0,
    firstName: "Anankin",
    lastName: "Skywalker",
    living: false,
    bountyAmount: 0,
    type: "Sith"
  },
  {
    id: 1,
    firstName: "Luke",
    lastName: "Skywalker",
    living: true,
    bountyAmount: 10,
    type: "Jedi"
  },
  {
    id: 2,
    firstName: "Leia",
    lastName: "Skywalker",
    living: true,
    bountyAmount: 15,
    type: "Jedi"
  },
  {
    id: 3,
    firstName: "Darth",
    lastName: "Maul",
    living: false,
    bountyAmount: 0,
    type: "Sith"
  },
  {
    id: 4,
    firstName: "General",
    lastName: "Grevious",
    living: true,
    bountyAmount: 5,
    type: "Sith"
  },
  {
    id: 5,
    firstName: "Kylo",
    lastName: "Ren",
    living: true,
    bountyAmount: 20,
    type: "Sith"
  }
];
let nextId = 6;

const schema = {
  type: "object",
  properties: {
    id: {
      type: "number"
    },
    firstName: {
      type: "string"
    },
    lastName: {
      type: "string"
    },
    living: {
      type: "boolean"
    },
    bountyAmount: {
      type: "number"
    },
    type: {
      type: "string",
      enum: ["Sith", "Jedi"]
    }
  },
  required: ["id", "firstName", "lastName", "living", "bountyAmount", "type"],
  additionalProperties: false
};

server
  .use(express.json())
  .use("/bounties", bountiesRoute)
  .use("/bounty", bountyRoute);

mongoose
  .connect(
    "mongodb://localhost:27017/BigShot",
    { useNewUrlParser: true }
  )
  .then(() => console.log("Connected to DB"))
  .catch(err => console.error(err));

server.listen(port, () => console.log(`Server running on ${port}`));
