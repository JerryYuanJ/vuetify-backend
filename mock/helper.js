const { Random } = require("mockjs")

// 一些常用的生成器

//======= person heplers ======//

// 生成18位的身份证号
const genId = Random.id()
// 生成email
const genEmail = Random.email()
// 生成姓名
const genName = (isChinese = true) => isChinese ? Random.cname() : Random.name()
// 生成地区: 华东/华北...
const genRegion = Random.region()
// 生成省份
const genProvince = Random.province()
// 生成城市, 传入true的话会加上省份信息
const genCity = (isFull = true) => Random.city(!!isFull)
// 生成显, 传入true的话会加上省市信息
const genCountry = (isFull = true) => Random.county(!!isFull)

//======== text helpers =======//

// 生成一个语句
const genSentence = (isChinese = true) => isChinese ? Random.csentence() : Random.sentence()
// 生成一个段落
const genParagraph = (isChinese = true) => isChinese ? Random.cparagraph() : Random.paragraph()

// 生成一个特定的字符, 比如: Y/N, 男/女
const genSingle = (strPool) => {
  let pool
  if (Array.isArray(strPool)) {
    pool = strPool.join('')    
  }
  return Random.cword(pool, 1)
}
// 生成一个单词/词语
const genWord = (isChinese) => isChinese ? Random.word() : Random.cword(2)

//======== date helpers ==========//
/**
 * @param {*} format (eg: yyyy-MM-dd )
 */
const genDate = (format) => Random.date(format)
/**
 * 
 * @param {*} format (eg: HH:mm:ss )
 */
const genTime = (format) => Random.time(format)

const genDatetime = (format) => Random.datetime(format)

module.exports = {
  genId,
  genEmail,
  genName,
  genRegion,
  genProvince,
  genCity,
  genCountry,
  genSentence,
  genParagraph,
  genSingle,
  genWord,
  genDate,
  genTime,
  genDatetime
}