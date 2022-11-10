import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './Pages/Login/Login';
import Dashboard from './Pages/Dashboard/Dashboard';
import Form from './Pages/Forms/Form';
import FileUpload from './Pages/FileUpload/FileUpload'; 

function App() {
  return (
    <div className="App">
     <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
        </Routes>
        <Routes>
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
        <Routes>
          <Route path="/form" element={<Form/>}/>
        </Routes>
        <Routes>
          <Route path="/file-upload" element={<FileUpload/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
