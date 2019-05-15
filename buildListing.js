const fs = require("fs");

const page = require("./index.js");

const renderSite = (page) => `
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Sandwich Sudoku</title>
    <meta name="description" content="A site about a Sudoku variant" />
    <link rel="stylesheet" type="text/css" href="style.css"/>
  </head>
  
  <body>
    <main>
      ${page()}
    </main>
  </body>
</html>
`;

  require("mkdirp")("./public", () => {
    const site = renderSite(page);
    console.log(site);
  fs.writeFileSync("./public/index.html", site);
});
