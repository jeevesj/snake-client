//const net = require("net");
const connect = require("./client");
const setupInput = require("./input");


// const setupInput = (conn) => {
//   connection = conn;
//   const stdin = process.stdin;
//   stdin.setRawMode(true);
//   stdin.setEncoding("utf8");
//   stdin.resume();
//   stdin.on("data", (key) => {
//     handleUserInput(key);
//   });
  
//   //handleUserInput);
//   return stdin;
// }; 

// const handleUserInput = function(key) {
//   if(key === '\u0003') {
//     process.exit();
//   }
//   if(key === 'w') {
//     connection.write("Move: up");
//   }
//   if(key === 'a') {
//     connection.write("Move: left");
//   }  
//   if(key === 's') {
//     connection.write("Move: down");
//   } 
//   if(key === 'd') {
//     connection.write("Move: right");
//   }
//   // your code here
// };


// establishes a connection with the game server
// const connect = function () {
//   const conn = net.createConnection({
//     host: '165.227.47.243', // IP address here,
//     port: 50541 // PORT number here,
//   });

//   // interpret incoming data as text
//   conn.setEncoding("utf8");


//   conn.on("connect", () => {
//     // code that does something when the connection is first established
//     console.log("we are live baby!");
//     setTimeout(() => [console.log("we are live")], 2000);

//   });
 


//   return conn;
// };

console.log("Connecting ...");
let connection = connect();
//console.log(connection);
setupInput(connection);