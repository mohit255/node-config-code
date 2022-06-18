const { LogHandler, PoolQueryHandler, } = require('../handlers')

module.exports = class Home {

    static getSettings() {
        try {
            // const settingId = req.body.data.setting_id
            // const settingKey = req.body.data.setting_key
            // get settings
            const settingsQuery = 'SELECT * FROM default_settings'
            const settingsData = PoolQueryHandler(settingsQuery, [])
            return settingsData
        } catch (err) {
            LogHandler.error('getHome', err)
        }
    }

    static getVideoCompletely(queryArray = {}) {
        // console.log(queryArray);
        // console.log(queryArray.slug);
        try {
            let videosQuery = `SELECT * FROM videos WHERE videos.VIDEO_STATUS = 1 `;
            if (queryArray.slug) {
                videosQuery += ` AND  videos.VIDEO_SLUG = '${queryArray.slug}' `;
            }
            videosQuery += ` ORDER BY videos.VIDEO_SEASION ASC ,videos.VIDEO_EPISODE ASC `;
            // console.log(videosQuery);
            const videosData = PoolQueryHandler(videosQuery, [])
            return videosData
        } catch (err) {
            LogHandler.error('getHome', err)
        }
    }
};
