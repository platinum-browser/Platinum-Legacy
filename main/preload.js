const fs = require('node:fs')
const path = require('node:path')

function loadFile(filePath) {
    fs.readFileSync(filePath)
}