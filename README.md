# ptt-ws-proxy
A Proxy Server for PTT over WebSocket.

## Run Server
```
> node .
listening on 127.0.0.1:9770
```

## Configuration
Modify `config.js`.

- `server`: The option to the proxy server. See also [`net.Server.listen()`](https://nodejs.org/api/net.html#net_server_listen_options_callback).
- `silent`: If `true`, the program will not show connection messages. (Default: `false`)
