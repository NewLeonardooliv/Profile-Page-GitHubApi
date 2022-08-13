import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProfilePage } from "./pages/Profile/Index";
import { RepositoriesPage } from "./pages/Resitories/Index";

export function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<ProfilePage />} />
                <Route path="/repositories" element={<RepositoriesPage />} />
            </Routes>
        </Router>
    );
}