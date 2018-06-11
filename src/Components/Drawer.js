import React from 'react';
import Drawer from 'material-ui/Drawer';
import Clear from 'material-ui/svg-icons/content/clear'
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router-dom';


const MenuDrawer = props => {

        return(
            <Drawer open = {props.open} >
                
                <Clear onClick={props.toggle} />
                <div className="drawer-item">
                    <Link to="/">
                        <RaisedButton fullWidth={true}>
                            Home
                        </RaisedButton>
                    </Link>
                </div>

                <div className="drawer-item">
                    <Link to="/expense">
                        <RaisedButton fullWidth={true}>
                            Expense Report
                        </RaisedButton>
                    </Link>
                </div>
            
                <div className="drawer-item">
                    <Link to="/customer-log">
                        <RaisedButton fullWidth={true}>
                            Customer Log
                        </RaisedButton>
                    </Link>
                </div>
                <div className="drawer-item">
                    <Link to="/batches">
                        <RaisedButton fullWidth={true}>
                            Batches
                        </RaisedButton>
                    </Link>
                </div>
                <div className="drawer-item">
                    <Link to="/notes">
                        <RaisedButton fullWidth={true}>
                            Notes
                        </RaisedButton>
                    </Link>
                </div>

            </Drawer>
        )
}


export default MenuDrawer ;