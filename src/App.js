import "./App.css";
import "./Assets/FontAwesome/index";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./Pages/Login/Login";
import Dashboard from "./Pages/Dashboard/Dashboard";
import FileUpload from "./Pages/FileUpload/FileUpload";
import Report from "./Pages/Reports/Report";
import Modal from "./Pages/Modal/Modal";
import Loaders from "./Pages/Others/Loaders";
import SignatureCanvasComponent from "./Pages/Others/SignatureCanvasComponent";
import Charts from "./Pages/Chart/Chart";
import Upload from "./Pages/FileUpload/FileUpload";
import TableComponent from "./Pages/Tables/TableComponent";
import FormComponent from "./Pages/Forms/FormComponent";
import Geolocation from "./Pages/Maps/Geolocation";
import { Scheduler } from "@aldabil/react-scheduler";
import EventScheduler from "./Components/Scheduler/EventScheduler";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/tables" element={<TableComponent />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/forms" element={<FormComponent />} />
          <Route path="/maps" element={<Geolocation />} />
          <Route path="/file-upload" element={<FileUpload />} />
          <Route path="/report" element={<Report />} />
          <Route path="/modals" element={<Modal />} />
          <Route path="/chart" element={<Charts />} />
          <Route path="/uploads" element={<Upload />} />

          {/* OTHERS */}
          <Route path="/others/loaders" element={<Loaders />} />
          <Route path="/others/scheduler" element={<EventScheduler />} />
          <Route
            path="/others/signature-canvas"
            element={<SignatureCanvasComponent />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
