import React from 'react';
import{Card, CardHeader, CardText} from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';

import IconMenu from 'material-ui/IconMenu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';



const MaterialInventoryCard = props =>{


    return(
        <Card zDepth ={2}>
           
            <CardHeader
                title = "Material Inventory"
                showExpandableButton = {true}
            />
         
            <CardText expandable={true} expanded={props.expanded}>
            <div className ="icon-menu">
            <IconMenu
                iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                targetOrigin={{horizontal: 'left', vertical: 'top'}}
            >
                <MenuItem primaryText="Add Item" />
                <MenuItem primaryText="Remove Item" />
            </IconMenu>
            </div>
                <List>
                <ListItem primaryText = "Carts" secondaryText ="155"/>  
                <Divider/>
                <ListItem primaryText = "Packaging" secondaryText ="344" />  
                <Divider/>
                </List>
            </CardText>


        </Card>
    )
}

export default MaterialInventoryCard;