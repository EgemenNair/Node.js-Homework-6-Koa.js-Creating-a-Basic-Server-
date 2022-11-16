// Koa Imported:
import Koa from "koa";

// Koa defined to 'app' constant:
const app = new Koa();

// Setting a static port as constant:
const port = 3000;

// Listening for port:
app.listen(port);

// Responses:
app.use((ctx) => {
    switch (ctx.request.url) {
        case "/index":
            ctx.response.body = "<h1>Index Page</h1>";
            break;
        case "/about":
            ctx.response.body = "<h1>About Page</h1>";
            break;
        case "/contact":
            ctx.response.body = "<h1>Contact Page</h1>";
            break;
        default:
            ctx.response.status = 404;
            ctx.response.body = "<h1>404 NOT FOUND</h1>";
            break;
    }
});
