import React, {Component} from 'react';
import{Card, CardHeader, CardText} from 'material-ui/Card';
import {List} from 'material-ui/List';
import IconicMenu from './IconMenu';

import MaterialListItem from './MaterialListItem';


class MaterialInventoryCard extends Component {
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
                title = "Material Inventory"
                showExpandableButton = {true}
            />
         
            <CardText expandable={true}>
                <IconicMenu 
                    menuOne='Add Items' 
                    menuTwo='Remove Items' 
                    addModalStatus={this.state.addModalIsOpen}
                    addModalAction={this.toggleAddModal}
                />
                <List>
                    <MaterialListItem/>
                </List>
            </CardText>


        </Card>
    )
}
}

export default MaterialInventoryCard;