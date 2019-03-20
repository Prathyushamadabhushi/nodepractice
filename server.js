var http = require('http');
var url = require('url');

console.log('***** HTTP MODULE *****');
function startServer(route, handle){
    function onRequest(request,response){
        var pathname = url.parse(request.url).pathname;
        console.log('request received for', pathname);
        route(handle, pathname, response);
    }
    http.createServer(onRequest).listen(8081);

    console.log("Server started on localhost port 8081");
}

exports.startServer = startServer;
