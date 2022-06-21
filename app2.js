
const http = require('http');
const fs = require('fs');
const ejs = require('ejs');
const moment = require('moment');
moment.locale('ja');
let datetoday = moment().format('LL');//LLはフォーマット

const index = fs.readFileSync('./index1.ejs','utf8');

var server = http.createServer(getFromClient);
server.listen(3000);
console.log(datetoday);

function getFromClient(req,resp){
        var content = ejs.render(index,{
          title:'kichein',
           today:datetoday,
        });
        resp.writeHead(200, {'Content-Type':'text/html'});
        resp.write(content);
        resp.end();
}
