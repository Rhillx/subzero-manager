import React, { Component } from 'react';
import {List} from 'material-ui/List';
import Add from 'material-ui/svg-icons/content/add';
import MenuDrawer from './Drawer';
import AppBar from 'material-ui/AppBar';

import CustomerForm from './CustomerForm';


const styles ={
    addBtn:{
        color: 'white',
        width: 48,
        height: 48,
      
    }
}



class CustomerLog extends Component{
    state ={
        formOpen: false,
        amountPaid: 1,
        drawerIsOpen: false,
    }

    toggleDrawer = () => {
        if(this.state.drawerIsOpen){
            this.setState({drawerIsOpen: false})
        } else {
            this.setState({drawerIsOpen: true})
        }
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

    handleChange = (event, index, value) => {this.setState({amountPaid: value})};


    render(){
        return(

            <div>
                <AppBar
                    title = "Customer Log"
                    zDepth={3}
                    iconElementRight = {<Add style={styles.addBtn} onClick={this.addExpense}/>}
                    onLeftIconButtonClick = {this.toggleDrawer}
                />
                <CustomerForm 
                    open={this.state.formOpen} 
                    close={this.closeExpense} 
                    value={"$"+ this.state.amountPaid}
                    onChange={this.handleChange}
                />
            <div className="list">
                <h4> Customer-Name </h4>
                <h4> Amount Paid </h4>
            </div>
            
            <div className="customer-list">
                <List>
                    
                </List>
            </div>
                 <div>
                    <MenuDrawer open={this.state.drawerIsOpen} toggle={this.toggleDrawer} />
                </div>
            </div>
        )
    }
}


export default CustomerLog;