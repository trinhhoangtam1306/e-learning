import { Route, Switch, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history'
import QuanLyNguoiDung from './component/admin/body/QuanLyNguoiDung/QuanLyNguoiDung';
import ThemNguoiDung from './component/admin/body/QuanLyNguoiDung/ThemNguoiDung/ThemNguoiDung';
import Login from './component/admin/header/Login/Login';
import ThemKhoaHoc from './component/admin/body/QuanLyKhoaHoc/ThemKhoaHoc/ThemKhoaHoc';
import { HeaderTemplate } from '../src/template/AdminTemplate/Header/HeaderTemplate';
import QuanLyKhoaHoc from './component/admin/body/QuanLyKhoaHoc/QuanLyKhoaHoc';

export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <HeaderTemplate exact path="/quanlynguoidung" Component={QuanLyNguoiDung} />
        <HeaderTemplate exact path="/themnguoidung" Component={ThemNguoiDung} />
        <HeaderTemplate exact path="/quanlykhoahoc" Component={QuanLyKhoaHoc} />
        <HeaderTemplate exact path="/themkhoahoc" Component={ThemKhoaHoc} />
        <Route exact path="/" component={Login} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
