'use strict';

const {formPath, isProd} = require('../utils/utils');

module.exports = (req, res, next) => {
    req.buildPageData = {
        meta: {
            title: 'Boomans',
            faviconPath: ''
        },
        global: {
            data: JSON.stringify({})
        },
        res: {
            bundles: {
                styles: formPath('main', 'css', isProd),
                scripts: formPath('main', 'js', isProd)
            },
            font: {
                font1: '/build/res/fonts/copperplate.ttf'
            }
        }
    };
    next();
};