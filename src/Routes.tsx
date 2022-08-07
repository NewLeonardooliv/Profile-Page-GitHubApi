import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProfilePage } from "./Home/ProfilePage";
import { RepositoriesPage } from "./Resitories/RepositoriesPage";

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