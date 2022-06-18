const { LogHandler, PoolQueryHandler, } = require('../handlers')
const Home = require('../models/homeModel');
var _ = require('underscore');
exports.getHome = (req, res, next) => {
    try {
        let queryArray = {};
        queryArray.slug = req.query.watch
        Home.getVideoCompletely(queryArray)
            .then(videos => {
                // console.log(videos);
                videos.seasions = _.groupBy(videos, 'VIDEO_SEASION')
                // console.log(seasion);
                // console.log(videos.seasions);

                // if (!videos) {
                //     return res.redirect('/');
                // }
                res.render('home/index', {
                    videos: videos,
                    pageTitle: 'Admin Products',
                    path: '/home/index'
                });
            })
            .catch(err => LogHandler.error('getHome', err));
    } catch (err) {
        LogHandler.error('getHome', err)
    }
};
