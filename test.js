var htmlToPdf = require('html-to-pdf');
htmlToPdf.convertHTMLFile('test.html', '../test.pdf',
    function (error, success) {
       if (error) {
            console.log('Oh noes! Errorz!');
            console.log(error);
        } else {
            console.log('Woot! Success!');
            console.log(success);
        }
    }
);
