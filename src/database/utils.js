const fs = require('fs')

const savetoDatabase = DB => {
    const path = `./src/database/`
    fs.writeFileSync(path + "db.json", JSON.stringify(DB, null, 2), { encoding: 'utf8' })
}

module.exports = {
    savetoDatabase
}