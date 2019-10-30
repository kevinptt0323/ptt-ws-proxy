#!/usr/bin/env node
const httpProxy = require('http-proxy');

const config = require('./config');

const logging = config.silent ? () => {} : console.log;

const proxy = httpProxy.createProxyServer({
  target: 'wss://ws.ptt.cc/bbs',
  ws: true,
  changeOrigin: true,
  headers: {
    origin: 'app://pcman',
  },
}).listen(config.server);

proxy
  .on('proxyReqWs', (proxyRes, req, socket) => {
    const addr = req.headers['x-forwarded-for'] || socket.remoteAddress;
    logging(`connection from ${addr}`);
  })
  .on('open', (proxySocket) => {
    logging(`connected to ${proxySocket.remoteAddress}`);
  })
  .on('close', (res, socket, head) => {
    logging('connection closed');
  })
  .on('error', (err) => {
    logging(err);
  })
;
