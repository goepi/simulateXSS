const getTemplate = data => `
  <!DOCTYPE html>
  <html lang="en" dir="ltr">
    <head>
      <meta charset="utf-8">
      <title></title>
    </head>
    <body>
      <div>
      </div>
      <script>
        window.data = ${JSON.stringify(data)}
      </script>
    </body>
  </html>
`;

module.exports = getTemplate;
