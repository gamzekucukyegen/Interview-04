import React, { useContext, useEffect, useState,createContext } from "react";
 const UserContext=createContext()

 function UserProvider({children}){
  const [userState, setUserState] = useState({
    Namık: true,
    Eda: true,
    Suzan: true,
    Engin: true,
    Samet: true
  });

  return (
    <UserContext.Provider value={{userState,setUserState}}>
      {children}
    </UserContext.Provider>
  )
 }
function App() {
  return(
<UserProvider>
    <UserList/>
  </UserProvider>
  )
  
}

const UserList = () => {
  const { userState ,setUserState} = useContext(UserContext);
useEffect(()=>{
  const interval=setInterval(()=>{
    const user=Object.keys(userState)
    const randomUser=user[Math.floor(Math.random()*user.length)]
    setUserState((prevState) => ({
      ...prevState,
      [randomUser]: !prevState[randomUser], 
    }));
  },2000)
  
  return()=>clearInterval(setInterval)
},[userState])
return (
  <ul style={{ listStyle: "none", padding: 0, textAlign: "center" }}>
    {Object.entries(userState).map(([user, isOnline]) => (
      <li
        key={user}
        style={{
          border: "1px solid #ccc",
          padding: "10px",
          margin: "5px",
          display: "inline-block",
          borderRadius: "8px",
          minWidth: "150px",
        }}
      >
        {user} {isOnline ? "🟢" : "🔴"}
      </li>
    ))}
  </ul>
);
};
export default App;
