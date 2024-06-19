import React, {useEffect, useRef, useState} from 'react';
import userIcon from "@/shared/image/user/user-icon.svg";
import '../styles/styles.scss'
import {useClickOutside} from "@/app/hooks/useClickOutside";
import {useDispatch} from "react-redux";
import {logout} from "@/features/userAuthorization/slice/registerSlice";
import {Link} from "react-router-dom";
// import {RootState, useAppSelector} from "@/app/appStore";


const DropMenuUser = () => {

    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);
    useClickOutside(menuRef, () => {
        if (isOpen) setIsOpen(false)
    });

    useEffect(() => {
        // console.log(isOpen)
    }, [isOpen]);

    const dispatch = useDispatch();
    // const router = useRouter()

    // const redirect = useAppSelector((state:RootState) => state.register.redirect)

    const handleLogout = async() => {
       dispatch(logout())
    }

    // if(redirect) {
    //     const redirectUrl = () => {
    //         router.push('/')
    //     }
    //   redirectUrl()
    // }

    return (
        <div className="user">
            <button onClick={() => setIsOpen(!isOpen)}>
                <p>Иван Иванов</p>
                <img className="user__image" src={userIcon} alt="user"/>
                {/*<div className='user__online'></div>*/}
            </button>


            <div className={`user__content ${isOpen ? 'active' : ''}`}>
                <ul className="user__list" ref={menuRef}>
                    <li className="user__item">
                        <Link to={'/office'} >Личные кабинет</Link>
                    </li>
                    {/*<li className="user__item user-menu">*/}
                    {/*    <Link to={'/wholesale'} style={{fontSize: '20px'}}>Курсовые работы</Link>*/}
                    {/*</li>*/}
                    {/*<li className="user__item user-menu">*/}
                    {/*    <Link to={'/wholesale'}>Дипломные работы</Link>*/}
                    {/*</li>*/}
                    <li className="user__item">
                        <Link to={''} style={{fontSize: '15px'}}>Сменить пароль</Link>
                    </li>
                    <li className="user__item">
                        <Link to={''} onClick={handleLogout}>Выйти</Link>
                    </li>
                </ul>
            </div>

        </div>
    );
};

export default DropMenuUser;