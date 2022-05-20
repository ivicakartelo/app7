import React from 'react';
import blogpostsData from './blogposts-data';
import { Link } from 'react-router-dom';
import { Card, CardText, CardTitle, Nav, NavItem, NavLink, 
        CardImgOverlay, CardImg } from 'reactstrap';

function BlogpostsMenu({ blogposts }) {
    return (
    <>
    {blogposts.map((post) => 
    <div key={post.id}>     
    <Card inverse>
        <CardImg
        alt="Card image cap"
        src={post.image}
        width="100%"
        /> 
        <CardImgOverlay>
            <Link to={`/${post.id}`}>
            <CardTitle tag="h1">
                {post.heading}
            </CardTitle>
            </Link>
            <CardText>
            {post.blogpost[0].substring(0, 150)}...
            </CardText>
            <CardText>
            <small className="text-muted">
                Last updated 3 mins ago
            </small>
            </CardText>
        </CardImgOverlay>   
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