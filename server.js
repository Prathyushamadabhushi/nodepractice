var http = require('http');

console.log('***** HTTP MODULE *****');
function startServer(){
    function onRequest(request,response){
        console.log('request received');
        response.writeHead(200, {"Content-Type":"text/plain"});
        response.write("Hello from our application");
        response.end();
    }
    http.createServer(onRequest).listen(8081);

    console.log("Server started on localhost port 8081");
}

exports.startServer = startServer;
