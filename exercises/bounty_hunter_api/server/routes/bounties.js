const express = require("express");
const bounties = express.Router();

const Bounty = require("../models/Bounty");

bounties
  .route("/")
  .get((_, res) =>
    Bounty.find((err, bounties) => {
      if (err) res.status(500).send({ msg: err });
      else res.send(bounties);
    })
  )
  .post((req, res) => {
    const newBounty = new Bounty(req.body);
    newBounty.save((err, bounty) => {
      if (err) res.status(500).send({ msg: err });
      else res.send(201, newBounty);
    });
  });

module.exports = bounties;
