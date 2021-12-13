import React from 'react';
import {Link} from 'react-router-dom'

const Nav = () => {
    return (
    <nav>
        <Link to="/posts" className='nav-link'>Посты</Link>
        <Link to="/postform" className='nav-link'>Создать пост</Link>
        <Link to="/login" className='nav-link'>Войти</Link>
        <Link to="/registration" className='nav-link'>Регистрация</Link>
    </nav>
    );
};

export default Nav;