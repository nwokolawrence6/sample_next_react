const express = require('express');
const next = require('next');

const port = parseInt(process.env.PORT, 10) || 6050;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev: dev });
const handle = app.getRequestHandler();


app.prepare().then(() => {
    const server = express();
    // server.use('/api', createProxy({port: 3001, path: '/'} ));
    server.use(app.serveStatic);
    server.get('*', (req, res) => {
        return handle(req, res)
    });
    server.listen(port, err => {
        if (err) throw err;
        console.log(`> Ready on http://localhost:${port}`)
    });
});
