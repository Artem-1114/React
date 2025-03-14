import { useState } from "react";
import './buttinShow.css';

const ButtonShow = () => {
    const [isShow, setIsShow] = useState(false);

    return (
        <div className='container'>
            <button type='button' onClick={() => setIsShow(true)} className="btn-show"> Показати</button>
            {isShow && (
                <div className="show"><p>Привіт</p>
                    <button type='button' onClick={() => setIsShow(false)} className="btn-show btn-hide"> Приховати</button>
                </div>
            )}
        </div>
    );
}

export default ButtonShow;