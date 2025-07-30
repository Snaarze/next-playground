"use client";
import React, { useState } from "react";
import { CldUploadWidget, CldImage } from "next-cloudinary";

// created this interface since the object doesnt really show the properties of the api
// since the object doesnt know what shape it has
interface CloudinaryResult {
  public_id: string;
}

const UploadPage = () => {
  const [publicId, setPublicId] = useState("");

  return (
    //this does not work because we need is the function //<button></button>
    // do not pass a component here, since it only accept a function
    // this should be a client development in order to use the api
    <>
      {publicId && (
        <CldImage src={publicId} width={270} height={180} alt="An Image" />
      )}
      <CldUploadWidget
        // onUpload is deprecated and onSuccess is the new function that has the same purpose of uses
        // which are based on the documentation provided by the website
        onSuccess={(results) => {
          if (results.event !== "success") return;

          const info = results.info as CloudinaryResult;

          setPublicId(info.public_id);
        }}
        // this is for customizing the properties to one source only such as local
        // you can also turn off the multiple files upload by settign it to false
        options={{
          sources: ["local"],
          multiple: false,
          //set the max files to upload
          maxFiles: 5,
          //override the styles of the file
          // wasn't taught along the course but can be seen or view on the documentation of the cloudinary
          styles: {},
        }}
        // the data here are available in the account environment
        uploadPreset="Images"
      >
        {({ open }) => (
          <button className="btn btn-primary" onClick={() => open()}>
            Upload
          </button>
        )}
      </CldUploadWidget>
    </>
  );
};

export default UploadPage;
