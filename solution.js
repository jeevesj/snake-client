solution.txt
==========================================

play play play play play

const { setDefaultResultOrder } = require("dns");
const connect = require("./client")
const setupInput = require("./input")

console.log("Connecting ...");
const connection = connect();
setupInput(connection); 
==========================================



==========================================

constants constants constants constants

Nosa Agho says:const IP = '10.0.2.15';
const PORT = 50541;

module.exports = {
  IP,
  PORT,
}; 


==========================================

==========================================

input input input input input

let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", (key) => {
    handleUserInput(key);
  });
  
  //handleUserInput);
  return stdin;
};

const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  }
  
  if (key === 'w') {
      connection.write('Move: up');
    }

  if (key === "a") {
      connection.write("Move: left");
    }

  if (key === "s") {
      connection.write("Move: down");
    }

  if (key === "d") {
      connection.write("Move: right");
    }

    if (key === 'r'){
      connection.write('Say: Lets Go!')
    }
  }

  //setupInput();

  module.exports = setupInput; 

  ==========================================
  ==========================================

  clients clients  clients clients  clients clients

  const { IP, PORT } = require("./constant");
const net = require("net");
// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP, // IP address here,
    port: PORT// PORT number here,
  });

  // interpret incoming data as text incase it is in another form
  conn.setEncoding("utf8");
  //connect event
  conn.on("connect", () => {
    // code that does something when the connection is first established
    console.log("connected to server...");
    conn.write('Name: SNK');
    
//conn.write
('Move: up');
    
  });
  
  return conn;
};


module.exports = connect; 