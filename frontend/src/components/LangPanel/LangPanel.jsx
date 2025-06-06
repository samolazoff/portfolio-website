import './LangPanel.scss';

const LangPanel = () => {
    return (
        <div className="lang-panel">
            <button type="submit" className='lang-panel__btn'>RU</button>
            <button type="submit" className='lang-panel__btn lang-panel__btn_active'>EN</button>
        </div>
    );
};

export default LangPanel;