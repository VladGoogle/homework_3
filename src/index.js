
const fs = require("fs");
function writeToFile() {

    process.argv;
        fs.appendFileSync(process.argv[2], process.argv.slice(3).join(' '));
        /*fs.appendFile("hello.txt", val, function (error) {
            if (error) throw error; // если возникла ошибка*/
            /*console.log("Запись файла завершена. Содержимое файла:");
            let data = fs.readFileSync(process.argv[2], "utf8");
            console.log(data);*/
}

writeToFile();