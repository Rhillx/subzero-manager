import React, { Component } from 'react';
import MainScreen from './Components/MainScreen';
import ExpenseReport from './Components/ExpenseReport';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'



class App extends Component {
  render() {
    return (
      <div className="App">
      <MuiThemeProvider>
        <ExpenseReport/>
      </MuiThemeProvider>

      </div>
    );
  }
}

export default App;
