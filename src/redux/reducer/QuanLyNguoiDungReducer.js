import { dangNhap, getApiQuanLyNguoiDung, getApiQuanLyKhoaHoc } from '../action/type/QuanLyNguoiDungType'


let usLogin = null;

if(localStorage.getItem('userLogin')) {
    usLogin = JSON.parse(localStorage.getItem('userLogin'))
}


const stateDefault = {
    arrQuanLyNguoiDung: [],

    userLogin: usLogin,

    arrQuanLyKhoaHoc: [],
}

export const QuanLyNguoiDungReducer = (state=stateDefault, action ) => {
    
    switch(action.type) {
        case getApiQuanLyNguoiDung : {
            state.arrQuanLyNguoiDung = action.data;
            return {...state};
        }

        case getApiQuanLyKhoaHoc : {
            state.arrQuanLyKhoaHoc = action.data;
            return {...state}
        }

        case dangNhap: {
            state.userLogin = action.data;
            return {...state}
        }

        default: return {...state}
    }
}