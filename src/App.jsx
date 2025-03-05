
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './pages/dashboard';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import { createContext, useEffect, useState } from 'react';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
const MyContext = createContext();

function App() {
  const [isToggleSidebar, setIstoggleSidebar] = useState(false);
  const [isHideSidebarandheader, setisHideSidebarandheader] = useState(false);
  const [themeMode, setThemeMode] = useState(true);

  useEffect(() => {
    if (themeMode === true) {
      document.body.classList.remove('dark');
      document.body.classList.add('light');
      localStorage.setItem('themeMode', 'light');
    } else {
      document.body.classList.remove('light');
      document.body.classList.add('dark');
      localStorage.setItem('themeMode', 'dark');
    }
  }, [themeMode]);

  const values = {
    isToggleSidebar,
    setIstoggleSidebar,
    isHideSidebarandheader,
    setisHideSidebarandheader,
    themeMode,
    setThemeMode
  }
  return (
    <>
      <BrowserRouter>
        <MyContext.Provider value={values}>
          {
            isHideSidebarandheader !== true &&
            <Header />
          }
          <div className="main flex">
            {
              isHideSidebarandheader !== true &&
              <div className={`sidebarWrapper ${isToggleSidebar === true ? 'toggle' : ''}`}>
                <Sidebar />
              </div>
            }

            <div className={`content ${isHideSidebarandheader === true && 'full'} ${isToggleSidebar === true ? 'toggle' : ''}`}>
              <Routes>
                <Route path="/" exact={true} element={<Dashboard />} />
                <Route path="/dashboard" exact={true} element={<Dashboard />} />
                <Route path="/login" exact={true} element={<Login />} />
                <Route path="/register" exact={true} element={<Register />} />
              </Routes>
            </div>
          </div>
        </MyContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App
export { MyContext }
