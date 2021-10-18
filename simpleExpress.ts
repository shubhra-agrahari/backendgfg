import * as express from "express";

const app = express();
const router = express.Router();

router.get("/a", (request,response) => {
    response.send("/a url has been invoked");
})
app.listen(3001,() => console.log("simple express server is running at port 3001")
)