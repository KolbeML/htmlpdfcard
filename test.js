
  var pdfFiller = require('pdffiller');
console.log("hi")
  var name = "Jewel Chiong";
  var org = "Towson University";
  var url = "clark.center/howdy";
  var sourcePDF = "https://s3.amazonaws.com/businesscard-resources/businesscardformempty.pdf";
  var destinationPDF = "test/test_complete.pdf";

  var data = {
    Name2: name,
    Org2: org,
    Org1: org,
    Name3: name,
    Org3: org,
    Name4: name,
    Org4: org,
    Name5: name,
    Org5: org,
    Name6: name,
    Org6: org,
    Name7: name,
    Org7: org,
    Name8: name,
    Org8: org,
    Name9: name,
    Org9: org,
    Name10: name,
    Org10: org,
    Name1: name,
    URL1: url,
    URL2: url,
    URL9: url,
    URL10: url,
    URL3: url,
    URL4: url,
    URL5: url,
    URL6: url,
    URL7: url,
    URL8: url
  };

  pdfFiller.fillForm(sourcePDF, destinationPDF, data, function (err) {
    if (err) throw err;
    console.log("Form is filled.");
  });

  //window.location = "test_complete.pdf";
