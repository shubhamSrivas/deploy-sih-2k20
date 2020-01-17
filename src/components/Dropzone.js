import React, {Component} from 'react';
import ReactDropzoneUploader from 'react-dropzone-uploader';
import 'react-dropzone-uploader/dist/styles.css';
import '../App.css';

class Dropzone extends Component {
  render(){
    const getUploadParams = ({ meta }) => {
      const url = "https://httpbin.org/post";
      const fileUrl = `${url}/${encodeURIComponent(meta.name)}`;
      return { url, meta: { fileUrl } };
    };
  
    const handleChangeStatus = ({ meta, file }, status) => {
      console.log(status, meta, file);
    };
  
    const handleSubmit = (files, allFiles) => {
      console.log(files.map(f => f.meta));
      allFiles.forEach(f => f.remove());
    };
  return (
      <ReactDropzoneUploader
      getUploadParams={getUploadParams}
      onChangeStatus={handleChangeStatus}
      onSubmit={handleSubmit}
    />
  );
  }
}

export default Dropzone;
