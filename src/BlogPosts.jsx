import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BlogPosts() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState({});

  const fetchBlogPosts = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/blogposts');
      setBlogPosts(response.data[0]);
    } catch (error) {
      console.error('Error fetching blog posts:', error);
    }
  };

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  const toggleCategorySelection = (categoryId) => {
    setSelectedCategories(prevSelected => {
      return { ...prevSelected, [categoryId]: !prevSelected[categoryId] };
    });
  };
  
  const isCategorySelected = (categoryId) => {
    return selectedCategories[categoryId];
  };

  return (
    <div className="right-panel">
      <h2>Blog Posts</h2>
      <ul style={{ listStyle: 'none' }}>
        {blogPosts.filter(post => {
          if (Object.keys(selectedCategories).length === 0) return true;
          return selectedCategories[post.categoryid];
        }).map(post => (
          <li key={post.id} style={{ border: '2px solid black', margin: '10px', padding: '10px', backgroundColor: 'rgba(128, 128, 128, 0.5)', borderRadius: '5px' }}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <p>Author: {post.author}</p>
            <p>Category: {post.category}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BlogPosts;
