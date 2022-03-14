import React from 'react';
import { useDispatch } from 'react-redux';
import { postApiQuanLyNguoiDungAction } from '../../../../../redux/action/QuanLyNguoiDungAction';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function ThemNguoiDung(props) {

    const formik = useFormik({
        initialValues: {
            taiKhoan: '',
            matKhau: '',
            hoTen: '',
            soDT: '',
            maLoaiNguoiDung: 'GV',
            maNhom: 'GP01',
            email: ''
        },

        validationSchema: Yup.object().shape({
            taiKhoan: Yup.string().required('Tai khoan khong duoc bo trong'),
            matKhau: Yup.string().required('Mat khau khong duoc bo trong'),
            hoTen: Yup.string().required('Ho ten khong duoc bo trong'),
            soDT: Yup.string().required('So dien thoai khong duoc bo trong'),
            maLoaiNguoiDung: Yup.string().required('Ma loai nguoi dung khong duoc bo trong'),
            maNhom: Yup.string().required('Ma nhom khong duoc bo trong'),
            email: Yup.string().required('email khong duoc bo trong'),
        }),

        onSubmit: (initialValues) => {

            const action = postApiQuanLyNguoiDungAction(initialValues);
            dispatch(action);
        }
    
    })

    const dispatch = useDispatch();

    return (
        <div className="container-fluid">
            <div className='row border'>
                <div className="col-0 col-lg-2"></div>
                <div className="col-12 col-lg-10 border-left">

                    {/* form dang ky */}
                    <form onSubmit={formik.handleSubmit} className="card border-0">
                        {/* card header */}
                        <div className="card-header bg-white border-0">
                            <h4>Thêm người dùng</h4>
                        </div>

                        {/* card body */}
                        <div className="card-body">
                            <div className="row">
                                {/* left */}
                                <div className="col-12 col-lg-6">
                                    <div className="form-group">
                                        <p className="mb-1">Tài khoản</p>
                                        <input style={{ outline: 'none' }} type="text" className="form-control border-top-0 border-right-0 border-left-0 w-75 mb-1" id="taiKhoan" name="taiKhoan" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                        {formik.errors.taiKhoan && formik.touched.taiKhoan ? (<div className='text-danger'>{formik.errors.taiKhoan}</div>) : null}
                                    </div>
                                    <div className="form-group">
                                        <p className="mb-1">Mật khẩu</p>
                                        <input style={{ outline: 'none' }} type="password" className="form-control border-top-0 border-right-0 border-left-0 w-75 mb-1" id="matKhau" name="matKhau" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                        {formik.errors.matKhau && formik.touched.matKhau ? (<div className='text-danger'>{formik.errors.matKhau}</div>) : null}
                                    </div>
                                    <div className="form-group">
                                        <p className="mb-1">Họ tên</p>
                                        <input style={{ outline: 'none' }} type="text" className="form-control border-top-0 border-right-0 border-left-0 w-75 mb-1" id="hoTen" name="hoTen" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                        {formik.errors.hoTen && formik.touched.hoTen ? (<div className='text-danger'>{formik.errors.hoTen}</div>) : null}
                                    </div>
                                </div>

                                {/* right */}
                                <div className="col-12 col-lg-6">
                                    <div className="form-group">
                                        <p className="mb-1">Email</p>
                                        <input style={{ outline: 'none' }} type="email" className="form-control border-top-0 border-right-0 border-left-0 w-75 mb-1" id="email" name="email" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                        {formik.errors.email && formik.touched.email ? (<div className='text-danger'>{formik.errors.email}</div>) : null}
                                    </div>
                                    <div className="form-group">
                                        <p className="mb-1">Số điện thoại</p>
                                        <input style={{ outline: 'none' }} type="text" className="form-control border-top-0 border-right-0 border-left-0 w-75 mb-1" id="soDT" name="soDT" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                        {formik.errors.soDT && formik.touched.soDT ? (<div className='text-danger'>{formik.errors.soDT}</div>) : null}
                                    </div>
                                    <div className="form-group">
                                        <p className="mb-1">Loại người dùng</p>
                                        <select className="w-50" id="maLoaiNguoiDung" name="maLoaiNguoiDung" onChange={formik.handleChange} onBlur={formik.handleBlur} >
                                            <option value="GV">Giáo vụ</option>
                                            <option value="HV">Học viên</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* card footer */}
                        <div className="card-footer bg-white border-0">
                            <div className="form-group row">
                                <div className="col-12" style={{ paddingLeft: '62%' }}>
                                    <button type="submit" className="btn btn-success" style={{marginLeft: '55%'}} disabled={!formik.isValid}>Thêm</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}
