import React from 'react'

export default function TimKiemNguoiDung() {
    return (
        <form>
            <div className="input-group mt-4 mb-3">
                <input type="text" id='keyword' name='keyword' className="form-control" placeholder="Nhập vào tài khoản hoặc họ tên người dùng" aria-label="Nhập vào tài khoản hoặc họ tên người dùng" aria-describedby="basic-addon2" />
                
                <div className="input-group-append mr-5 ml-4">
                    <button className="btn btn-outline-success" type="submit" >Tìm</button>
                </div>
            </div>
        </form>
    )
}
