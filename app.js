const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  const message = req.body.textAreaMessage;
  const email = req.body.email;
  console.log(message, email);

  const data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          MMERGE6: message,
        },
      },
    ],
  };
  const jsonData = JSON.stringify(data);
  const url = "https://us17.api.mailchimp.com/3.0/lists/ac370cdd1e";
  const options = {
    method: "POST",
    auth: "denisa:009868d1c29afb05e73605bedc3b5901-us17",
  };

  const request = https.request(url, options, function (response) {
    response.on("data", function (data) {
      console.log(JSON.parse(data));
    });
  });
  request.write(jsonData);
  request.end();
});

app.listen(process.env.PORT || 3000, function () {
  console.log("Server is running on port 3000");
});

//API KEY
// 009868d1c29afb05e73605bedc3b5901-us17

//List ID
//ac370cdd1e
