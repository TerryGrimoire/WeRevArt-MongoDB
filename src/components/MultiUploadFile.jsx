/* import axios from "axios";
import React, { Fragment, useState } from "react";

function MultiUploadFile() {
  const [multiFiles, setMultiFiles] = useState([]);

  const onChange = (e) => {
    console.log(e.target.multiFiles);
    setMultiFiles(e.target.multiFiles);
  };
  console.log(multiFiles);
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.values(multiFiles).forEach((file) => {
      formData.append("uploadImages", file);
    });

    try {
      const res = await axios.post("/api/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(res);
    } catch (err) {
      if (err.response.status === 500) {
        console.log(err);
      } else {
        console.log(err.response.data.msg);
      }
    }
  };

  return (
  <Fragment>
    <form onSubmit={onSubmit}>
      <div>
        <input
          type="file"
          id="file"
          name="uploadImages"
          multiple
          onChange={onChange}
        />
      </div>
      <input type="submit" value="Upload" />
    </form>
  </Fragment>
  );
}

export default MultiUploadFile; */
