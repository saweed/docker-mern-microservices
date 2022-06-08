const express = require('express');
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const {
  MONGO_USER,
  MONGO_PWD,
  MONGO_IP,
  MONGO_PORT,
  REDIS_URL,
  REDIS_PORT,
  SESSION_SECRET,
} = require("./config/config");
const productRouter = require("./routes/productRoutes");

// Connetion to mongodb.
// To get ip. inspect docker container for mongo and look in Networks.

// Can also connected by service name here in this case it is mongo, only in
// custom networks, not in default networks
// docker network ls
const dbURL = `mongodb://${MONGO_USER}:${MONGO_PWD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`;

app.use(express.json());

const connectWithRetry = () => {
  mongoose.connect(dbURL, {
      useNewUrlParser: true,
      UseUnifiedTopology: true,
    })
    .then(() => console.log("mongo connection established."))
    .catch((e) => {
      console.log(e);
      setTimeout(connectWithRetry, 2000);
    });
}

connectWithRetry();
app.enable("trust proxy");
app.use(cors({}));
const port = process.env.PORT || 3000;
console.log(port);

app.get('/api/v1', (req, res) => {
  res.send('Hello product service');
  console.log("Hello product service");
})

app.use("/api/v1/product", productRouter);
app.listen(port, () => console.log(`App is listening on port ${port}`));
