
import { BrowserRouter, Route, Routes  } from 'react-router-dom'
import './App.css'
import Dashboard from './pages/dashboard';
import Header from './components/Header/Header';


function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" exact={true} element={<Dashboard/>} />
          <Route path="/dashboard" exact={true} element={<Dashboard/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
