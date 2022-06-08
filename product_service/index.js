const express = require('express');
const app = express();
const session = require("express-session");
const redis = require("redis");
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
const userRouter = require("./routes/userRoutes");

// Connetion to mongodb.
// To get ip. inspect docker container for mongo and look in Networks.

// Can also connected by service name here in this case it is mongo, only in
// custom networks, not in default networks
// docker network ls
const dbURL = `mongodb://${MONGO_USER}:${MONGO_PWD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`;
let RedisStore = require("connect-redis")(session);
let redisClient = redis.createClient({
    host: REDIS_URL,
    port: REDIS_PORT,
    legacyMode: true,
});
// await client.connect();
redisClient.set("key", "this is value");

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
app.use(
  session({
    store: new RedisStore({
      client: redisClient,
    }),
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false,
      httpOnly: true,
      maxAge: 30000,
    },
  })
);
const port = process.env.PORT || 3000;
console.log(port);
app.get('/api/v1', (req, res) => {
  res.send('Hello World!!!');
  console.log('here it is!1!!');
})

app.use("/api/v1/product", productRouter);
app.use("/api/v1/user", userRouter);
app.listen(port, () => console.log(`App is listening on port ${port}`));
