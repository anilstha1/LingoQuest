// // import {useEffect, useState} from "react";
// // import {user} from "./Joinroom";
// // import io from "socket.io-client";
// // var socket;
// // function Chat() {
// //   const [currentMessage, setCurrentMessage] = useState("");
// //   const [datalist, setdatalist] = useState([]);
// //   useEffect(() => {
// //     socket = io.connect("http://localhost:3001");

// //     //join room
// //     if (user.roomcreator) {
// //       const users = {
// //         nickname: user.nickname,
// //         room: user.room,
// //       };
// //       socket.emit("join_room", users);
// //     } else {
// //       const users = {
// //         nickname: user.nickname,
// //         room: user.room,
// //       };
// //       socket.emit("create_room", users);
// //     }

// //     // receive message
// //     socket.on("joined", (message) => {
// //       console.log(message);
// //     });

// //     socket.on("welcome", (message) => {
// //       console.log(message);
// //     });

// //     socket.on("usersdata", (users) => {
// //       console.log(users);
// //     });

// //     socket.on("disconnected", (user) => {
// //       console.log(`${user.nickname} disconnected`);
// //     });
// //     // socket.on("receive_message", (data) => {
// //     //   setdatalist([...datalist, data]);
// //     // });
// //     return () => {
// //       socket.close();
// //     };
// //   }, [datalist]);

// //   const sendMessage = async () => {
// //     if (currentMessage !== "") {
// //       const messagedata = {
// //         username: user.username,
// //         id: user.id,
// //         message: currentMessage,
// //         time:
// //           new Date(Date.now()).getHours() +
// //           ":" +
// //           new Date(Date.now()).getMinutes(),
// //       };
// //       setdatalist([...datalist, messagedata]);
// //       console.log(datalist);
// //       await socket.emit("send_message", messagedata);
// //     }
// //     Event.preventdefault();
// //   };

<<<<<<< HEAD

// //   return (
// //     <>
// //       <div className="login">
// //         <div className="container">
// //           <div className="message_output">
// //             {datalist.map((data) => {
// //               return (
// //                 <div>
// //                   {data.username === user.username ? (
// //                     <div>
// //                       <div className="messagelist">{data.message}</div>
// //                       <div className="details">{data.time}</div>
// //                     </div>
// //                   ) : (
// //                     <div>
// //                       <div className="messagelist">{data.message}</div>
// //                       <div className="details">{data.time}</div>
// //                     </div>
// //                   )}
// //                 </div>
// //               );
// //             })}
// //           </div>
// //           <div>
// //             <input
// //               type="text"
// //               onChange={(e) => {
// //                 setCurrentMessage(e.target.value);
// //               }}
// //             />
// =======
=======
>>>>>>> b82612787a8489f9a1980e6af7d7d5cfc7313189
//   return (
//     <>
//       <div className="login">8
//         <div className="container">
//           <div className="message_output">
//             {datalist.map((data) => {
//               return (
//                 <div>
//                   {data.username === user.username ? (
//                     <div>
//                       <div className="messagelist">{data.message}</div>
//                       <div className="details">{data.time}</div>
//                     </div>
//                   ) : (
//                     <div>
//                       <div className="messagelist">{data.message}</div>
//                       <div className="details">{data.time}</div>
//                     </div>
//                   )}
//                 </div>
//               );
//             })}
//           </div>
//           <div>
//             <input
//               type="text"
//               onChange={(e) => {
//                 setCurrentMessage(e.target.value);
//               }}
//             />
<<<<<<< HEAD
// >>>>>>> main
=======
>>>>>>> b82612787a8489f9a1980e6af7d7d5cfc7313189

// //             <button onClick={sendMessage}>send</button>
// //           </div>
// //         </div>
// //       </div>
// //     </>
<<<<<<< HEAD
// //   );
// // }
=======
//   );
// }
>>>>>>> b82612787a8489f9a1980e6af7d7d5cfc7313189

// // export default Chat;
