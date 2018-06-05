import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import Clear from 'material-ui/svg-icons/content/clear'



const MenuDrawer = props => {
   console.log(props)
        return(
            <Drawer open = {props.open} >
                
                <Clear onClick={props.toggle} />
                <MenuItem>Expense Report</MenuItem>
                <Divider/>
                <MenuItem>Customer Log</MenuItem>
                <Divider/>
                <MenuItem>Notes</MenuItem>
                <Divider/>
                <MenuItem>Batches</MenuItem>

            </Drawer>
        )
}


export default MenuDrawer ;