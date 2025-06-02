// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import { Home } from './pages/Home/Home';

// function App() {
//   return (
//     <div className="App">
//       {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header> */}
//       <Home />
//     </div>
//   );
// }

// export default App;


// Filename - App.js

import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { News } from "./pages/News/index";
import { newsItemDetail } from "./constants/data";
// import About from "./pages/about";
// import Blogs from "./pages/blogs";
// import SignUp from "./pages/signup";
// import Contact from "./pages/contact";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/news" element={<News />} />
                <Route path="/news/" element={<News />} />
                {newsItemDetail.map((item) => (
                  <Route path={`/news/${item.uid}`} element={<News uid={item.uid} />} />
                ))}
            </Routes>
        </Router>
    );
}

export default App;