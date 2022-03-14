// import React, { useEffect, useState } from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { getApiQuanLyNguoiDungAction } from '../../../redux/action/QuanLyNguoiDungAction';

export default function ApiQuanLyNguoiDung() {

    // lay du lieu tu store ve: useSelector()
    const { arrQuanLyNguoiDung } = useSelector(rootReducer => rootReducer.QuanLyNguoiDungReducer);

    const dispatch = useDispatch();

    console.log('arrQuanLyNguoiDung', arrQuanLyNguoiDung);

    useEffect(() => {

        const action = getApiQuanLyNguoiDungAction;

        dispatch(action)

    }, [])

    return (
        <div></div>
    )
}
