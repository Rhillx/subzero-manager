import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Clear from 'material-ui/svg-icons/content/clear'

const style = {
  marginRight: 20,
};


const MenuDrawer = props => {
   console.log(props)
        return(
            <Drawer open = {props.open} >
                
                <Clear onClick={props.toggle} />
                <MenuItem>Expenses</MenuItem>
                <Divider/>
                <MenuItem>Material</MenuItem>
                <Divider/>
                <MenuItem>Inventory</MenuItem>
                <Divider/>
                <MenuItem>Batches</MenuItem>

            </Drawer>
        )
}


export default MenuDrawer ;