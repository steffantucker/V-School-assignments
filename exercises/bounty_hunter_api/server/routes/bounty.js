const express = require("express");
const bounty = express.Router();

const Bounty = require("../models/Bounty");

bounty
  .route("/:id")
  .get((req, res) => {
    Bounty.findById(req.params.id, (err, bounty) => {
      if (err) res.status(500).send({ msg: err });
      else res.send(bounty);
    });
  })
  .delete((req, res) => {
    Bounty.findByIdAndRemove(req.params.id, (err, bounty) => {
      if (err) res.sendStatus(404);
      else res.sendStatus(204);
    });
  })
  .put((req, res) => {
    Bounty.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true },
      (err, bounty) => {
        if (err) res.sendStatus(404);
        else res.send(bounty);
      }
    );
  });

module.exports = bounty;
