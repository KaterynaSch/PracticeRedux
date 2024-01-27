import { useDispatch, useSelector } from "react-redux";
import { changLang } from "../redux/localeSlice";

export const LangSwitcher = () => {
    const lang = useSelector(state => state.locale.lang);
    const dispatch = useDispatch();

    const handleChange = evt => dispatch(changLang(evt.target.value));    
    
    return (
        <div>
            <p>Select leng:</p>
            <select value={lang} onChange = {handleChange}>
                <option value="en">EN</option>
                <option value="uk">UK</option>
                <option value="pl">PL</option>
                <option value="fr">FR</option>
            </select>
        </div>
    );
};
