const fse = require('fs-extra');

const ensureDir = (sampleHtml) => {
  return new Promise((resolve, reject) => {
    fse.ensureDir('./dist', err => {
      if (err) {
        reject(err);
        return;
      }

      resolve(sampleHtml);
    });
  });
};


const writeFile = fileContent => {
  return new Promise((resolve, reject) => {
    fse.writeFile('./dist/index.html', fileContent, err => {
      // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
      if (err) {
        reject(err);
        // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
        return;
      }

      // if everything went well, resolve the Promise and send the successful data to the `.then()` method
      resolve({
        ok: true,
        message: 'HTML file created!'
      });
    });
  });
};

const copyFile = fileContent => {
  return new Promise((resolve, reject) => {
    fse.copyFile('./src/style.css', './dist/style.css', err => {
      // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
      if (err) {
        reject(err);
        // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
        return;
      }

      // if everything went well, resolve the Promise and send the successful data to the `.then()` method
      resolve({
        ok: true,
        message: 'CSS file copied!'
      });
    });
  });
};

module.exports = { ensureDir, writeFile, copyFile };
