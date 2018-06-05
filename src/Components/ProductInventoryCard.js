import React, {Component} from 'react';
import{Card, CardHeader, CardText} from 'material-ui/Card';
import {List} from 'material-ui/List';

import ProductListItem from './ProductListItem';
import IconicMenu from './IconMenu';




class ProductInventoryCard extends Component {
    state={
        addModalIsOpen: false
    }

toggleAddModal =()=>{
    if(!this.state.addModalIsOpen){
        this.setState({addModalIsOpen: true})
    } else{
        this.setState({addModalIsOpen: false})
    }
}

render(){

    return(
        <Card zDepth ={2}>
           
            <CardHeader
                title = "Product Inventory"
                showExpandableButton = {true}
            />
         
            <CardText expandable={true}>
                <IconicMenu 
                    menuOne='Add New Product' 
                    menuTwo='Remove Product' 
                    addModalStatus={this.state.addModalIsOpen}
                    addModalAction={this.toggleAddModal}
                />
                <List>
                    <ProductListItem/>
                </List>
            </CardText>


        </Card>
    )
}
}

export default ProductInventoryCard;