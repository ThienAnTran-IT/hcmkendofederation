
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { News } from "./pages/News/index";
import { Dojo } from "./pages/Dojo/index";
import { newsItemDetail } from "./constants/data";

function App() {
    return (
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
    );
}

export default App;