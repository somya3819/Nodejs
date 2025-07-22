import http from 'http';
import { URL } from 'url';

let people = [
    {id: 1, name: 'Tamanna', age: 19},
    {id: 2, name: 'Sneha', age: 21},
    {id: 3, name: 'Somya', age: 20},
    {id: 4, name: 'Yashika', age: 20},
    {id: 5, name: 'Palak', age: 20},
];

const server = http.createServer((req, res)=> {
    const parsedUrl = new URL(req.url,"http://${req.headers.host}");
    const id = parseInt(parsedUrl.searchParams.get("id"));

    if(req.method === 'PUT' && parsedUrl.pathname == '/update'){
        let body = "";

        req.on('data',chunk=>{
            body += chunk;
        });

        req.on('end',()=>{
            const updatedData = JSON.parse(body);
            const index = people.findIndex(p=> p.id === id);

            if(index != -1){
                people[index] = {id: people[index].id, ...updatedData};

                res.writeHead(200, {'content-type' : 'application/json'});
                res.end(JSON.stringify({
                    message: 'Pa'
                }))
            }
        })
    }
    else if(req.method === 'GET' && parsedUrl.pathname == '/people'){
        res.writeHead(200,{'content-type' : 'application/json'});
        res.end(JSON.stringify(people));
    }
    else{
        res.writeHead(404,{'content-type' : 'text/plain'});
        res.end("Not Found");
    }
});

server.listen(3000, ()=>{
    console.log("http://localhost:3000");
});