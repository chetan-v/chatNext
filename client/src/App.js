import React, { Fragment } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import DashBoard from "./dashboard/DashBoard";
import HomePage from "./components/HomePage";
import { io } from "socket.io-client";
function App() {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io("https://chatnext-x4gd.onrender.com");
    setSocket(newSocket);

    return () => newSocket.close();
  }, []);
  return (
    <Router>
      <Fragment>
        <div className="container">
          <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<HomePage />} />
            <Route path="/" element={<DashBoard socket={socket} />} />
          </Routes>
        </div>
      </Fragment>
    </Router>
  );
}

export default App;
