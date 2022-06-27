const http = require("http");
const express = require("express");

const morgan = require("morgan");
const helmet = require("helmet");
const compression = require("compression");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const csrf = require("csurf");

const server = express();

server.use(morgan("short"));

server.use(helmet({
    isNoOpen:false
}));

server.use(compression());

server.get("/search", (req,res)=>{
    result="result";
    res.send(result);
});

const router = express.Router();
router.use(bodyParser.json());
router.use(cookieParser());
router.use(csrf({cookie:true}));

router.post("/user", async(req,res) => {
    res.send("test"); 
    res.send({staus:"OK"});
});

server.use("/api",router);

http.createServer(server).listen(8000);


