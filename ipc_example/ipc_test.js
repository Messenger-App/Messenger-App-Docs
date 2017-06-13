const net = require("net");

net.createServer(sock => {
    
    console.log("connected");

    sock.on('data', data => {
        data = String(data).trim();
        sock.write("Hello Java! I received '" + data + "' from you.\n"); 
    });

    sock.on('close', data => {
        console.log("closed");
        process.exit();
    });

}).listen(6969, "127.0.0.1");

console.log("listening on 127.0.0.1:6969");
