import React from 'react';
import s from './Profileinfo.module.css';


const Profileinfo = () => {
    return (
        <div>
            <div>
                <img src='https://www.freelogodesign.org/Content/img/logo-ex-7.png'/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    );
}

export default Profileinfo;