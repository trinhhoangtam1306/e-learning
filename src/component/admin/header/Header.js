import React from 'react';
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux';

export default function Header(props) {

    const { userLogin } = useSelector(rootReducer => rootReducer.QuanLyNguoiDungReducer);

    const logout = () => {
        localStorage.clear();
    }

    const renderButtonLogin = () => {
        if (userLogin) {
            return <NavLink className="dropdown-item" to="/login" onClick={logout}>Đăng xuất</NavLink>
        }

        return <NavLink className="dropdown-item pl-3 pr-3" to="/login">Login</NavLink>
    }

    return (
        <div>
            {/* Nav tabs */}
            <ul className="nav nav-tabs" id="navId">
                <li className="nav-item dropdown">
                    <NavLink className="nav-link dropdown-toggle" data-toggle="dropdown" to="#" role="button" aria-haspopup="true" aria-expanded="false">{userLogin.taiKhoan}</NavLink>
                    <div className="dropdown-menu" style={{left:'-140%'}}>
                        <NavLink className="dropdown-item" to="/quanlynguoidung">Quản lý người dùng</NavLink>
                        <NavLink className="dropdown-item" to="/themnguoidung">Thêm người dùng</NavLink>
                        <NavLink className="dropdown-item" to="/quanlykhoahoc">Quản lý khóa học</NavLink>
                        <NavLink className="dropdown-item" to="/themkhoahoc">Thêm khóa học</NavLink>
                        <div className="dropdown-divider" />
                        {renderButtonLogin()}
                    </div>
                </li>
            </ul>
        </div>



    )
}
