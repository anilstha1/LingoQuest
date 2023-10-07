import React, {useState, useEffect} from "react";
import SocketContext from "./socketContext";

const SocketProvider = ({children}) => {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io("http://localhost:3000");

    setSocket(newSocket);

    // Close the SocketIO connection when the component unmounts
    return () => {
      newSocket.close();
    };
  }, []);

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};

export default SocketProvider;
