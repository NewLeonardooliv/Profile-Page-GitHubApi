import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProfilePage } from "./pages/Profile/Index";
import { Resume } from "./pages/Resume/Index";
import { Portifolio } from "./pages/Portfolio/Index";

export function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<ProfilePage />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/repositories" element={<Portifolio />} />
            </Routes>
        </Router>
    );
}