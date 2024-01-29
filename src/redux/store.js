import { configureStore } from "@reduxjs/toolkit";
// import { createStore, combineReducers } from "redux";
// import { devToolsEnhancer } from "@redux-devtools/extension";
import { accountReducer } from "./accountSlice";
import { localeReducer } from "./localeSlice";

//оолошення middleware - це функція яка повертає функцію, яка повертає ф-цію роботи з action
// const myMiddleware1 =store => next => action => {console.log("myMiddleware1: ", action); next(action)};        

// const myMiddleware1 = store => {//коли екшен потр. в редюсер, то відловлюється цим мідлваром
//     return next => {// next- ф-ція для відправки екшна далі по ланцюжку
//         return action => {
//             console.log("myMiddleware1: ", action);
//             //myMiddleware1:  {type: 'locale/changeLang', payload: 'pl'}payload: "pl"type: "locale/changeLang"[[Prototype]]: Object
//             // myMiddleware1:  {type: 'account/deposit', payload: 1}
//             // myMiddleware1:  {type: 'account/withdraw', payload: 1}
//             next(action);//посилання на наступний middleware, якшо немає наст мідлвари ,то виклик редюсери
//         };
//     };
// };

// const myMiddleware2 =store => next => action => {console.log("myMiddleware2: ", action); next(action);//якшо немає наст. мідлвари ,то виклик редюсери           
// };


export const store = configureStore({//сам створює кореневий редюсер
    reducer: {
        account: accountReducer,
        locale: localeReducer,
    },
    // middleware(getDefaultMiddleware){
    //     const defaultMiddleware = getDefaultMiddleware();
    //     return [...defaultMiddleware, myMiddleware1, myMiddleware2];

    // }
});

// // ця middleware реагує на тип екшена
// //  первіряє якщо action не об'єкт, а ф-ція ,то він її викликає і передає в dispatch і не пропускає далі
// const reduxThunkMd = store => next => action => {// робота з асинхроном,виконання HTTP- запитів
//     if (typeof action !== 'function') {
//         next(action);
//         return;
//     }
//     action(store.dispatch);
// };

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

