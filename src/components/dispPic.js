import React, {Component} from 'react';
import ReactDropzoneUploader from 'react-dropzone-uploader';
import 'react-dropzone-uploader/dist/styles.css';
import '../App.css';

class Dropzone extends Component {
 constructor(props) {
    super(props);
 }
  render(){
  return (
    <Form>
    <img alt="" src={this.props.url}/>
    </Form>
  );
  }
}

export default Dropzone;
