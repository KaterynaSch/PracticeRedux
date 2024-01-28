import { createSlice } from "@reduxjs/toolkit";//createAction- повертає фабрику екшенів

//3)
const accountSlice = createSlice({//створює і actions і reducers
    name: "account",
    initialState: {    
        balance: 700,
        username: 'Katrin'    
    },
    reducers: {
        deposit(state, action){
            state.balance += action.payload;//state- не оригінал стану, а копія, яку можна змінювати за посиланням, а під капотом @reduxjs/toolkit має лібу immer, яка копію стану накладе на оригінальний стан імутабельно
        },
        withdraw(state, action){
            state.balance -= action.payload;
        },
    },
});

// якщо потрібно змінити значення payload , то використовують необов'язкову властивість prepare
// deposit: {
//     reducer(state, action){
//         state.balance += action.payload.value;//state- не оригінал стану, а копія, яку можна змінювати за посиланням, а під капотом @reduxjs/toolkit має лібу immer, яка копію стану накладе на оригінальний стан імутабельно
//     },
//     prepare(value) {//підготовка екшену
//         return {
//             payload :{
//                 value, 
//                 id: Date.now(),
//             },
//         };
//     },
// }


export const accountReducer = accountSlice.reducer;//кореневий редюсер
export const {deposit, withdraw} = accountSlice.actions;//фабрика екшенів

// const initialState = {    
//     balance: 700,
//     username: 'Katrin'    
// };

//2) import { createAction, createReducer } from "@reduxjs/toolkit";
// export const deposit = createAction('account/deposit');
// export const withdraw = createAction('account/withdraw');//при toString() повертає тип action

//БІЛЬШ СУЧАСНИЙ СИНТАКСИС З ВИКОРИСТАННЯМ ФУНКЦІЇ
// export const accountReducer = createReducer(initialState, builder =>
//     builder
//         .addCase(deposit, (state, action) => {//mini-reducer під кожен action
//             state.balance += action.payload;//state- не оригінал стану, а копія, яку можна змінювати за посиланням, а під капотом @reduxjs/toolkit має лібу immer, яка копію стану накладе на оригінальний стан імутабельно
//         })
//         .addCase(withdraw, (state, action) => {
//             state.balance -= action.payload;//
//         })
// );//default не потрібен ,він є за замовчуванням

//СТАРІШИЙ СИНТАКСИС З ОБ'ЄКТОМ
// export const accountReducer = createReducer(initialState, {
//     [deposit]:(state, action) => {//mini-reducer під кожен action
//         state.balance += action.payload;//state- не оригінал стану, а копія, яку можна змінювати за посиланням, а під капотом @reduxjs/toolkit має лібу immer, яка копію стану накладе на оригінальний стан імутабельно
//     },
//     [withdraw]: (state, action) => {
//         state.balance -= action.payload;
//     },
// }); 

// 1)
// export const accountReducer = (state = initialState, action) => {
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

// export const store = createStore(rootReducer, enhancer);

// console.log(deposit(5));// payload: 5

// export const deposit =(value)=> {
//     return { 
//         type: 'account/deposit',
//         payload: value,
//     };
// };

// console.log(withdraw.toString());//account/deposit
// export const withdraw =(value)=> {
//     return { 
//         type: 'account/withdraw',
//         payload: value,
//     };
// };