const comments = (state = [], action) => {
    switch (action.type) {
        case 'STORE_COMMENTS':
            return action.comments;
        default:
            return state;
    }
}
export default comments;