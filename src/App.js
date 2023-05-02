import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/content/About';
import Service from './components/content/Service';
import ContactUs from './components/contactus/ContactUs';


function App() {
  return (
    <>
      <Router>
          <Header />
          <Routes>
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/service" element={<Service />} />
            <Route exact path="/contact_us" element={<ContactUs />} />

          </Routes>
      </Router>
    </>
  );
}
export default App;