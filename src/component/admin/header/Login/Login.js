import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import { useDispatch } from 'react-redux';
import { loginAction } from '../../../../redux/action/QuanLyNguoiDungAction';



export default function Login(props) {

    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            taiKhoan: '',
            matKhau: '',
        },

        validationSchema: Yup.object().shape({
            taiKhoan: Yup.string().required('Tai khoan khong duoc bo trong'),
            matKhau: Yup.string().required('Mat khau khong duoc bo trong'),
        }),

        onSubmit: (values) => {
            const action = loginAction(values)

            dispatch(action);
        }
    })


    return (
        <form className='container' onSubmit={formik.handleSubmit}>
            <h3>dang nhap</h3>
            <div className='form-group'>
                <p>tai khoan</p>
                <input style={{ outline: 'none' }} type="text" className="from-control border-top-0 border-right-0 border-left-0 w-75 mb-1"  name='taiKhoan' onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.errors.taiKhoan && formik.touched.taiKhoan ? (<div className='text-danger'>{formik.errors.taiKhoan}</div>) : null}
            </div>
            <div className='form-group'>
                <p>mat khau</p>
                <input style={{ outline: 'none' }} type="password" className="from-control border-top-0 border-right-0 border-left-0 w-75 mb-1"  name='matKhau' onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.errors.matKhau && formik.touched.matKhau ? (<div className='text-danger'>{formik.errors.matKhau}</div>) : null}
            </div>
            <div className='form-group'>
                <button className='btn btn-success' type='submit' disabled={!formik.isValid}>dang nhap</button>
            </div>
        </form>
    )
}
