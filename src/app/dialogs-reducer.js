const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Jan'},
        {id: 2, name: 'Andrzul'},
        {id: 3, name: 'Max'},
        {id: 4, name: 'Ola'},
        {id: 5, name: 'Adam'},
        {id: 6, name: 'Wiktoria'}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hello'},
        {id: 3, message: 'How are you?'},
        {id: 4, message: 'LEts go'},
        {id: 5, message: 'its me'}
    ],
    id: 6
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: state.id + 1, message: body}],
                id: state.id + 1
            };
        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})


export default dialogsReducer;