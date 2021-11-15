import Feed from "../../components/feed/Feed";
import Navbar from "../../components/navbar/Navbar";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css";


function Index() {
  return (
  <>
    {/* <Navbar /> */}
    <div className = "homeContainer">
    <Sidebar />
   

    <Rightbar />
    </div>
  </>
  );
}

export default Index;
