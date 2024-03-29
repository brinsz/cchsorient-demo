
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes} from 'react-router-dom';

import SiteNav from './components/common/SiteNav';
import SiteFooter from './components/common/SiteFooter';
import HomePage from './components/home/HomePage';
import LoginPage from './components/auth/LoginPage';
import RegisterPage from './components/auth/RegisterPage';


function App() {
  return (
    <div className>
      <SiteNav/>
      <Routes>
        <Route path='*' element={<HomePage/>} />
        <Route path='/' exact={true} element={<HomePage/>} />
        <Route path='/login' exact={true} element={<LoginPage/>} />
        <Route path='/register' exact={true} element={<RegisterPage/>} />
      </Routes>
      <SiteFooter/>
    </div>
  );
}

export default App;
