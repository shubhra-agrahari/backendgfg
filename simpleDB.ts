import * as koa from "koa";
import {Pool} from "pg";
import * as dotenv from "dotenv";

dotenv.config();

const pool =  new Pool({
    connectionString:process.env.DATABASE_URL,

    ssl:{
        rejectUnauthorized: false
    }
});
const app = new koa();

app.use(async (ctx) => {
await pool.connect();
const result = await pool.query("select * from hotels_csv");
ctx.response.body= result.rows;
})

app.listen(process.env.PORT, () => console.log(("simple koa server is running at port 3005"))
)

