import React from 'react';
import {
  Button, Modal, ModalHeader, ModalBody, ModalFooter, Input
} from "reactstrap";

const AddProductPopup = React.memo((props) => {
  const closePopup = () => { props.onClose() };

  return (
    <Modal isOpen={props.open} toggle={closePopup} className ="modalBody">
      <ModalHeader toggle={closePopup} id ="heading">Add Product</ModalHeader>
      <ModalBody >
        <form >
           <div id = "formContent">
                     
                    <label> Product category:  </label> 
                      <Input type = "text"id = "Input" />
                   <label>  Product Title: </label>
                     <Input type = "text" placeholder = "Enter Product Title"id = "Input"/>
                  <label> Price: </label>  
                     <Input type = "text" placeholder = "Enter Price"id = "Input" />
            </div>
            <h3>Top Products</h3>
            <Button class ="btn btn-outline btn-primary">Upload Image</Button>
            <h4>Upload Product Image</h4>
        </form>
      </ModalBody>
      <ModalFooter>
        <Button color="danger"  onClick={closePopup}> CANCEL </Button>
        <Button color="primary">SAVE</Button>
      </ModalFooter>
    </Modal>
  );
});
export default AddProductPopup;
