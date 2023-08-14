// const express = require("express");
// const axios = require("axios");

// const app = express();
// app.use(express.json());
// app.use(express.static("public"));

// app.get("/api/v1/user", (req, res) => {
//   console.log(req.method, req.body);
//   res.send(req.body);
// });

// app.post("/api/v1/user", (req, res) => {
//   console.log(req.method, req.body, "hello baby");
//   res.send(req.body);
// });

// app.listen(3000, "127.0.0.1", () =>
//   console.log("Server is listening at port 3000")
// );

const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());

app.listen(3000, "127.0.0.1", () =>
  console.log("Server is listening at port 3000")
);

axios
  .post(
    "http://127.0.0.1:3000/api/v1/user",
    {
      firstName: "devansh",
      lastName: "sachan",
    },
    { headers: { "Content-type": "application/json" } }
  )
  .then((response) => {
    console.log("success");
    // res.send(response.data);
  })
  .catch((error) => {
    console.log(error.message);
  });

app.route("/api/v1/user").get((req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.route("/api/v1/user").post((req, res) => {
  console.log(req.body);
  res.send(req.body);
});
