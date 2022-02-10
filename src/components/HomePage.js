import React from 'react';
import blogpostsData from './blogposts-data';
import { Link } from 'react-router-dom';


function BlogpostsMenu({ blogposts }) {
    return (
    <>
    {blogposts.map((post) => 
        <Link key={post.id} to={`/${post.id}`}>
            <h3>{post.heading}</h3>
            <img src={post.image} />
            <p>{post.blogpost[0].substring(0, 150)}...</p>
        </Link>
    )}
    </>
    );   
}

function BlogpostsMenuLeft({ blogposts }) {
    return (
    <>
    {blogposts.map((post) => 
        <Link key={post.id} to={`/${post.id}`}>
            <h3>{post.heading}</h3>
        </Link>
    )}
    </>
    );   
}

function HomePage() {
    return (
        <>     
        <div class="grid_2">
            <BlogpostsMenuLeft blogposts={blogpostsData} />
        </div> 
        <div class="grid_4 last">
            <BlogpostsMenu blogposts={blogpostsData} />
        </div>  
    </> 
    );
}
export default HomePage;