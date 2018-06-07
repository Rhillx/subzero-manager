import React, { Component } from 'react';
import MainScreen from './Components/MainScreen';
import ExpenseReport from './Components/ExpenseReport';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route';


class App extends Component {
    //      state={
    //     drawerIsOpen: false,
    //     expanded: false

    // }

    // toggleDrawer = () => {
    //     if(this.state.drawerIsOpen){
    //         this.setState({drawerIsOpen: false})
    //     } else {
    //         this.setState({drawerIsOpen: true})
    //     }
    // }



  render(props) {
    console.log(props)
    return (
      <div className="App">
      <MuiThemeProvider>
        <Router>
          <div>
            <Route path="/" exact strict component={MainScreen}/>
            <Route path="/expense" component={ExpenseReport}/>
          </div>
        </Router>
      </MuiThemeProvider>

      </div>
    );
  }
}




export default App;
