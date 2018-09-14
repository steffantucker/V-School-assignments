const express = require("express");
const bounties = express.Router();
bounties
  .route("/")
  .get((_, res) => res.send(db))
  .post((req, res) => {
    res.location = `/bounty/${req.body.id}`;
    if (ajv.validate(schema, req.body)) {
      db.push(req.body);
      // Should send null?
      res.send(201, req.body);
    } else {
      res.sendStatus(400);
    }
  });

module.exports = bounties;
