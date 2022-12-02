import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProfilePage } from "../pages/Profile/Index";

export function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<ProfilePage />} />
            </Routes>
        </Router>
    );
}