import React from 'react';
import { Switch } from 'react-router';
import './style.css';
import Routes from '../../config/routes';

const Main = () => {
  return(
    <main className="main">
      <div className="main_grid">
        <div>
          <Switch>
            <Routes/>
          </Switch>
        </div>
      </div>
    </main>
  );

}
  
export default Main;