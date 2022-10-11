import axios from 'axios';

const URL = 'http://localhost:8000';

export const addUser = async (data) => {
    try {
        return await axios.post(`${URL}/add_user`, data);
    } catch(error) {
        console.log("Error while calling addUser api ", error);
    }
}

export const getUsers = async () => {
    try {
        let response = await axios.get(`${URL}/get_users`);
        console.log("In getUsers");
        console.log(response);
        return response.data;
    } catch(error) {
        console.log("Error while calling getUsers api ", error);
    }
}

export const setConversation = async (data) => {
    try {
        await axios.post(`${URL}/conversation/add`, data);
    } catch(error) {
        console.log('Error while calling setConversation API', error);
    }
}

export const getConversation = async (data) => {
    console.log("In getConversation");
    try {
        let response = await axios.post(`${URL}/conversation/get`, data);
        return response.data;
    } catch(error) {
        console.log('Error while calling getConversation API: ', error);
    }
}

export const sendNewMessage = async(data) => {
    try {
        await axios.post(`${URL}/message/add`, data);
    } catch(error) {
        console.log('Error while calling sendNewMessage API: ', error);
    }
}

export const getMessages = async (conversationId) => {
    try {
        return await axios.get(`${URL}/message/get/${conversationId}`);
    } catch(error) {
        console.log('Error while calling getConversation API: ', error);
    }
}