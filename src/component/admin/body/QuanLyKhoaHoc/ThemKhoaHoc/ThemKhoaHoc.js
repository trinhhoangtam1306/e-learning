import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getApiQuanLyKhoaHocAction, postApiQuanLyKhoaHocAction } from '../../../../../redux/action/QuanLyNguoiDungAction';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function ThemKhoaHoc(props) {

  useEffect(() => {
    const action = getApiQuanLyKhoaHocAction();
    dispatch(action)
}, [])

  const formik = useFormik({
    initialValues: {
      maKhoaHoc: '',
      biDanh: '',
      tenKhoaHoc: '',
      moTa: '',
      luotXem: 0,
      danhGia: 0,
      hinhAnh: 'https://elearning0706.cybersoft.edu.vn/hinhanh/tu-duy-lap-trinh.png',
      maNhom: 'GP01',
      ngayTao: '',
      maDanhMucKhoaHoc: 'BackEnd',
      taiKhoanNguoiTao: '1234',
    },

    validationSchema: Yup.object().shape({
      maKhoaHoc: Yup.string().required('Mã khóa học không được bỏ trống'),
      biDanh: Yup.string().required('Bí danh không được bỏ trống'),
      tenKhoaHoc: Yup.string().required('Tên khóa học không được bỏ trống'),
      moTa: Yup.string().required('Mô tả không được bỏ trống'),
      luotXem: Yup.string().required('Lượt xem không được bỏ trống'),
      danhGia: Yup.string().required('Đánh giá không được bỏ trống'),
      maNhom: Yup.string().required('Mã nhóm không được bỏ trống'),
      ngayTao: Yup.string().required('Ngày tạo không được bỏ trống'),
      maDanhMucKhoaHoc: Yup.string().required('Mã danh mục khóa học không được bỏ trống'),
      taiKhoanNguoiTao: Yup.string().required('Tài khoản người tạo không được bỏ trống'),
    }),

    onSubmit: (initialValues) => {

      const action = postApiQuanLyKhoaHocAction(initialValues);
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
              <h4>Thêm khóa học</h4>
            </div>

            {/* card body */}
            <div className="card-body">
              <div className="row">
                {/* left */}
                <div className="col-12 col-lg-6">
                  <div className="form-group">
                    <p className="mb-1">Mã khóa học</p>
                    <input style={{ outline: 'none' }} type="text" className="form-control border-top-0 border-right-0 border-left-0 w-75 mb-1" id="maKhoaHoc" name="maKhoaHoc" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    {formik.errors.maKhoaHoc && formik.touched.maKhoaHoc ? (<div className='text-danger'>{formik.errors.maKhoaHoc}</div>) : null}
                  </div>
                  <div className="form-group">
                    <p className="mb-1">Bí danh</p>
                    <input style={{ outline: 'none' }} type="text" className="form-control border-top-0 border-right-0 border-left-0 w-75 mb-1" id="biDanh" name="biDanh" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    {formik.errors.biDanh && formik.touched.biDanh ? (<div className='text-danger'>{formik.errors.biDanh}</div>) : null}
                  </div>
                  <div className="form-group">
                    <p className="mb-1">Tên khóa học</p>
                    <input style={{ outline: 'none' }} type="text" className="form-control border-top-0 border-right-0 border-left-0 w-75 mb-1" id="tenKhoaHoc" name="tenKhoaHoc" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    {formik.errors.tenKhoaHoc && formik.touched.tenKhoaHoc ? (<div className='text-danger'>{formik.errors.tenKhoaHoc}</div>) : null}
                  </div>
                  <div className="form-group">
                    <p className="mb-1">Mã danh mục khóa học</p>
                    <select className="w-50" id="maDanhMucKhoaHoc" name="maDanhMucKhoaHoc" onChange={formik.handleChange} onBlur={formik.handleBlur} >
                      <option value="BackEnd">Lập trình Backend</option>
                      <option value="Design">Thiết kế Web</option>
                      <option value="DiDong">Lập trình di động</option>
                      <option value="FrontEnd">Lập trình Front end</option>
                      <option value="FullStack">Lập trình Full Stack</option>
                      <option value="TuDuy">Tư duy lập trình</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <p className="mb-1">Ngày tạo</p>
                    <input style={{ outline: 'none' }} type="date" className="form-control border-top-0 border-right-0 border-left-0 w-75 mb-1" id="ngayTao" name="ngayTao" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    {formik.errors.ngayTao && formik.touched.ngayTao ? (<div className='text-danger'>{formik.errors.ngayTao}</div>) : null}
                  </div>
                </div>

                {/* right */}
                <div className="col-12 col-lg-6">
                  <div className="form-group">
                    <p className="mb-1">Đánh giá</p>
                    <input style={{ outline: 'none' }} type="number" className="form-control border-top-0 border-right-0 border-left-0 w-75 mb-1" id="danhGia" name="danhGia" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    {formik.errors.danhGia && formik.touched.danhGia ? (<div className='text-danger'>{formik.errors.danhGia}</div>) : null}
                  </div>
                  <div className="form-group">
                    <p className="mb-1">Lượt xem</p>
                    <input style={{ outline: 'none' }} type="number" className="form-control border-top-0 border-right-0 border-left-0 w-75 mb-1" id="luotXem" name="luotXem" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    {formik.errors.luotXem && formik.touched.luotXem ? (<div className='text-danger'>{formik.errors.luotXem}</div>) : null}
                  </div>
                  <div className="form-group">
                    <p className="mb-1">Người tạo</p>
                    <select className="w-50" id="taiKhoanNguoiTao" name="taiKhoanNguoiTao" onChange={formik.handleChange} onBlur={formik.handleBlur} >
                      <option value="1234">Giáo vụ 1</option>
                      <option value="aaa1">Giáo vụ 2</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* card footer */}
            <div className="card-footer bg-white border-0">
              <div className="form-group row">
                <div className="col-12">
                  <div className="form-group">
                    <p className="mb-1">Mô tả</p>
                    <input style={{ outline: 'none', width: '88%' }} type="text" className="form-control border-top-0 border-right-0 border-left-0 mb-1" id="moTa" name="moTa" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    {formik.errors.moTa && formik.touched.moTa ? (<div className='text-danger'>{formik.errors.moTa}</div>) : null}
                  </div>
                </div>
                <div className="col-12" style={{ paddingLeft: '62%' }}>
                  <button type="submit" className="btn btn-success" style={{ marginLeft: '55%' }} disabled={!formik.isValid} >Thêm</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

    </div>
  )
}
