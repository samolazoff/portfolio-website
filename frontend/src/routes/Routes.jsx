import { Routes, Route, BrowserRouter } from "react-router";

import Layout from "../components/Layout/Layout";

import Home from '../pages/Home/Home';

const AppRoutes = () => {
  return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home></Home>}></Route>
                {/* <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/:id" element={<ProjectDetail />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} /> */}
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;