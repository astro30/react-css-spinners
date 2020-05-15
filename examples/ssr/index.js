const React = require('react');
const { Eclipse } = require('react-css-spinners');
const ReactDOMServer = require('react-dom/server');
const express = require('express');
const app = express();

app.get('*', (req, res) => {
  const el = React.createElement(Eclipse);
  const html = ReactDOMServer.renderToString(el);
  res.send(`
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset='utf-8'>
  </head>
  <body>
    ${html}
  </body>
  </html>`);
});

app.listen(5000, () => {
  console.log('Up and running');
});
