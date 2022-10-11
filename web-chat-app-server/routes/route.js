import express from 'express';

import { addUser, getUsers } from '../controller/user_controller.js';
import { newConversation, getConversation } from '../controller/conversation_controller.js';
import { sendNewMessage, getMessages } from '../controller/message_controller.js';

const route = express.Router();

route.post('/add_user', addUser);
route.get('/get_users', getUsers);

console.log("Hello I am express!");

route.post('/conversation/add', newConversation);
route.post('/conversation/get', getConversation);

route.post('/message/add', sendNewMessage);
route.get('/message/get/:conversationId', getMessages);


export default route;