const SET_ADMIN ='SET_ADMIN'

let initsialState = {
    initialAdmin: false

};

const adminReducer = (state = initsialState, action) => {
    switch (action.type) {
        case SET_ADMIN:
            return {
                ...state,
                initialAdmin:true
            }
        default: return state;
    }
}

export const setAdmin = () => {return {type: SET_ADMIN}}

export default adminReducer;