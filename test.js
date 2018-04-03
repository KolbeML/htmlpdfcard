//var htmlToPdf = require('html-to-pdf');
//htmlToPdf.convertHTMLFile('testy.html', '../test.pdf',
    //function (error, success) {
      // if (error) {
         //   console.log('Oh noes! Errorz!');
         //   console.log(error);
       // } else {
        //    console.log('Woot! Success!');
        //    console.log(success);
      //  }
  //  }
//);

var fs = require('fs');
var pdf = require('html-pdf');
var html = fs.readFileSync('testy.html', 'utf8');
var options = { format: 'Letter' };
 
pdf.create(html, options).toFile('./test.pdf', function(err, res) {
  if (err) return console.log(err);
  console.log(res); // { filename: '/app/testy.pdf' }
});
