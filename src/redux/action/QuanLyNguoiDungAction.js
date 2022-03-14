import axios from 'axios';
import { history } from '../../App';
import { KEY_TOKEN_CYBERSOFT, TOKEN_CYBERSOFT, http } from '../../util/setting';
import { dangNhap, getApiQuanLyNguoiDung, getApiQuanLyKhoaHoc } from './type/QuanLyNguoiDungType';


export const getApiQuanLyNguoiDungAction = (maNhom = "GP01") => {
    return (dispatch) => {
        let promise = axios({
            url: `https://elearningnew.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${maNhom}`,
            method: 'GET',
            headers: {
                [KEY_TOKEN_CYBERSOFT]: TOKEN_CYBERSOFT
            }
        })

        promise.then(result => {
            dispatch({
                type: getApiQuanLyNguoiDung,
                data: result.data
            })
        })
    }
}

export const postApiQuanLyNguoiDungAction = (values) => {
    return (dispatch) => {
        let promise = axios({
            url: 'https://elearningnew.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung',
            method: 'POST',
            headers: {
                [KEY_TOKEN_CYBERSOFT]: TOKEN_CYBERSOFT,
                'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
            },
            data: values
        })

        promise.then(result => {
            dispatch(getApiQuanLyNguoiDungAction());
        })

        promise.catch(errors => {
            console.log('that bai', errors);
        })
    }
}

export const deleteApiQuanLyNguoiDungAction = (taiKhoan) => {
    return (dispatch) => {
        let promise = axios({
            url: `https://elearningnew.cybersoft.edu.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`,
            method: 'DELETE',
            headers: {
                [KEY_TOKEN_CYBERSOFT]: TOKEN_CYBERSOFT,
                'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
            }
        })

        promise.then(result => {
            dispatch(getApiQuanLyNguoiDungAction())
        });

        promise.catch(errors => {
            console.log(errors);
        })
    }
}

export const putApiQuanLyNguoiDungAction = (values) => {
    return (dispatch) => {
        let promise = axios({
            url: 'https://elearningnew.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung',
            method: 'PUT',
            headers: {
                [KEY_TOKEN_CYBERSOFT]: TOKEN_CYBERSOFT,
                'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
            },
            data: values
        })

        promise.then(result => {
            promise.then(result => {
                dispatch(getApiQuanLyNguoiDungAction())
            });
        })

        promise.catch(errors => {
            console.log('that bai', errors);
        })
    }
}

export const getApiTimKiemQuanLyNguoiDung = (values = '') => {
    return (dispatch) => {
        if (values.trim() !== '') {
            let promise = axios({
                url: `https://elearningnew.cybersoft.edu.vn/api/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=GP01&tuKhoa=${values}`,
                method: 'GET',
                headers: {
                    [KEY_TOKEN_CYBERSOFT]: TOKEN_CYBERSOFT
                }
            })

            promise.then(result => {
                dispatch({
                    type: getApiQuanLyNguoiDung,
                    data: result.data
                })
            })
        }
    }

}

export const getApiQuanLyKhoaHocAction = (maNhom = "GP01") => {
    return (dispatch) => {
        let promise = axios({
            url: `https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=${maNhom}`,
            method: 'GET',
            headers: {
                [KEY_TOKEN_CYBERSOFT]: TOKEN_CYBERSOFT
            }
        })

        promise.then(result => {
            dispatch({
                type: getApiQuanLyKhoaHoc,
                data: result.data
            })
        })

        promise.catch(errors => {
            console.log('that bai', errors)
        })
    }
}

export const postApiQuanLyKhoaHocAction = (values) => {
    return (dispatch) => {
        let promise = axios({
            url: 'https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/ThemKhoaHoc',
            method: 'POST',
            headers: {
                [KEY_TOKEN_CYBERSOFT]: TOKEN_CYBERSOFT,
                'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
            },
            data: values
        })

        promise.then(result => {
            dispatch(getApiQuanLyKhoaHocAction())
        })

        promise.catch(errors => {
            console.log('that bai', errors);
        })
    }
}

export const deleteApiQuanLyKhoaHocAction = (maKhoaHoc) => {
    return (dispatch) => {
        let promise = axios({
            url: `https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/XoaKhoaHoc?MaKhoaHoc=${maKhoaHoc}`,
            method: 'DELETE',
            headers: {
                [KEY_TOKEN_CYBERSOFT]: TOKEN_CYBERSOFT,
                'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
            }
        })

        promise.then(result => {
            dispatch(getApiQuanLyKhoaHocAction())
        });

        promise.catch(errors => {
            console.log(errors);
        })
    }

}

export const loginAction = (userLogin) => {
    return async (dispatch) => {
        try {
            let result = await http.post('/api/QuanLyNguoiDung/DangNhap', userLogin)

            dispatch({
                type: dangNhap,
                data: result.data
            })

            localStorage.setItem('userLogin', JSON.stringify(userLogin));
            localStorage.setItem('accessToken', result.data.accessToken);

            history.push('/quanlynguoidung')
        }
        catch (err) {
            console.log('err', err);
        }
    }
}
