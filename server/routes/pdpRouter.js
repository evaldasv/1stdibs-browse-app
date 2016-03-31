const express = require('express');
const cachedItems = require('../data/items.json');

const pdpRouter = express.Router();

const getItem = function (itemId) {
    return cachedItems.find(function (item) {
            return item.id === itemId || item.integerId === itemId;
        }) || {};
};

pdpRouter.get('/:id', (req, res) => {
    const id = req.params.id;
    const item = getItem(id);
    res.render('pdp', {item});
});

pdpRouter.get('/:id/data', (req, res) => {
    const id = req.params.id;
    const item = getItem(id);
    res.status(200).json(item);
});

module.exports = pdpRouter;
