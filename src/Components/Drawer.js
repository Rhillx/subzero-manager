import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import Clear from 'material-ui/svg-icons/content/clear'
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router-dom';


const MenuDrawer = props => {

        return(
            <Drawer open = {props.open} >
                
                <Clear onClick={props.toggle} />
    
                <Link to="/expense">
                    <RaisedButton fullWidth={true}>
                        Expense Report
                    </RaisedButton>
                </Link>
            
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