const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv").config();
const hpp = require("hpp");
const helmet = require("helmet");
const cors = require("cors");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const db = require("./models");

const imgRouter = require("./routers/imgRouter");

const PORT = process.env.PORT;
const app = express();

db.sequelize
  .sync()
  .then(() => {
    console.log("mysql database connect");
  })
  .catch(console.error);

//basic settings
app.set("trust proxy", 1);

//dev, prod settings
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
  app.use(
    cors({
      origin: [process.env.DEV_FRONT_URL, "*"],
      credentials: true,
    })
  );
} else {
  app.use(morgan("combined"));
  app.use(helmet());
  app.use(hpp());
  app.use(
    cors({
      origin: [process.env.PROD_FRONT_URL, "*"],
      credentials: true,
    })
  );
}

//ETC settings
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  session({
    saveUninitialized: false,
    resave: false,
    secret: process.env.COOKIE_SECRET,
    proxy: true,
    cookie: {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production" ? true : false,
      // domain:
    },
  })
);

app.get("/", (req, res) => {
  res.send("Express Rest full API");
});

app.use("/api/img", imgRouter);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT} SERVER START!`);
});
