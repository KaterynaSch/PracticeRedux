import { createSlice } from "@reduxjs/toolkit";

const localeSlice = createSlice({
    name: "locale",
    initialState: {
        lang: 'uk',   
    },
    reducers: {
        changeLang(state, action) {
            state.lang = action.payload;
        },
    },
});

export const localeReducer = localeSlice.reducer;
export const {changeLang} = localeSlice.actions;

// const inintialState = {
//     lang: 'uk',   
// };

// export const localeReducer =(state = inintialState, action)=>  {
//     switch (action.type){
//         case 'locale/changLang': 
//             return {
//                 ...state,
//                 lang: action.payload,
//             };
//         default: 
//             return state;
//     };
// };

// export const changLang = newLang => {
//     return {
//         type: 'locale/changLang',
//         payload: newLang,
//     };
// };

