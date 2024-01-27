import { useDispatch, useSelector } from "react-redux";
import { deposit, withdraw } from "../redux/accountSlice";
import { useState } from "react";

export const Account = () => {
    const [value, setValue] = useState(0);//локальний state, не потрібен глобальному
    const balance = useSelector(state => state.account.balance);
    const dispatch = useDispatch(); 
    

    return (
    <div>
        <p>
            {balance}$
        </p>
        <input type="number" 
        onChange={(evt)=> setValue(Number(evt.target.value))}
        />
        <button onClick={() => dispatch(deposit(value)) }>Deposit</button>
        <button onClick={() => dispatch(withdraw(value)) }>Withdraw</button>
    </div>)
};
