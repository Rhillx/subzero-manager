import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';

import AppBar from 'material-ui/AppBar';

const ExpenseReport = () =>(


    <div>
        <AppBar
            title = "Expense Report"
            zDepth={3}
        />
    <div className="list">
        <h4> Expense </h4>
        <h4> Amount </h4>
    </div>
    
    <div className="expense-list">
        <List>
            <ListItem primaryText="expense"/>
            <Divider/>
        </List>
    </div>
    </div>

)

export default ExpenseReport;