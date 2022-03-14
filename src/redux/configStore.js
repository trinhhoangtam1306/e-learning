import {applyMiddleware, combineReducers, createStore} from 'redux';
// add middleware vao redux
import reduxThunk from 'redux-thunk';
import { QuanLyNguoiDungReducer } from './reducer/QuanLyNguoiDungReducer';




const rootReducer = combineReducers({
    // noi chua toan bo state cua ung dung
    QuanLyNguoiDungReducer: QuanLyNguoiDungReducer
})



export const store = createStore(rootReducer, applyMiddleware(reduxThunk))