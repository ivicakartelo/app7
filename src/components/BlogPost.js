import React from 'react';
import blogpostsData from './blogposts-data';
//import { Link } from 'react-router-dom';
import { Card, CardText, CardTitle, Nav, NavItem, NavLink, CardImg } from 'reactstrap';


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
        <div class="grid4">
            <BlogpostsMenuLeft blogposts={blogpostsData} />
        </div>
        
        <div class="grid8">
        <Card
            body
            color=""
            outline
        >
            <CardTitle tag="h1">
                {blogpost.heading}
            </CardTitle>
            <CardImg
        alt="Card image cap"
        src={blogpost.image}
        width="100%"
        />
        </Card>        
        <Card
            body
            color=""
            outline
        >
        {blogpost.blogpost.map((paragraph, key) => (
            <CardText key={key}>
                {paragraph}
            </CardText>
            ))}
        </Card>
            </div>
        </>
    );		
}
export default BlogPost;