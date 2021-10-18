import * as http from 'http'

const server=http.createServer((Request, Response)=>{
    if(Request.url === '/a')
    Response.write("a url");
    else if(Request.url === '/b')
    Response.write("b url");
    else
    Response.write("incorrect url");
    Response.end();
})
server.listen(3000,()=>console.log("server is running at port 3000"));