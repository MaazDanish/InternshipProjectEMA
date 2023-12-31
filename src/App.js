import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom'
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';


function App() {
  return (
    <div className='App'>
      <Router>      
                <HeaderComponent />
        <div className="container">
          <Switch>
            <Route exact path="/" component = {ListEmployeeComponent}></Route>
            <Route path="/employees" component = {ListEmployeeComponent}></Route>   
            <Route path="/add-employee/:id" component = {CreateEmployeeComponent}></Route>
            
            <Route path="/view-employee/:id" component = {ViewEmployeeComponent}></Route>  
          
                  </Switch>
                   
    </div>
    <FooterComponent />    
    </Router>
    </div>
  );
}

export default App;
