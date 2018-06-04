import React from 'react';

import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Slider from 'material-ui/Slider';
import Clear from 'material-ui/svg-icons/content/clear'





const ProductModal = props =>(


    <Dialog
          title={<Clear onClick={props.toggle}/>}
          modal={false}
          open={props.open}
          
        >
        <span className="slider-value">{props.sliderValue}</span>
    <Slider
          min={0}
          max={1000}
          step={1}
          value={props.sliderValue}
          onChange={props.onChange}
        />
        <div className="product-modal-btn">
            <RaisedButton
                label ="Stock"
                backgroundColor= "#54ff00"
                />
            <RaisedButton
                label = "Sold"
                backgroundColor = "red"
            />
        </div>

    </Dialog>

)

export default ProductModal;