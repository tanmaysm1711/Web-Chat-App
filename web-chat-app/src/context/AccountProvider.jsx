import { io } from 'socket.io-client';
import { createContext, useState, useRef, useEffect } from "react";

export const AccountContext = createContext(null);

const AccountProvider = ({ children }) => {
    const [account, setAccount] = useState();
    const [activeUsers, setActiveUsers] = useState([]);
    const [newMessageFlag, setNewMessageFlag] = useState(false);

    const socket = useRef();

    useEffect(() => {
        socket.current = io('ws://localhost:9000');
    }, [])

    return (
        <AccountContext.Provider value={{ 
            account, 
            setAccount,
            socket,
            setActiveUsers,
            activeUsers,
            setNewMessageFlag,
            newMessageFlag
        }}>
            {children}
        </AccountContext.Provider>
    )
}

export default AccountProvider;