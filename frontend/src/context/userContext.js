// UserContext.js
import React, {createContext, useContext, useState} from "react";

// Create a context for user-related data
const UserContext = createContext();

// Create a provider component to wrap your app
export function UserProvider({children}) {
  const [userName, setUserName] = useState("DefaultUser"); // Initial user name
  const [totalScore, setTotalScore] = useState(0);
  // Function to update the user's name
  const changeUserName = (newName) => {
    setUserName(newName);
  };
  const changetotalScore = (newScore) => {
    console.log("new score", newScore);
    setTotalScore(newScore);
  };
  return (
    <UserContext.Provider
      value={{userName, changeUserName, totalScore, changetotalScore}}
    >
      {children}
    </UserContext.Provider>
  );
}

// Custom hook to access the user context values
export function useUser() {
  return useContext(UserContext);
}
