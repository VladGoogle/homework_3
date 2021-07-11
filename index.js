
function writeToFile() {
    const fs = require("fs");
    process.argv.forEach((val, index) => {
        console.log(`${index}: ${val}`);
        fs.appendFileSync("hello.txt", val);
        /*fs.appendFile("hello.txt", val, function (error) {
            if (error) throw error; // если возникла ошибка*/
            console.log("Запись файла завершена. Содержимое файла:");
            let data = fs.readFileSync("hello.txt", "utf8");
            console.log(data);
        });
}

writeToFile();