import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getApiQuanLyNguoiDungAction, deleteApiQuanLyNguoiDungAction, putApiQuanLyNguoiDungAction } from '../../../../../redux/action/QuanLyNguoiDungAction';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import TimKiemNguoiDung from '../TimKiemNguoiDung/TimKiemNguoiDung';


export default function TableDanhSachNguoiDung() {

    let { arrQuanLyNguoiDung } = useSelector(rootReducer => rootReducer.QuanLyNguoiDungReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        const action = getApiQuanLyNguoiDungAction();
        dispatch(action)
    }, [])

    // xu li xoa nguoi dung
    const xoaNguoiDung = (taiKhoan) => {
        const action = deleteApiQuanLyNguoiDungAction(taiKhoan);
        dispatch(action);
    }

    // chinh sua
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

            const action = putApiQuanLyNguoiDungAction(initialValues);
            dispatch(action);
        }

    })

    const renderQuanLyNguoiDung = () => {
        return arrQuanLyNguoiDung.map((nguoiDung, index) => {

            return <tr  key={index}>
                <td>{index + 1}</td>
                <td>{nguoiDung.taiKhoan}</td>
                <td>{nguoiDung.hoTen}</td>
                <td>{nguoiDung.email}</td>
                <td>{nguoiDung.soDt}</td>
                <td>{nguoiDung.maLoaiNguoiDung}</td>

                <td>
                    <button className="btn btn-success mr-3" type="button" data-toggle="modal" data-target="#modelId" >chinh sua</button>

                    <button className="btn btn-danger" type="button" onClick={() => {
                        xoaNguoiDung(nguoiDung.taiKhoan)
                    }}>Xóa</button>
                </td>
            </tr>
        })
    }

    return (
        <div>
            <div className="container-fluid">
                <div className="row border">
                    <div className="col-0 col-lg-2"></div>
                    <div className="col-12 col-lg-10 border-left">
                        {/* search */}
                        <TimKiemNguoiDung />

                        {/* table danh sach nguoi dung */}
                        <div className="card" style={{ width: "97%" }}>
                            <div className="card-header bg-dark text-white col-12">
                                <h6>Danh sách người dùng</h6>
                            </div>
                            <div className="card-body table-responsive-sm table-responsive-md table-responsive-lg col-12">
                                <table className="table  w-100 col-12">
                                    <thead>
                                        <tr>
                                            <th>STT</th>
                                            <th>Tài khoản</th>
                                            <th>Họ Tên</th>
                                            <th>Email</th>
                                            <th>Số điện thoại</th>
                                            <th>Mã loại người dùng</th>
                                            <th>Thao tác</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {renderQuanLyNguoiDung()}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                {/* modal */}
                <div>
                    <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                        <div className="modal-dialog modal-xl" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Chỉnh sửa người dùng</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <div className="modal-body">

                                    <form onSubmit={formik.handleSubmit} className="card border-0">
                                        {/* card header */}
                                        <div className="card-header bg-white border-0">
                                            <h4>Thêm người dùng</h4>
                                        </div>

                                        {/* card body */}
                                        <div className="card-body">
                                            <div className="row">
                                                {/* left */}
                                                <div className="col-6">
                                                    <div className="from-group">
                                                        <p className="mb-1">Tài khoản</p>
                                                        <input style={{ outline: 'none' }} type="text" className="from-control border-top-0 border-right-0 border-left-0 w-75 mb-3" id="taiKhoan" name="taiKhoan" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                                        {formik.errors.taiKhoan && formik.touched.taiKhoan ? (<div className='text-danger'>{formik.errors.taiKhoan}</div>) : null}
                                                    </div>
                                                    <div className="from-group">
                                                        <p className="mb-1">Mật khẩu</p>
                                                        <input style={{ outline: 'none' }} type="password" className="from-control border-top-0 border-right-0 border-left-0 w-75 mb-3" id="matKhau" name="matKhau" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                                        {formik.errors.matKhau && formik.touched.matKhau ? (<div className='text-danger'>{formik.errors.matKhau}</div>) : null}
                                                    </div>
                                                    <div className="from-group">
                                                        <p className="mb-1">Họ tên</p>
                                                        <input style={{ outline: 'none' }} type="text" className="from-control border-top-0 border-right-0 border-left-0 w-75 mb-3" id="hoTen" name="hoTen" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                                        {formik.errors.hoTen && formik.touched.hoTen ? (<div className='text-danger'>{formik.errors.hoTen}</div>) : null}
                                                    </div>
                                                </div>

                                                {/* right */}
                                                <div className="col-6">
                                                    <div className="from-group">
                                                        <p className="mb-1">Email</p>
                                                        <input style={{ outline: 'none' }} type="email" className="from-control border-top-0 border-right-0 border-left-0 w-75 mb-3" id="email" name="email" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                                        {formik.errors.email && formik.touched.email ? (<div className='text-danger'>{formik.errors.email}</div>) : null}
                                                    </div>
                                                    <div className="from-group">
                                                        <p className="mb-1">Số điện thoại</p>
                                                        <input style={{ outline: 'none' }} type="text" className="from-control border-top-0 border-right-0 border-left-0 w-75 mb-3" id="soDT" name="soDT" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                                        {formik.errors.soDT && formik.touched.soDT ? (<div className='text-danger'>{formik.errors.soDT}</div>) : null}
                                                    </div>
                                                    <div className="from-group">
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
                                                <div className="col-2">
                                                    <button type="button" style={{ border: 'none', backgroundColor: '#fff', outline: 'none', color: 'blue', textDecoration: 'underline' }}>Trở lại</button>
                                                </div>
                                                <div className="col-10" style={{ paddingLeft: '62%' }}>
                                                    <button type="submit" className="btn btn-success mr-3" disabled={!formik.isValid}>Thêm</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
