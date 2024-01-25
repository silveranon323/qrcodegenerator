import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
      message: "Type in your url",
      name: "URL",
    },
  ])
  .then((answers) => {
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream(`${url}.png`));
    fs.writeFile(
      "/Users/hemkishorepradhan/Desktop/BackendDevelopment-udemy/QRCODEGENRATOR/url.txt",
      url,
      (err) => {
        if (err) {
          console.log(err);
        }
        console.log("The file has been saved");
      }
    );
  })

  .catch((error) => {
    if (error.isTtyError) {
      
    } else {
      
    }
  });
