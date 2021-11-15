import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import About from '../../components/About';
import ResumeForm from '../../components/ResumeForm';
function Index() {
  return (
    <div>
      <Navbar />
      <About />
      <ResumeForm />
      <Footer />
    </div>
  );
}

export default Index;
