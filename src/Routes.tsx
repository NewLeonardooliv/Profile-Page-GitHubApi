import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProfilePage } from "./pages/Profile/Index";
import { RepositoriesPage } from "./pages/Resitories/Index";
import { Resume } from "./pages/Resume/Index";

export function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<ProfilePage />} />
                <Route path="/repositories" element={<RepositoriesPage />} />
                <Route path="/resume" element={<Resume />} />
            </Routes>
        </Router>
    );
}