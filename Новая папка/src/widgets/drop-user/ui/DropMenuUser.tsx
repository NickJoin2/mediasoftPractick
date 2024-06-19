import React, {useEffect, useRef, useState} from 'react';
import {Link} from "react-router-dom";
import userIcon from "@/shared/image/user/user-icon.svg";
import '../styles/styles.scss'
import {useClickOutside} from "@/app/hooks/useClickOutside";

const DropMenuUser = () => {

    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);
    useClickOutside(menuRef, () => {
        if (isOpen) setIsOpen(false)
    });

    useEffect(() => {
        console.log(isOpen)
    }, [isOpen]);


    return (
        <div className="user">
            <button onClick={() => setIsOpen(!isOpen)}>
                <p>Оксана Черниюк</p>
                <img className="user__image" src={userIcon} alt="user"/>
                <div className='user__online'></div>
            </button>


            <div className={`user__content ${isOpen ? 'active' : ''}`}>
                <ul className="user__list" ref={menuRef}>
                    <li className="user__item">
                        <Link to={'/wholesale'} >Личные кабинет</Link>
                    </li>
                    <li className="user__item user-menu">
                        <Link to={'/wholesale'} style={{fontSize: '20px'}}>Курсовые работы</Link>
                    </li>
                    <li className="user__item user-menu">
                        <Link to={'/wholesale'}>Дипломные работы</Link>
                    </li>
                    <li className="user__item">
                        <Link to={''} style={{fontSize: '10px'}}>Сменить пароль</Link>
                    </li>
                    <li className="user__item">
                        <Link to={''}>Выйти</Link>
                    </li>
                </ul>
            </div>

        </div>
    );
};

export default DropMenuUser;