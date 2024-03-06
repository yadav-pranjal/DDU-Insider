import React, { useState } from 'react';
import profilePic from './assets/react.svg';
import './App.css';
import logo from './assets/png/logo-no-background.png';
import BlogPosts from './BlogPosts';
import Communities from './Communities';

function App() {
  const [showCommunities, setShowCommunities] = useState(false);
  const [showBlogPosts, setShowBlogPosts] = useState(false);
  const [selectedCommunity, setSelectedCommunity] = useState('');
  
  const CommunitiesList = ['GDSC DDU', 'IETE DDU', 'CSI DDU'];

  const toggleCommunities = () => {
    setShowCommunities(!showCommunities);
    setShowBlogPosts(false);
  };

  const toggleBlogPosts = () => {
    setShowBlogPosts(!showBlogPosts);
    setShowCommunities(false);
  };

  const selectCommunity = (community) => {
    setSelectedCommunity(selectedCommunity === community ? '' : community);
  };

  return (
    <div className="app">
      <div className="top-bar">
        <div className="left-top-bar">
          <img src={logo} width='120px' height='80px'/>
        </div>
        
        <div className="profile">
          <ul>
            <li onClick={toggleBlogPosts} style={{ cursor: 'pointer' }}>Blogs</li>
            <li onClick={toggleCommunities} style={{ cursor: 'pointer' }}>Communities</li>
          </ul>
          <img src={profilePic} alt="Profile" />
        </div>
      </div>

      <div className="content">
        {showCommunities && <Communities Communities={CommunitiesList} selectCommunity={selectCommunity} />}

        {showBlogPosts && <BlogPosts />}
      </div>
    </div>
  );
}

export default App;
