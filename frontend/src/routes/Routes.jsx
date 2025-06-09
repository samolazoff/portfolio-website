import { Routes, Route, BrowserRouter } from "react-router";
import {useSelector} from 'react-redux';

import Layout from "../components/Layout/Layout";

import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Projects from '../pages/Projects/Projects';
import Contacts from '../pages/Contacts/Contacts';
import Blog from '../pages/Blog/Blog';

import dataTxt from '../data/language.json';

const AppRoutes = () => {

    const language = useSelector((state) => state.language.language);
    const txt = (language === 'EN') ? dataTxt.EU : dataTxt.RU;

  return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element  = {<Layout txtContent = {txt}/>}>
                    <Route index element = {<Home  txtContent = {txt}/>}></Route>
                    <Route path = "/about" element = {<About txtContent = {txt}/>}></Route>
                    <Route path = "/projects" element = {<Projects txtContent = {txt}/>} ></Route>
                    <Route path = "/blog" element = {<Blog txtContent = {txt}/>} ></Route>
                    <Route path = "/contacts" element = {<Contacts txtContent = {txt}/>} ></Route>
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