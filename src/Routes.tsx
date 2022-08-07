import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./HomePage/HomePage";
import { RepositoriesPage } from "./Resitories/RepositoriesPage";

export function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/repositories" element={<RepositoriesPage />} />
            </Routes>
        </Router>
    );
}