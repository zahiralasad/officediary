import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
      {/* <Header /> */}
        <div className="wrapper">
          {/* <Sidebar /> */}
          <div className="main p-1">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
      </div>
    </BrowserRouter >
  );
}

export default App;
