import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteApiQuanLyKhoaHocAction, getApiQuanLyKhoaHocAction } from '../../../../../redux/action/QuanLyNguoiDungAction';

export default function TableQuanLyKhoaHoc() {

    let { arrQuanLyKhoaHoc } = useSelector(rootReducer => rootReducer.QuanLyNguoiDungReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        const action = getApiQuanLyKhoaHocAction();
        dispatch(action)
    }, [])

    const xoaKhoaHoc = (maKhoaHoc) => {
        const action = deleteApiQuanLyKhoaHocAction(maKhoaHoc);
        dispatch(action)
    }

    const renderQuanLyKhoaHoc = () => {
        return arrQuanLyKhoaHoc.map((khoaHoc, index) => {
            return <tr key={index}>
                <td>{index + 1}</td>
                <td>{khoaHoc.maKhoaHoc}</td>
                <td>{khoaHoc.tenKhoaHoc}</td>
                <td>{khoaHoc.hinhAnh}</td>
                <td>{khoaHoc.luotXem}</td>
                <td>{khoaHoc.nguoiTao.hoTen}</td>
                <td>
                    <button className="btn btn-danger" type="button" onClick={() => {
                        xoaKhoaHoc(khoaHoc.maKhoaHoc)
                    }} >Xóa</button>
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


                        {/* table danh sach nguoi dung */}
                        <div className="card" style={{ width: "97%" }}>
                            <div className="card-header bg-dark text-white col-12">
                                <h6>Danh sách khóa học</h6>
                            </div>
                            <div className="card-body table-responsive-sm table-responsive-md table-responsive-lg col-12">
                                <table className="table  w-100 col-12">
                                    <thead>
                                        <tr>
                                            <th>STT</th>
                                            <th>Mã khóa học</th>
                                            <th>Tên khóa học</th>
                                            <th>Hình ảnh</th>
                                            <th>Lượt xem</th>
                                            <th>Người tạo</th>
                                            <th>Thao tác</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {renderQuanLyKhoaHoc()}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
