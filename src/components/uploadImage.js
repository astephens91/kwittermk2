import React from "react";
import { connect } from "react-redux"
import { uploadImage } from "../actions/uploadImage"
// import users from "../reducers/users";

class ImageUploader extends React.Component {
    state = {
        file : null
    }

   handleSubmit = e => {
       e.preventDefault()

       const formData = new FormData(e.target);

        
       this.props.uploadImage(formData);
       
   }

//    handleChange = e => {
//     //    console.log(e.target.files[0])
//        const file = e.target.files[0]
//        this.setState({
//             file: file
//        })
//    }

  render() {
    // let url = `https://kwitter-api.herokuapp.com/${this.props.id}/picture`;

    //   return (
    //   <form onSubmit={this.handleSubmit}>
    //       <input type="file" name="picture" id="picture" onChange={this.handleChange}></input>
    //       <button type="submit" value="Submit">Submit Upload</button>
    //   </form>)

    return (
        // <form action={url} method="put" encType="multipart/form-data">
        <form onSubmit={this.handleSubmit}>
            <input type="file" name="picture" id="picture"></input>
            <button type="submit" value="Submit">Submit Upload</button>
        </form>
        
    )
  }
}

// const mapStateToProps = state => {
//    return {
//      uploadImageResult: state.uploadImageResult,
//      id: users.loggedInUser.id,
//      token: auth.login.token
//    };
//  };

// const mapDispatchToProps = dispatch => {
//    return {
//      image: imageData => dispatch(uploadImage(imageData))
//    };
//  };

export default connect(
    ({auth}) => ({
        id: auth.login.id,
        token: auth.login.token
    }),
   {uploadImage}
 )(ImageUploader);