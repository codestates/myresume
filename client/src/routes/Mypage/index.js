import React from "react";
import Profile from "./Profile";
import Feed from "../../components/feed/Feed";
import Post from "./Post"
import ResumeList from "./ResumeList";


function Index() {
  return <div>
<Profile />
<ResumeList />
<Post />
  </div>;
}

export default Index;
