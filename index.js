const http=require('http');
const url=require('url');
const routes = require("./routes/index");
const database=require("./config/db");

database();
const server=http.createServer((req,res)=>{
    const parsedUrl=url.parse(req.url,true);
    const query= parsedUrl.query;
    const path=parsedUrl.pathname;
    const method=req.method.toLocaleUpperCase();
    let handler=routes[path]&&routes[path][method];

    console.log(handler);
    // res.writeHead(200,{'Content-Type':'text/html'});
    // res.end("<h1>Hello</h1>");
    if (!handler) {
        const routeKeys = Object.keys(routes).filter((key) => key.includes(":"));
    
        const matchedKey = routeKeys.find((key) => {
          // replacing each segment of the key that starts with a colon (:)
          const regex = new RegExp(`^${key.replace(/:[^/]+/g, "([^/]+)")}$`);
          return regex.test(path);
        });
    
        if (matchedKey) {
          const regex = new RegExp(`^${matchedKey.replace(/:[^/]+/g, "([^/]+)")}$`);
          const dynamicParams = regex.exec(path).slice(1);
          const dynamicHandler = routes[matchedKey][method];
    
          const paramKeys = matchedKey
            .match(/:[^/]+/g)
            .map((key) => key.substring(1));
    
          const params = dynamicParams.reduce(
            (acc, val, i) => ({ ...acc, [paramKeys[i]]: val }),
            {}
          );
    
          // set params in req
          req.params = params;
    
          handler = dynamicHandler;
        }
      }
    
      // url and method not match
      if (!handler) {
        handler = routes.notFound;
      }
    
      // set query string in req
      req.query = {};
    
      for (const key in query) {
        req.query[key] = query[key];
      }

    handler(req,res);
});
server.listen(4000,()=>{
    console.log('Server is working @4000');
});
