import React from 'react';
import{Card, CardHeader, CardText} from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';

import ProductListItem from './ProductListItem';




const ProductInventoryCard = props =>{
console.log(props)

    return(
        <Card  zDepth ={2}>
            <CardHeader
                title = "Product Inventory"
                showExpandableButton = {true}
            />
            <CardText expandable={true} >
                <List>
                    <ProductListItem/>
                </List>
            </CardText>


        </Card>
    )
}

export default ProductInventoryCard;