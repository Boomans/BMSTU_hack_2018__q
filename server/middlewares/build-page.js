'use strict';

module.exports = (req, res) => {
    res.render('index', Object.assign({}, req.buildPageData));
};