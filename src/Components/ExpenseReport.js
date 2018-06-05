import React, {Component} from 'react';
import {List} from 'material-ui/List';
import Add from 'material-ui/svg-icons/content/add';

import AppBar from 'material-ui/AppBar';

import ExpenseListItem from './ExpenseReportListItem';
import ExpenseForm from './ExpenseReportForm';

const styles ={
    addBtn:{
        color: 'white',
        width: 48,
        height: 48,
      
    }
}



class ExpenseReport extends Component{
    state ={
        formOpen: false,
        accPayValue: 1
    }


    addExpense =()=>{
        if(!this.state.formOpen){
            this.setState({formOpen: true})
        }
    }

    closeExpense=()=>{
        if(this.state.formOpen){
        this.setState({formOpen: false})

        }
    }

    handleChange = (event, index, value) => {this.setState({accPayValue: value})};


    render(){
        return(

            <div>
                <AppBar
                    title = "Expense Report"
                    zDepth={3}
                    iconElementRight = {<Add style={styles.addBtn} onClick={this.addExpense}/>}
                />
                <ExpenseForm 
                    open={this.state.formOpen} 
                    close={this.closeExpense} 
                    value={this.state.accPayValue}
                    onChange={this.handleChange}
                />
            <div className="list">
                <h4> Expense </h4>
                <h4> Amount </h4>
            </div>
            
            <div className="expense-list">
                <List>
                    <ExpenseListItem />
                </List>
            </div>
            </div>
        )
    }
}





export default ExpenseReport;