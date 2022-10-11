import { Server } from "socket.io";

const PORT = 9000;

const io = new Server(PORT, {
    cors: {
        origin: 'http://localhost:3000'
    }
});

let users = [];

const addUser = (userId, socketId) => {
    !users.some(user => user.userId === userId) && users.push({ userId, socketId });
}

const getUser = (userId) => {
    console.log(users);
    return users.find(user => user.userId === userId);
}

const removeUser = (socketIdToRemove) => {
    users = users.filter(user => user.socketId !== socketIdToRemove);
}

io.on('connection', (socket) => {
    console.log('User Connected!');

    socket.on('addUser', (userId) => {
        addUser(userId, socket.id);
        io.emit('getUsers', users);
        console.log(users);
    })

    socket.on('sendMessage', ({ senderId, receiverId, text }) => {
        const user = getUser(receiverId);
        io.to(user.socketId).emit('getMessage', {
            senderId, text
        })
    })

    socket.on('disconnect', () => {
        console.log('Disconnected!');
        removeUser(socket.id);
        io.emit('getUsers', users);
    })
});