function home(response){
    console.log("executing home handler");
    var htmlfile = '<html>'+
                        '<head>'+
                            '<meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />'+
                        '</head>'+
                        '<body>'+
                            '<form action="/review" method="post">'+
                            '<textarea name="text" rows="20" cols="60"></textarea>'+
                            '<input type="submit" value="Submit text" />'+
                            '</form>'+
                        '</body>'+    
                    '</html>';
response.writeHead(200,{"Content-Type":"text/html"});
response.write(htmlfile);
response.end();
}
function review(){
    console.log("executing review handler");
}
exports.home = home;
exports.review = review;