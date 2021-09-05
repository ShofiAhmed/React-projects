import React from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Menu from './Menu';
import { Route, Switch } from 'react-router-dom';


function App() {

  return (

    <>

     <Menu />

       <Switch>
	   
         <Route exact path='/' component={Home}/>
         <Route path='/about' component={About}/>
         <Route path='/contact' component={Contact}/>
        
       </Switch>
    </>
  
  );
}

export default App;
