import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';
import Clear from 'material-ui/svg-icons/content/clear'
import RaisedButton from 'material-ui/RaisedButton';

const CustomerForm = props => (
        <Dialog
            title="Customer Transaction"
            open={props.open}
            iconRight={<Clear onClick={props.close}/>}
            >
            <div className = "form-close-btn">
            <Clear onClick={props.close}/>
            </div>
            <TextField
                hintText="Custy Name"
            />
            <br/>
            <TextField
                hintText="Product Purchased"
            />
            <TextField
                hintText="Amount Paid"
            />
            <DatePicker hintText="Select Date"/>

            <RaisedButton>
                Add
                </RaisedButton>

            
        </Dialog>
);

export default CustomerForm;
