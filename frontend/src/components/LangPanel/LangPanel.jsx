import {useDispatch, useSelector} from 'react-redux';
import {languageEN, languageRU} from '../../features/language/languageSlice';

import './LangPanel.scss';

const LangPanel = () => {

    const lang = useSelector((state) => state.language.language);
    const dispatch = useDispatch();

    if(lang==='EN'){
        return (
            <div className="lang-panel">
                <button type="submit" className='lang-panel__btn' onClick={() => dispatch(languageRU())}>RU</button>
                <button type="submit" className='lang-panel__btn lang-panel__btn_active'  onClick={() => dispatch(languageEN())}>EN</button>
            </div>
        )
    }else{
            return (
                <div className="lang-panel">
                    <button type="submit" className='lang-panel__btn lang-panel__btn_active' onClick={() => dispatch(languageRU())}>RU</button>
                    <button type="submit" className='lang-panel__btn'  onClick={() => dispatch(languageEN())}>EN</button>
                </div>
            )
        }
};

export default LangPanel;