
import { TopNavBar } from './components/navbar'
import { Footer } from './components/footer';
import './App.css';
import {DataProvider} from './components/DataProvider'
import Products from './components/Products';
import {Switch, Route } from 'react-router-dom'
import Details from './components/Details'
import {Login} from './components/Login'
import React from 'react';
import Home from './components/Home';

class App extends React.Component{
  state = {
    isLog:false
  }
  handleLogin = (isLog) => this.setState({isLog})

  render(){
    const {isLog} = this.state
    return (
      <DataProvider>
      <div className='App'>
        <TopNavBar />
        <hr />
        <Switch>
          <Route path={['/','/products']} component={Products} exact />
          <Route path='/products/:id' component={Details} />
          <Route path='/login' render={() => !isLog ? <Login isLogin={this.handleLogin}/>: <Home />} />
        </Switch>
        <br />
        <Footer />
      </div >
      </DataProvider>
  
    );

  }
  

}

export default App
