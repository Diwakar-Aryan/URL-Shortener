const Url = require('../models/url')
const { solveEncode } = require('../encode')
const insertUrl = async (req, res) => {
  console.log(req.body.url)
  let { id: _id, urlString } = solveEncode(req.body.url)
  await Url.create({ _id: _id, url: req.body.url, shortId: urlString })
    .then(() => {
      res.status(200).json({ shortId: urlString })
    })
    .catch((error) => {
      console.log(error)
      res.status(402).json({ message: 'Some Error' })
    })
}
const getUrl = async (req, res) => {
  let shortId = req.body.reUrl
  let retrievedUrl = await Url.find({ shortId: shortId })
  if (retrievedUrl[0]) {
    res.status(201).json({ redirectUrl: retrievedUrl[0] })
  } else {
    res.status(203).json({ message: 'Not Found' })
  }
}
module.exports = { insertUrl, getUrl }
