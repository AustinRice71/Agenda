const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const homeContent = "This is a test for ejs home route";

const app = express();
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));

app.get("/", function(req, res){
  res.render("index", {
    homeContent: homeContent
  });
});

//serve a static file is this case our css stylesheet
app.use(express.static("public"));

//set app to listen on port 3000
app.listen(3000, function(){
  console.log("Server started on port 3000");
})
