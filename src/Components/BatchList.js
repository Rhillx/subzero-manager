import React, { Component } from 'react';
import {List} from 'material-ui/List';
import AppBar from 'material-ui/AppBar';
import Add from 'material-ui/svg-icons/content/add';
import MenuDrawer from './Drawer';

import BatchForm from './BatchForm';



const styles ={
    addBtn:{
        color: 'white',
        width: 48,
        height: 48,
      
    }
}


class BatchList extends Component {
    state = { 
        drawerIsOpen: false, 
        formOpen: false, 
        }

     toggleDrawer = () => {
        if(this.state.drawerIsOpen){
            this.setState({drawerIsOpen: false})
        } else {
            this.setState({drawerIsOpen: true})
        }
    }

     addBatch=()=>{
        if(!this.state.formOpen){
            this.setState({formOpen: true})
        }
    }

    closeForm=()=>{
        if(this.state.formOpen){
        this.setState({formOpen: false})

        }
    }


    render() {
        return (
            <div>
            <AppBar
                    title = "Batch List"
                    zDepth={3}
                    iconElementRight = {<Add style={styles.addBtn} onClick={this.addBatch}/>}
                    onLeftIconButtonClick = {this.toggleDrawer}
                />
                <BatchForm 
                    open={this.state.formOpen} 
                    close={this.closeForm} 
                />
                <div className="batch-list">
                    <List>  
                    </List>
                </div>

                <div>
                    <MenuDrawer open={this.state.drawerIsOpen} toggle={this.toggleDrawer} />
                </div>
            </div>
        );
    }
}

export default BatchList;
