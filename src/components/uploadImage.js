import React from "react";
import { connect } from "react-redux";
import { Button, Card, Form } from "semantic-ui-react";
import { uploadImage } from "../actions/uploadImage"

class ImageUploader extends React.Component {
    state = {
        file : null
    }

   handleSubmit = e => {
       e.preventDefault()

       const formData = new FormData(e.target);

        
       this.props.uploadImage(formData);
       
   }

  render() {

    return (
        <React.Fragment>
        <Form onSubmit={this.handleSubmit}>
            <input style={{backgroundColor: "#2B2D42", color: "white"}} className="ui button" type="file" name="picture" id="picture"></input>
                <Card>
            <Button className="SubmitUploadButton" type="submit" value="Submit">Submit Upload</Button>
            </Card>
        </Form>
        </React.Fragment>
        
    )
  }
}

export default connect(
    ({auth}) => ({
        id: auth.login.id,
        token: auth.login.token
    }),
   {uploadImage}
 )(ImageUploader);