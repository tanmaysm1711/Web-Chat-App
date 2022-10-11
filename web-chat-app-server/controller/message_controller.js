import message from "../model/message.js";
import Conversation from '../model/conversation.js';

export const sendNewMessage = async (request, response) => {
    console.log(request.body);
    const newMessage = new message(request.body);
    
    try {
        await newMessage.save();
        await Conversation.findByIdAndUpdate(request.body.conversationId, { message: request.body.text})
        response.status(200).json('Message Saved Successfully!');
    } catch(error) {
        response.status(500).json(error);
    }
}

export const getMessages = async (request, response) => {
    try {
        const messages = await message.find({ conversationId: request.params.conversationId });
        response.status(200).json(messages);
    } catch(error) {
        response.status(500).json(error);
    }
}