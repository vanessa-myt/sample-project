import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './Pages/Login/Login';
import Dashboard from './Pages/Dashboard/Dashboard';
import Form from './Pages/Forms/Form';
import FileUpload from './Pages/FileUpload/FileUpload'; 
import Report from './Pages/Reports/Report';
import Modal from './Pages/Modal/Modal';
import Loaders from './Pages/Others/Loaders';
import Charts from './Pages/Chart/Chart';
import Upload from './Pages/FileUpload/FileUpload';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>        
          <Route path="/dashboard" element={<Dashboard/>}/>        
          <Route path="/form" element={<Form/>}/>        
          <Route path="/file-upload" element={<FileUpload/>}/>        
          <Route path="/report" element={<Report/>}/>        
          <Route path="/modals" element={<Modal/>}/>
          <Route path="/chart" element={<Charts/>}/>
          <Route path="/uploads" element={<Upload/>}/>

          {/* OTHERS */}
          <Route path="/others/loaders" element={<Loaders/>}/>      
        </Routes>
      </Router>
    </div>
  );
}

export default App;
