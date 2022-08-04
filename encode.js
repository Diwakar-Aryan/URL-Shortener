const md5 = require('md5')
const url = require('url')

const solveEncode = (url) => {
  const currentUrl = new URL(url)
  let hostname = currentUrl.hostname.split('.')[1]
  let pathname = currentUrl.pathname.split('/').join('')
  let search = currentUrl.search.substring(3)
  let hash = currentUrl.hash.substring(1)
  let wholeString = hostname + pathname + search + hash
  let md5String = md5(wholeString)
  let urlString =
    currentUrl.hostname +
    '/' +
    Buffer.from(md5String).toString('base64').substring(0, 7)

  return { md5String, urlString }
}
module.exports = { solveEncode }
