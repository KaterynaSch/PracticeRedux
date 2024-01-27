

const initialState = {    
    balance: 700,
    username: 'Katrin'    
};

export const accountReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'account/deposit':
            return {
                ...state,
                balance: state.balance + action.payload,
            };
        case 'account/withdraw':
            return {
                ...state,
                balance: state.balance - action.payload,
            };
        default: 
            return state;//поверне initialState        
    };
};

// export const store = createStore(rootReducer, enhancer);
export const deposit =(value)=> {
    return { 
        type: 'account/deposit',
        payload: value,
    };
};

export const withdraw =(value)=> {
    return { 
        type: 'account/withdraw',
        payload: value,
    };
};