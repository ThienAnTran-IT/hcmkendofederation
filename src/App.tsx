
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { News } from "./pages/News/index";
import { Dojo } from "./pages/Dojo/index";
import { AuthGuard } from "./components/AuthGuard";
import { AdminLogin } from "./pages/Admin/AdminLogin";
import { AdminDashboard } from "./pages/Admin/index";
import { NewsManager } from "./pages/Admin/NewsManager";
import { NewsEditor } from "./pages/Admin/NewsEditor";
import { ClubsManager } from "./pages/Admin/ClubsManager";
import { ClubEditor } from "./pages/Admin/ClubEditor";
import { ContentManager } from "./pages/Admin/ContentManager";
import { GalleryManager } from "./pages/Admin/GalleryManager";
import { AdminsManager } from "./pages/Admin/AdminsManager";

function App() {
    return (
        <Router>
            <Routes>
                {/* Public routes */}
                <Route path="/" element={<Home />} />
                <Route path="/news" element={<News />} />
                <Route path="/news/:uid" element={<News />} />
                <Route path="/dojo" element={<Dojo />} />

                {/* Admin routes */}
                <Route path="/admin/login" element={<AdminLogin />} />
                <Route path="/admin" element={<AuthGuard><AdminDashboard /></AuthGuard>} />
                <Route path="/admin/news" element={<AuthGuard><NewsManager /></AuthGuard>} />
                <Route path="/admin/news/:uid" element={<AuthGuard><NewsEditor /></AuthGuard>} />
                <Route path="/admin/clubs" element={<AuthGuard><ClubsManager /></AuthGuard>} />
                <Route path="/admin/clubs/:id" element={<AuthGuard><ClubEditor /></AuthGuard>} />
                <Route path="/admin/content" element={<AuthGuard><ContentManager /></AuthGuard>} />
                <Route path="/admin/gallery" element={<AuthGuard><GalleryManager /></AuthGuard>} />
                <Route path="/admin/admins" element={<AuthGuard><AdminsManager /></AuthGuard>} />
            </Routes>
        </Router>
    );
}

export default App;