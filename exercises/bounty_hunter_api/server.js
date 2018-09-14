const server = require("express")();
const uuid = require("uuid/v4");
const bodyParser = require("body-parser");
const Ajv = require("ajv");

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

server.use(bodyParser.json());
// .use("/bounties", bountiesRoute)
// .use("/bounty", bountyRoute);

server.get("/bounties", (_, res) => {
  res.send(db);
});

server.get("/bounty/:id", (req, res) => {
  const bounty = db.find(v => v.id === Number(req.params.id));
  if (~~bounty) res.sendStatus(404);
  res.send(bounty);
});

server.post("/bounties", (req, res) => {
  req.body.id = nextId++;
  res.location = `/bounty/${req.body.id}`;
  if (ajv.validate(schema, req.body)) {
    db.push(req.body);
    // Should send null?
    res.send(201, req.body);
  } else {
    res.sendStatus(400);
  }
});

server.delete("/bounty/:id", (req, res) => {
  const bounty = db.findIndex(v => v.id === Number(req.params.id));
  if (~~bounty) res.sendStatus(404);
  db.splice(bounty, 1);
  res.sendStatus(204);
});

server.put("/bounty/:id", (req, res) => {
  const bounty = db.findIndex(v => v.id === Number(req.params.id));
  if (~~bounty) res.sendStatus(404);
  for (key in db[bounty]) if (req.body[key]) db[bounty][key] = req.body[key];
  res.send(db[bounty]);
});

server.listen(port, () => console.log(`Server running on ${port}`));
