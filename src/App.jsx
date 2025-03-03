
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './pages/dashboard';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="main flex">
          <div className="sidebarWrapper">
            <Sidebar />
          </div>
          <div className="content">
            <Routes>
              <Route path="/" exact={true} element={<Dashboard />} />
              <Route path="/dashboard" exact={true} element={<Dashboard />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App
