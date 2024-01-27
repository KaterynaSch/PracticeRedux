
const inintialState = {
    lang: 'uk',   
};

export const localeReducer =(state = inintialState, action)=>  {
    switch (action.type){
        case 'locale/changLang': 
            return {
                ...state,
                lang: action.payload,
            };
        default: 
            return state;
    };
};

export const changLang = newLang => {
    return {
        type: 'locale/changLang',
        payload: newLang,
    };
};

