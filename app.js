const http = require('http');
const fs = require('fs');
const ejs = require('ejs');
const url = require('url');
const qs = require('querystring');

const index_page = fs.readFileSync('./index.ejs', 'utf-8');
const other_page = fs.readFileSync('./other.ejs', 'utf-8');
const style_css = fs.readFileSync('./style.css', 'utf-8');

var server = http.createServer(getFromClient);

server.listen(3000);
console.log('Server start');

function getFromClient(request, response){
    var url_parts = url.parse(request.url,true);
    switch (url_parts.pathname) {
        case '/':
            response_index(request,response);
            break;

        case '/other':
            response_other(request,response);
            break;

        case '/style.css':
            response.writeHead(200, {'Content-Type':'text/css'});
            response.write(style_css);
            response.end();
            break;

        case '/test-fetch':
            console.log("test-fetch");
            response.writeHead(200, {'Content-Type':'application/json'});
            response.writeHead(200, {'Access-Control-Allow-Origin':'*'});
            response.write("test");
            response.end();
            break;

        default:
            response.writeHead(200, {'Content-Type':'text/plain'});
            response.end('no page');
            break;
    }
}



var data = {
    'Taro': '090-999-999',
    'Hanako': '080-888-888',
    'Sachiko': '070-777-777',
    'Ichro': '060-666-666'
};

function response_index(request, response){
    var msg = "これはIndexページです。";
    var content = ejs.render(index_page,{
        title:"Index",
        content:msg,
        data:data,
        filename:'data_item'
    });

    response.writeHead(200, {'Content-Type':'text/html'});
    response.write(content);
    response.end();
}

function response_other(request, response){
    var msg = "これはotherページです。";

    if (request.method == 'POST'){
        var body='';

        request.on('data',(data) => {
            body +=data;
        });

        request.on('end', () => {
            var post_data = qs.parse(body);
            msg += 'あなたは「' + post_data.msg + '」と書きました。';
            
            var content = ejs.render(other_page,{
                title:"other",
                content:msg
            });
            response.writeHead(200, {'Content-Type':'text/html'});
            response.write(content);
            response.end();
        });
    } else {
        var msg = "ページがありません";
        var content = ejs.render(other_page,{
            title:"other",
            content:msg
        });
        response.writeHead(200, {'Content-Type':'text/html'});
        response.write(content);
        response.end();
    }

}