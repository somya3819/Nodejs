import http from 'http';
import { URL } from 'url';

let people = [
    { id: 1, name: 'Tamanna', age: 19 },
    { id: 2, name: 'Sneha', age: 21 },
    { id: 3, name: 'Somya', age: 20 },
    { id: 4, name: 'Yashika', age: 20 },
    { id: 5, name: 'Palak', age: 20 },
];

const server = http.createServer((req, res) => {
    const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
    const id = parseInt(parsedUrl.searchParams.get("id"));

    console.log("Method:", req.method);
    console.log("Pathname:", parsedUrl.pathname);
    console.log("ID:", id);
    if(req.method=="POST" && parsedUrl.pathname === '/add'){
        let body ="";

        req.on('data',chunk=>{
            body+=chunk;
        });

        req.on('end',()=>{
            const newPerson=JSON.parse(body);
            newPerson.id=people.length +1;
            people.push(newPerson);

            res.writeHead(201,{'content-type' : 'application/json'});
            res.end(JSON.stringify({
                message:'Pearson added successfully',
                added:newPerson
            }));
        })

    }
else if(req.method=='PATCH' && parsedUrl.pathname == '/patch')
{
    let body=""
    req.on('data',chunk=>{
        body+=chunk;
    });

    req.on('end',()=>{
        const patchedData=JSON.parse(body);
        const index = people.findIndex(p=>
            p.id === id);

            if(index !== -1)
            {
                people[index]={ ...people[index], ...patchedData};

                res.writeHead(200,{'content-type' : 'application/json'});
                res.end(JSON.stringyfy({
                    message :'person patched successfully',
                    update:people[index]
                }))
            }
            else{
                res.writeHead(404,{'content-type' : 'appplication/json'});
                res.end(JSON.stringigy({
                    error: 'Person not found'
                }));
            }
    })
}

    else if (req.method === 'PUT' && parsedUrl.pathname === '/update') {
        let body = "";

        req.on('data', chunk => {
            body += chunk;
        });

        req.on('end', () => {
            try {
                const updatedData = JSON.parse(body);
                const index = people.findIndex(p => p.id === id);

                if (index !== -1) {
                    people[index] = { id: people[index].id, ...updatedData };

                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({
                        message: 'Person updated successfully',
                        updated: people[index]
                    }));
                } else {
                    res.writeHead(404, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ error: 'Person not found' }));
                }
            } catch (err) {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Invalid JSON' }));
            }
        });
    } else if (req.method === 'GET' && parsedUrl.pathname === '/people') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(people));
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end("Not Found");
    }
});

server.listen(3456, () => {
    console.log("Server running at http://localhost:3456");
});