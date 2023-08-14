axios
  .post(
    "http://localhost:3000/api/v1/user",
    {
      firstName: "Fred",
      lastName: "Flintstone",
    },
    { headers: { "Content-type": "application/json" } }
  )
  .then((response) => {
    console.log(response.data);
    // res.send(response.data);
  })
  .catch((error) => {
    console.log(error.message);
  });
