const net = require("net");
const Name = "CJG";

const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243', // IP address here,
    port: 50541 // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    // code that does something when the connection is first established
    console.log("we are live baby!");
    //conn.write("Hello from Thor");
    conn.write('Name: CJG');
    //conn.write("Move: up");
    function moveUp() {
      conn.write("Move: up");
    }
    const go = setInterval(moveUp, 500);

  });
  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });
 
  return conn;
};

module.exports = connect;