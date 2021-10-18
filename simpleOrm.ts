import * as koa from "koa";
import "./createConnections";
import {Pool} from "pg";
import * as dotenv from "dotenv";
import {Hotels_Csv} from "./hotel_csv";


dotenv.config();


const app = new koa();

app.use(async (ctx) => {
const result = await Hotels_Csv.
ctx.response.body= result.rows;
})

app.listen(process.env.PORT, () => console.log(("simple koa server is running at port 3005"))
)

