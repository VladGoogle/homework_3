const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

describe('Test homework 1', function () {

  const content = 'content string';
  const fileName = 'toWriteFileName.txt';
  const filePath = path.join(__dirname, fileName)
  let numberCalled = 0;

  it('should not fail', function () {
    execSync(`node ../src/index.js ${fileName} ${content}`, { cwd: __dirname } );
    numberCalled++;

    expect(fs.existsSync(filePath)).toBeTruthy();
  });

  it('should append data to file with every call and not rewrite content', function () {
    execSync(`node ../src/index.js ${fileName} ${content}`, { cwd: __dirname });
    numberCalled++;
    const file = fs.readFileSync(filePath).toString('utf8');

    expect(file).toEqual(content.repeat(numberCalled))
  });


  afterAll(() => {
    fs.unlinkSync(filePath);
  });

});
