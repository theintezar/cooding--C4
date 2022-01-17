import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router-dom';

import {Addjobform} from "./components/Addjob"

import {Applyjob} from "./components/Apply";



function App() {
  return (
    <div className="App">
  <Route>
     <Route path="/" element ={
        <Route>
       <Addjobform/>
       </Route>
     }/>

</Route>



  

<Route path="/apply/:id" element ={
       <Applyjob/>
         
     }/>


    </div>
  );
}

export default App;