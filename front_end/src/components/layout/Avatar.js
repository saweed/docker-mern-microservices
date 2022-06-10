import React, { useState } from 'react'
import axios from 'axios';

const Avatar = ({avatar}) => {
  const [file, setFile] = useState('');
  const [uploadedFile, setUploadedFile] = useState({});

  const onChange = (e) => {
    setFile(e.target.files[0]);
    //console.log(file);
    //uploadAvatar();
  }

  // useEffect(() => {
  //   uploadAvatar();
  // }, [file])

  const uploadAvatar = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await axios.patch('/api/profile/avatar', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      const { fileName, filePath } = res.data;

      setUploadedFile({ fileName, filePath });
      setFile('');

      console.log('File Uploaded');
    } catch (err) {
      if (err.response.status === 500) {
        console.log('There was a problem with the server');
      } else {
        console.log(err.response.data.msg);
      }
    }
  }

  return (
    <>
      <form id="uploadAvatar" onSubmit={uploadAvatar}>
        <div className="avatar-upload">
          <div className="avatar-edit">
            <input type='file' id="imageUpload" accept=".png, .jpg, .jpeg" onChange={onChange} />
            <label htmlFor="imageUpload"></label>
          </div>
          <div className="avatar-preview">
            <div id="imagePreview" style={{ backgroundImage: `url(${avatar})`
}}>
              { (file) ? (<input type="submit" value="Save" id="uploadImage" />) : null }
            </div>
          </div>
        </div>
      </form>
    </>
  )
}

export default Avatar
