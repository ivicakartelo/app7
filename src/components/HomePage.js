import React from 'react';
import blogpostsData from './blogposts-data';
import { Link } from 'react-router-dom';
import { Card, CardText, CardTitle, Nav, NavItem, NavLink } from 'reactstrap';

function BlogpostsMenu({ blogposts }) {
    return (
    <>
    {blogposts.map((post) => 
    <div key={post.id}>
        
        <Card
        body
        color=""
        outline
        >  
        <Link to={`/${post.id}`}>
        <CardTitle tag="h1">
            {post.heading}
        </CardTitle>
        </Link>
        <img src={post.image} />
            <CardText>
                {post.blogpost[0].substring(0, 150)}...
            </CardText>   
        </Card>
    </div>
    )}
    </>
    );   
}

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