export default function user(state={}, action={}){
    switch(action.type){
        case 'USER_LOGGED_IN':
            return action.payload;
        case 'USER_LOGGED_OUT':
            return {};
        default:
            return state;
    }
}