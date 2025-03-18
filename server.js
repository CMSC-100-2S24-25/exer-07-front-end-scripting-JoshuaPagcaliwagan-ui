//Joshua O. Pagcaliwagan CMSC 100 C-1L Exer 7 Front End Scripting
import express from "express";//import

const app = express();

app.use(express.static("static_files"));//static files

app.listen(3000, () => {//start on port 3000
  console.log("Server running on http://localhost:3000");//log URL on console
});