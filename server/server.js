import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import Message from "./models/message.js";
import Pusher from "pusher";

//app config
const app = express();
const PORT = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

//DB config


mongoose.connect("mongodb://localhost:12345/mern-whatsapp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
const connection = mongoose.connection;

connection.once("open", () => {
  console.log("mongodb database connection established succesfully");

//   const msgCollection = connection.collection("messagecontents");
//   const changeStream = msgCollection.watch();
//   console.log(changeStream);

//   changeStream.on("change", (change) => {
//     console.log("change", change);

//     if (change.operationType === "insert") {
//       const messageDetails = change.fullDocument;
//       pusher.trigger("message", "inserted", {
//         name: messageDetails.user,
//         message: messageDetails.message,
//         timestamp:messageDetails.timestamp
//       });
//     }
//   });
});

//???

//api routes
app.get("/", (req, res) => res.status(200).send("hello world"));
app.post("/messages/new", (req, res) => {
  const dbMessage = req.body;

  Message.create(dbMessage, (err, data) => {
    if (err) {
      res.status(500).send(err); //internal server error
    } else {
      res.status(201).send("new message created: \n" + data); //created OK
    }
  });
});

app.get("/messages/sync", (req, res) => {
  Message.find((err, data) => {
    if (err) {
      res.status(500).send(err); //internal server error
    } else {
      res.status(200).send(data);
    }
  });
});

//listen
app.listen(PORT, () => console.log("Listening on localhost:" + PORT));

// {
// 	"message":"works!",
// 	"name":"iroh",
// 	"timestamp":"demo timestamp",
// 	"recieved":false
// }
