const fs = require("fs");

const page = require("./index.js");

const data = JSON.parse(fs.readFileSync("./webring.json", "utf8"));

const renderSite = (data) => `
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${data.title}</title>
    <meta name="description" content="${data.description}" />
  </head>
  <body>
    <main>
      ${page}
    </main>
  </body>
</html>
`;

  require("mkdirp")("./public", () => {
    const site = renderSite(data);
    console.log(site);
  fs.writeFileSync("./public/index.html", site);
});
