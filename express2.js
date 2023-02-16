const express = require("express");
const path = require("path");
const app = express();

const publicPath = path.join(__dirname, "public");

app.set("view engine", "ejs");

app.get("", (_, resp) => {
  resp.sendFile(`${publicPath}/index.html`);
});

app.get("/profile", (_, resp) => {
  const user = {
    name: "sachin",
    email: "sachinthakkar20@gnu.ac.in",
    city: "ahemdabad",
    skills: ["cricket", "movies", "traveling"],
  };
  resp.render("profile", { user });
});

app.get("/login", (_, resp) => {
  
  resp.render("login",);
});
// app.get("/help", (_, resp) => {
//   resp.sendFile(`${publicPath}/help.html`);
// });

app.get("/about", (_, resp) => {
  resp.sendFile(`${publicPath}/about.html`);
});

app.get("*", (_, resp) => {
  resp.sendFile(`${publicPath}/404.html`);
});

app.listen(2910);
