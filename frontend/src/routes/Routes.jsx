import { Routes, Route, BrowserRouter } from "react-router";

import Layout from "../components/Layout/Layout";

import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Projects from '../pages/Projects/Projects';
import Contacts from '../pages/Contacts/Contacts';
import Blog from '../pages/Blog/Blog';


const AppRoutes = () => {
  return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home></Home>}></Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route path="/projects" element={<Projects />} ></Route>
                    <Route path="/blog" element={<Blog />} ></Route>
                    <Route path="/contacts" element={<Contacts />} ></Route>
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