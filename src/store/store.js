import { createStore } from 'vuex';
import { messagesMock } from '../mocks/messages.mock';

export const messagesUrl = "https://io-labs.fr/messenger/messages.json";
export const contactsUrl = "https://io-labs.fr/messenger/contacts.json";

export default createStore({
    namespace: false,

    state(){
        return {
            messages: messagesMock
        }
    },

    mutations: {
        setMessages: ((state, payload) => {
            state.messages = payload.messages;
        })
    },

    getters: {
        numberOfUnreadMessages: state => {
            let i=0;
            state.messages.forEach(msg=>{if(!msg.read){i++}});
            return i;
        },
        sortMessagesByDate: state => {
            let clone = state.messages.slice();
            clone.sort((a,b)=>new Date(b.date) - new Date(a.date));
            return clone;
        }
    }
})
