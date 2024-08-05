import React, { createContext, useEffect, useState } from 'react'
import { useContext } from 'react'
import { useAuthContext } from './AuthContext';
import io from "socket.io-client";

const SocketContext=createContext();

export const useSocketContext=()=>{
    return useContext(SocketContext);
}

export const SocketContextProvider=({children})=>{

    const[socket,setSocket]=useState(null)//used to make connection with server
    const[onlineUsers,setOnlineUsers]=useState([])//array of object's key containing userid 
    const{authUser}=useAuthContext();

    useEffect(()=>{
    if(authUser)
    {
        const socket=io("http://localhost:5000", { //client making socket connection with server
            query: {
                userId: authUser._id,
            },
        })
        setSocket(socket)

        // socket.on() is used to listen to the events. can be used both on client and server side
        socket.on("getOnlineUsers", (users) => { // receive keys i.e userId 
            setOnlineUsers(users);
        });

        return ()=>socket.close()//close socket connection when component is unmounted
    }
    else{  //no loggedin user
    if(socket)//if existing socket connection
    {
        socket.close()
        setSocket(null)
    }
    }
    },[authUser])

    return <SocketContext.Provider value={{socket,onlineUsers}}>{children}</SocketContext.Provider>
}

export default SocketContext