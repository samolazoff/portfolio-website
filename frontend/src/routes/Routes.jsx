import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router";
import Home from '../pages/Home/Home';

const AppRoutes = () => {
  return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/:id" element={<ProjectDetail />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} /> */}
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;