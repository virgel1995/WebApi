
module.exports.launch = async (client) => {
	const path = require("path");
const express = require("express");
const { createSSRApp } = require("vue");
const { renderToString } = require("@vue/server-renderer");
const manifest = require("../dist/ssr-manifest.json");

const app = express();
const cookieParser = require("cookie-parser");
const helmet = require("helmet");
 const oneDay = 1000 * 60 * 60 * 24;
var session = require('express-session');

const appPath = path.join(__dirname, "../dist", manifest["app.js"]);
const App = require(appPath).default;

const jsonRoutes = require("./backend/json")
const discordVirus24Routes = require("./backend/packages/discordVirus24")
	const authRoutes = require("./backend/auth")


app.use(express.json()) // For post methods
    app.use(express.urlencoded({ extended: true }))
    app.use(cookieParser())
 app.disable('x-powered-by')
 app.use(helmet({
    contentSecurityPolicy: false,
  }))

app.use("/img", express.static(path.join(__dirname, "../dist", "img")));
app.use("/js", express.static(path.join(__dirname, "../dist", "js")));
app.use("/css", express.static(path.join(__dirname, "../dist", "css")));
app.use(
  "/favicon.ico",
  express.static(path.join(__dirname, "../dist", "favicon.ico"))
);

//add backend  routes to express app
//--------------++++++------------\\
app.use("/json", jsonRoutes)
app.use("/canvas", discordVirus24Routes)
app.use("/auth", authRoutes)

//--------------++++++------------\\
app.get("*", async (req, res) => {
  const app = createSSRApp(App);
  const appContent = await renderToString(app);

  const html = `
  <html>
    <head>
      <title>Hello</title>
      <link rel="stylesheet" href="${manifest["app.css"]}" />
    </head>
    <body>
      ${appContent}
    </body>
  </html>

  `;

  res.end(html);
});

console.log(`
  You can navigate to http://localhost:8080
`);

app.listen(8080);

	
/////////console all routes
	function print (path, layer) {
  if (layer.route) {
    layer.route.stack.forEach(print.bind(null, path.concat(split(layer.route.path))))
  } else if (layer.name === 'router' && layer.handle.stack) {
    layer.handle.stack.forEach(print.bind(null, path.concat(split(layer.regexp))))
  } else if (layer.method) {
    console.log('%s /%s',
      layer.method.toUpperCase(),
      path.concat(split(layer.regexp)).filter(Boolean).join('/'))
  }
}

function split (thing) {
  if (typeof thing === 'string') {
    return thing.split('/')
  } else if (thing.fast_slash) {
    return ''
  } else {
    var match = thing.toString()
      .replace('\\/?', '')
      .replace('(?=\\/|$)', '$')
      .match(/^\/\^((?:\\[.*+?^${}()|[\]\\\/]|[^.*+?^${}()|[\]\\\/])*)\$\//)
    return match
      ? match[1].replace(/\\(.)/g, '$1').split('/')
      : '<complex:' + thing.toString() + '>'
  }
}

app._router.stack.forEach(print.bind(null, []))
};