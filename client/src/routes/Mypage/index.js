import React from "react";
import Profile from "./Profile";
import Feed from "../../components/feed/Feed";
import Post from "./Post"
import ResumeList from "./ResumeList";
import Cards from "./Cards";

function Index() {
  return <div>
<Profile />
<ResumeList />
<Post />
<Cards />
  </div>;
}

export default Index;
