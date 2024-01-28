import { configureStore } from "@reduxjs/toolkit";
// import { createStore, combineReducers } from "redux";
// import { devToolsEnhancer } from "@redux-devtools/extension";
import { accountReducer } from "./accountSlice";
import { localeReducer } from "./localeSlice";

export const store = configureStore({//сам створює кореневий редюсер
    reducer: {
        account: accountReducer,
        locale: localeReducer,
    },
});

// const rootReducer = combineReducers({
//     account: accountReducer,
//     locale: localeReducer,
// });

// const enhancer = devToolsEnhancer();//ініціалізація redux-devtools в ваніл. redux

// export const store = createStore(rootReducer, enhancer);
// const accountInitialState = {    
//     balance: 700,
//     username: 'Katrin'    
// };
// const accountReducer = (state = accountInitialState, action) => {
//     switch (action.type) {
//         case 'account/deposit':
//             return {
//                 ...state,
//                 balance: state.balance + action.payload,
//             };
//         case 'account/withdraw':
//             return {
//                 ...state,
//                 balance: state.balance - action.payload,
//             };
//         default: 
//             return state;//поверне initialState        
//     };
// };

// const localeInintialState = {
//     lang: 'uk',   
// };
// const localeReducer =(state = localeInintialState, action)=>  {
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


//root reducer
//action - об'єкт з оновленням для state
// type: '@@INIT'  - action ініціалізації state
//якщо не вказати initialstate , то буде undefind в state
// const initialState = {
//     account: {
//         balance: 700,
//         username: 'Katrin'
//     },
//     locale: {
//         lang: 'uk',
//     },
// };

// const rootReducer = (state = initialState, action) => {
//     switch (action.type){
//         case 'account/deposit':
//             return {//не зберігається state
//                 ...state,
//                 account: {
//                     ...state.account,
//                     balance: state.account.balance + action.payload
//                 }
//             };
//         case 'account/withdraw':
//             return {
//                 ...state,                    
//                 account: {
//                     ...state.account,
//                     balance :state.account.balance - action.payload
//                 }
//             };
//         case 'locale/changLang': 
//             return {
//                 ...state,//збереження state.account
//                 locale:{
//                     ...state.locale,//збереж. інших можливих власт. locale
//                     lang: action.payload,
//                 },
//             };
//         default: 
//         return state//поверне initialState
//     };    
// };


// export const deposit =(value)=> {
//     return { 
//         type: 'account/deposit',
//         payload: value,
//     };
// };

// export const withdraw =(value)=> {
//     return { 
//         type: 'account/withdraw',
//         payload: value,
//     };
// };

// export const changLang = newLang => {
//     return {
//         type: 'locale/changLang',
//         payload: newLang,
//     };
// };

