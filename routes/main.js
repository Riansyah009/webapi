const shorten = require('../lib/sid')
const tiktok = require('../lib/tiktok')
const routes = async (fastify, options) => {
   fastify.get('/', async (req, res) => {
      return ({
         creator: global.creator,
         status: true,
         msg: `Welcome!`
      })
   })

   fastify.get('/short', async (req, res) => {
      const url = req.query.url
      if (!url) return ({
         creator: global.creator,
         status: false,
         msg: `"url" parameter required!`
      })
      const json = await shorten(url)
      return res.send(json)
   })
}

fastify.get('/tiktok', async (url) => {
      const url = req.query.url
      if (!url) return ({
         creator: global.creator,
         status: false,
         msg: `"url" parameter required!`
      })
      const json = await tiktok(url)
      return res.send({
         status: true,
         creator: global.creator,
         data: {
            nickname: json.data.author.nickname,
            username: json.data.author.unique_id,
            like: json.data.digg_count,
            views: json.data.play_count,
            size: json.data.size,
            caption: json.data.title,
            nowm: "https://tikwm.com" + json.data.play,
            nowmhd: "https://tikwm.com" + json.data.hdplay,
            wm: "https://tikwm.com" + json.data.wmplay,
            music: "https://tikwm.com" + json.data.music,
            images: json.data.images
         }
      })
   })
}

module.exports = routes
