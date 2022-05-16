import React from 'react';
import blogpostsData from './blogposts-data';
import { Link } from 'react-router-dom';


function BlogpostsMenu({ blogposts }) {
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
function BlogPost({ match }) {
    const id = match.params.id;
    const blogpost = blogpostsData.find(post => post.id === id);
    //const otherBlogposts = blogpostsData.filter(post => post.id !== id);

    return (
        <>
            <div class="grid_2">
                <BlogpostsMenu blogposts={blogpostsData} />
            </div>
            
            <div class="grid_4 last">
                    <h1>{blogpost.heading}</h1>
                    <img src={blogpost.image} />
                    {blogpost.blogpost.map((paragraph, key) => (
                        <p key={key}>{paragraph}</p>
            ))}
            </div>
            
            
        </>
    );		
}
export default BlogPost;