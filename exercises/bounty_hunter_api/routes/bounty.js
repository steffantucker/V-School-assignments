const express = require("express");
const bounty = express.Router();

bounty
  .route("/:id")
  .get((req, res) => {
    const bounty = db.find(v => v.id === Number(req.params.id));
    if (!bounty) res.sendStatus(404);
    res.send(bounty);
  })
  .delete((req, res) => {
    const bounty = db.findIndex(v => v.id === req.params.id);
    if (!bounty) res.sendStatus(404);
    db.splice(bounty, 1);
    res.sendStatus(204);
  })
  .put((req, res) => {
    const bounty = db.findIndex(v => v.id === req.params.id);
    if (!bounty) res.sendStatus(404);
    for (key in db[bounty]) if (req.body[key]) db[bounty][key] = req.body[key];
    res.send(db[bounty]);
  });

module.exports = bounty;
