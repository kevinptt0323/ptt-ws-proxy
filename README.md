# ptt-ws-proxy
A Proxy Server for PTT over WebSocket.

## Install and Run

1. Via git
```
> git clone https://github.com/kevinptt0323/ptt-ws-proxy.git
> cd ptt-ws-proxy
> ./index.js
listening on 127.0.0.1:9770
```

2. Via package manager
```
> npm install ptt-ws-proxy -g
> ptt-ws-proxy
listening on 127.0.0.1:9770
```

## Configuration
Modify `config.js`.

- `server`: The option to the proxy server. See also [`net.Server.listen()`](https://nodejs.org/api/net.html#net_server_listen_options_callback).
- `silent`: If `true`, the program will not show connection messages. (Default: `false`)
