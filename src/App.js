import './App.css';
import HomePage from './components/HomePage';
import BlogPost from './components/BlogPost';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Navbar, NavbarBrand } from 'reactstrap';
function App() {
  return (
    <Router>
        <div class="App">

        <Navbar dark color="primary">
          <div class="container">
        <NavbarBrand href="/">Technology Business Education</NavbarBrand>
          </div>
        </Navbar>

          <div class="container">         
          <Switch>
            <Route path="/" component={HomePage} exact />           
            <Route path="/:id" component={BlogPost} />
          </Switch> 

            <div class="grid_6">
				      <p>&copy; TBEducation</p>
			      </div>
          </div> 
                   
        </div>       
      </Router>
  );
}
export default App;