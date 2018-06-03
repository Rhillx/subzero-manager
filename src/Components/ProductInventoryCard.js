import React from 'react';
import{Card, CardHeader, CardText} from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';




const ProductInventoryCard = props =>{
console.log(props)

    return(
        <Card  zDepth ={2}>
            <CardHeader
                title = "Product Inventory"
                showExpandableButton = {true}
            />
            <CardText expandable={true} expanded={props.expanded} >
                <List>
                <ListItem primaryText = "Banana Kush" secondaryText ="155"/>  
                <Divider/>
                <ListItem primaryText = "Sours" secondaryText ="344" />  
                <Divider/>
                </List>
            </CardText>


        </Card>
    )
}

export default ProductInventoryCard;