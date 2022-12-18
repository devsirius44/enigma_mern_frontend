import React, { useRef, useEffect, useState } from "react";
import { Lucide } from "@/base-components";

const Images = () => {
  const uploadInputRef = useRef();
  const [imageFiles, setImageFiles] = useState([]);


  const handleUpload = (e) => {
    const { files } = e.target;

    const filesArr = [];
    files.forEach((file) => filesArr.push(URL.createObjectURL(file)));
    setImageFiles([...imageFiles, ...filesArr]);
  };

  const handleClickUpload = (e) => {
    e.preventDefault();
    uploadInputRef.current.click();
  };

  const handleRemoveFile = (e) => {
    const filtered = imageFiles.filter((item, index) => index !== e);
    setImageFiles(filtered);
  };

  useEffect(() => {
    console.log(imageFiles);
  }, [imageFiles]);

  return (
    <>
      <div className="xl:w-1/2 lg:w-2/3 sm:w-full intro-y box mr-auto ml-auto">
        <div className="p-5">
          <form className="flex items-center">
            <input
              type="file"
              name="Image Upload"
              id="image-upload"
              multiple
              onChange={handleUpload}
              ref={uploadInputRef}
              className="hidden"
            />
            <button
              className="btn btn-warning w-30 h-8"
              onClick={handleClickUpload}
            >
              <Lucide icon="Upload" className="w-5 h-5 mr-2" /> Upload
            </button>
          </form>
          <div className="image-gallery-wrapper mt-6">
            <div className="flex flex-wrap -m-1 md:-m-3">
              {!!imageFiles.length &&
                imageFiles.map((image, index) => (
                  <div className="flex flex-wrap lg:w-1/2 xl:w-1/3" key={`${image}_${index}`}>
                    <div className="w-full p-1 md:p-3 relative">
                      <img
                        alt="gallery"
                        data-action="zoom"
                        className="block object-cover object-center w-full h-44 xl:h-56 rounded-lg"
                        src={image}
                      />
                      <button
                        className="rounded-full border-2 border-red-600 absolute right-2 top-2"
                        onClick={() => handleRemoveFile(index)}
                      >
                        <Lucide icon="Minus" className="w-6 h-6 text-red-600" />
                      </button>
                    </div>
                  </div>
                ))}

              {!imageFiles.length && (
                <div className="w-full p-1 md:p-3">
                  <p>No Uploaded Images!</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Images;
