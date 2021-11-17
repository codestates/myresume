import About from "./Sections/About";
import JobSearchSection from "./JobSearchSection";
import Rightbar from "../../components/rightbar/Rightbar";
import "./home.css";

function Index() {
  return (
    <div>
      <div className="homeContainer">
        <Rightbar />
      </div>
      <JobSearchSection />
      <br />
      <br />
      <About />
      <br />
      <br />
    </div>
  );
}

export default Index;
