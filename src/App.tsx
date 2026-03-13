
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { News } from "./pages/News/index";
import { Dojo } from "./pages/Dojo/index";
import { newsItemDetail } from "./constants/data";
import Chatbot from "./components/Chatbot";


function App() {
    return (
        <>
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/news" element={<News />} />
                {newsItemDetail.map((item) => (
                  <Route path={`/news/${item.uid}`} element={<News uid={item.uid} />} />
                ))}
                <Route path="/dojo" element={<Dojo />} />
            </Routes>
        </Router>
        <div style={{
            position: "fixed",
            bottom: 20,
            right: 20,
            zIndex: 9999
        }}>
            <Chatbot />
        </div>
        </>
    );
}

export default App;