import Login from './Unit_2/components/Login'
import SignUp from './Unit_2/components/SignUp'
import Home from './Unit_2/components/Home'
import './App.css';
import { Route, Link, Switch } from 'react-router-dom';

import styled from 'styled-components';
import { useEffect, useState } from 'react';
import axios from 'axios';
import * as yup from 'yup';
import {BASE_URL} from './Unit_2/BASE_URL';
import CreatePlant from './Unit_3/components/CreatePlant';

import PrivateRoute from './Unit_3/utils/PrivateRoute';
import PlantList from './Unit_3/components/PlantList';
import { StyledApp } from './Unit_2/StyledComponents/StyledApp';

function App() {
	return (
    <div className='app'>
        <StyledApp>
          <Link to='/'>
		  	<h2>Water My Plants!</h2>
		  </Link>
          <nav>
            <Link to='/login'>
            	<button style={{color:'white', backgroundColor:'#98EA28'}}>Login</button>
            </Link>  
            <Link to='/signup'>
            	<button>Sign Up</button>
            </Link>
          </nav>
        </StyledApp>
        <Switch>
		  <Route path='/plants' component={PlantList} />

		  <Route exact path="/create" component={CreatePlant} />
         

          <Route path='/signup' component={SignUp}/>
          <Route path='/login' component={Login}/>
          <Route exact path='/' component={Home}/>

        </Switch>
    </div>
  );
};


export default App;
