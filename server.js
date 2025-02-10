const express = require("express");
const fs = require("fs");
const path = require("path");
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const App = require("./src/App").default; // Import Komponen Utama React

const app = express();

// Menyajikan static files dari build
app.use(express.static(path.resolve(__dirname, "build")));

// SSR menggunakan renderToStaticNodeStream()
app.get("/", (req, res) => {
	const stream = ReactDOMServer.renderToStaticNodeStream(<App />);

	// Kirim awal HTML
	res.write(`
  <!DOCTYPE html>
  <html lang="en">

  <head>
    <meta charset="UTF-8" />
    <meta name="theme-color" content="#000000" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Company Profile PT. Tanjung Karya Jaya" />
    <title>PT. Tanjung Karya Jaya</title>
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
      rel="stylesheet">

    <link href='https://fonts.googleapis.com/css?family=DM Sans' rel='stylesheet'>
    <link rel="icon" type="image/png" href="%PUBLIC_URL%/favicon-96x96.png" sizes="96x96" />
    <link rel="icon" type="image/svg+xml" href="%PUBLIC_URL%/favicon.svg" />
    <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" sizes="48x48"/>
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" sizes="48x48"/>
    <link rel="apple-touch-icon" sizes="180x180" href="%PUBLIC_URL%/apple-touch-icon.png" />
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>
    <script type="text/javascript">
      (function () {
        emailjs.init({
          publicKey: "Zmpny9s7UBa-MlKLk",
        });
      })();
    </script>
  </head>
  <body class="text-blueGray-700 antialiased">
    <div id="root"></div>
  `);

	// Stream React Component ke client
	stream.pipe(res, { end: false });

	stream.on("end", () => {
		res.write(`
      <script defer src="https://unpkg.com/@alpinejs/collapse@3.x.x/dist/cdn.min.js"></script>
      <script src="https://unpkg.com/alpinejs" defer></script>
      <script>
        function sendEmail() {
          const messageParams = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
          };
          emailjs.send('service_bwo4gco', 'template_h96bexo', messageParams)
            .then(function (response) {
              console.log('Success!', response.status, response.text);
              document.getElementById('form').reset();
              alert('Email sent successfully!');
            });
        }
      </script>
    </body>

    </html>
    `);
		res.end();
	});
});

// Menjalankan server di port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`✅ Server berjalan di http://localhost:${PORT}`);
});
