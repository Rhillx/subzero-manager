import React, {Component} from 'react';
import {ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';

import ProductModal from './ProductModal';




class ProductListItem extends Component{
        state ={
            sliderValue: 0,
            modalIsOpen: false,

        }

        handleSlideChange = (event, value)=>{
            this.setState({sliderValue: value})
        }
        toggleModal = () =>{
            if(!this.state.modalIsOpen){
                this.setState({modalIsOpen: true})
            } else{
                this.setState({modalIsOpen: false})
            }
        }
    render(){
        return(
            <div>
                <ListItem primaryText = "Banana Kush" secondaryText ="155" onClick={this.toggleModal}/>  
                <ProductModal 
                    sliderValue={this.state.sliderValue} 
                    onChange={this.handleSlideChange}
                    toggle={this.toggleModal}
                    open={this.state.modalIsOpen}
                />
                <Divider/>
            </div>

        )
    }
}


export default ProductListItem;