
const fs = require("fs");
function writeToFile() {

    process.argv;
        fs.appendFileSync(process.argv[2], process.argv.slice(3).join(' '));
}

writeToFile();
