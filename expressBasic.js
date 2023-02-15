const express = require("express");
const app = express();

app.get("", (req, resp) => {
  console.log("Data send by browser : ", req.query.name);
  //   resp.send("<h1>This is home page </h1>" + req.query.name);
  resp.send(`<h1>This is home page </h1>
  <a href= "/about"> Go to About Page </a> <br>
  <a href= "/help"> Go to help Page </a>`);
});

app.get("/about", (req, resp) => {
  resp.send(`
  <h1>This is about page </h1>
  <input type=text placeholder="Username" value = "${req.query.name}" />
  <button> click </button`);
});

app.get("/help", (req, resp) => {
  resp.send(
    // "<h1>This is help page </h1>"
    [
      { name: "Sachin", email: "sachinthakkar@gnu.ac.in" },
      { name: "Mustakim", email: "mustakim@gnu.ac.in" },
      { name: "Ummed", email: "ummed@gnu.ac.in" },
    ]
  );
});

app.listen(2910);
