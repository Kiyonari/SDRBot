
const crypto = require("crypto")


module.exports = {
    getUniqueColor(username) {
        let md5 = crypto.createHash('md5')
        md5.update(username)
        return Math.round((parseInt(md5.digest('hex'),16)/(Math.pow(2,129)-1))*16777214)
    }
}
