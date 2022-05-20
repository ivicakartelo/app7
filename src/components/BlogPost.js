import React from 'react';
import blogpostsData from './blogposts-data';
//import { Link } from 'react-router-dom';
import { Card, CardText, CardTitle, Nav, NavItem, NavLink } from 'reactstrap';


function BlogpostsMenuLeft({ blogposts }) {
    return (
    <>
    <Nav vertical>
    {blogposts.map((post) =>  
        <NavItem>
            <NavLink key={post.id}  href={`/${post.id}`}>
                {post.heading}
            </NavLink>
        </NavItem>      
    )}</Nav>
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
            <BlogpostsMenuLeft blogposts={blogpostsData} />
        </div>
        
        <div class="grid_4 last">
        <Card
            body
            color=""
            outline
        >
            <CardTitle tag="h1">
                {blogpost.heading}
            </CardTitle>
            <img src={blogpost.image} />
        </Card>        
        <Card
            body
            color=""
            outline
        >
        {blogpost.blogpost.map((paragraph, key) => (
            <CardText>
                <p key={key}>{paragraph}</p>
            </CardText>
            ))}
        </Card>
            </div>
        </>
    );		
}
export default BlogPost;