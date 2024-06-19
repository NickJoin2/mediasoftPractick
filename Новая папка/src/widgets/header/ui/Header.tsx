import React, {useEffect, useState} from 'react';
import '../style/styles.scss'
import logo from '@/shared/image/logo/logo.svg';
// import userNotAuth from '@/shared/image/user/user-notAuth.svg';
import {Link, Navigate, useLocation, useNavigate} from "react-router-dom";
// import {DropMenuUser} from "@/widgets/drop-user";
import {NavDrop} from "@/features/navDrop";
import {Modal} from "@/widgets/modalWindow";
// import {DropMenuUser} from "@/widgets/drop-user";
import {AuthButton} from "@/features/ButtonAuthorization";
// import {DropMenuUser} from "@/widgets/drop-user";


const Header = () => {
    const [open, setOpen] = useState(false);

    // правки --------------------------
    // const handleOpen = () => {
    //     if (setOpen) {
    //         setOpen(true);
    //     }
    // }
    // правки -------------------------

    useEffect(() => {
        console.log(open)
    }, [open]);

    const navigate = useNavigate();
    const clear = () => {
        localStorage.removeItem('token')
        navigate('/')
    }

    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="header__row">

                        <Link to={'/'} className="header__logo">
                            <img src={logo} alt="logo"/>
                        </Link>

                        <button onClick={clear}>Logout</button>


                        <div className="nav-block">
                            <NavDrop/>


                            {/*<div className="header__entry">*/}
                            {/*    <p className='header__text-user'>Войти</p>*/}

                                {/*/!*<button className='header__user' onClick={handleOpen}>*!/*/}
                                {/*    /!*<img src={userNotAuth} alt="user"/>*!/*/}
                                {/*    <div className='header__text-user'>Войти</div>*/}
                                {/*    /!*Войти*!/*/}
                                {/*/!*</button>*!/*/}

                                {/*кнопка надо reducer*/}
                                <AuthButton setOpen={setOpen}/>
                            </div>

                            {/*<DropMenuUser/>*/}
                        </div>

                    </div>

                {/*</div>*/}
            </header>

            <Modal open={open} setOpen={setOpen}/>
        </>
    );
};

export default Header;