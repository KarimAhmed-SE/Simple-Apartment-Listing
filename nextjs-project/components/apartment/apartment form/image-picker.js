"use client";

import Image from "next/image";
import { useRef, useState } from "react";

export default function ImagePicker({
  label,
  name,
  apartmentData,
  setApartmentData,
}) {
  const imageInput = useRef();

  const [image, setImage] = useState();

  const handleClick = () => {
    imageInput.current.click();
  };

  const handleImagechange = (event) => {
    const file = event.target.files[0];
    if (!file) {
      setImage(null);
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImage(reader.result);
    };

    setApartmentData({
      ...apartmentData,
      image: event.target.files[0],
    });
  };

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <div className="flex flex-col space-y-1">
        <div
          className={
            image &&
            "w-[12rem] h-[12rem] border-2 border-slate-700 flex justify-center items-center text-center position relative rounded-sm"
          }
        >
          {!image && <p>No image picked yet.</p>}
          {image && <Image src={image} alt="The image selected by user" fill />}
        </div>
        <input
          className="hidden"
          id={name}
          type="file"
          accept="image/png, image/jpeg"
          required={true}
          name={name}
          ref={imageInput}
          onChange={handleImagechange}
        />

        <button
          htmlFor={name}
          type="button"
          onClick={handleClick}
          className="p-2 rounded-md bg-slate-700 hover:bg-slate-400 text-white w-fit "
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}
