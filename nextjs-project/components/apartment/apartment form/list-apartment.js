"use client";

import { useState } from "react";
import ImagePicker from "./image-picker";
import axios from "axios";
import { createApartment } from "@/lib/actions";

export default function ListApartment() {
  const initialData = {
    type: "",
    description: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    price: 0,
    bedrooms: 0,
    bathrooms: 0,
    address: "",
    city: "",
    country: "",
    image: null,
  };

  const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    setApartmentData({ ...apartmentData, [name]: value });
  };

  const [apartmentData, setApartmentData] = useState(initialData);
  return (
    <div className="container mx-auto p-3 flex flex-col space-y-6 justify-center items-center bg-slate-200 h-full">
      <form className="flex flex-col gap-3 w-1/2" action={createApartment}>
        <h3 className="text-3xl font-bold"> Tell us about the apartment.</h3>

        <h4 className="font-bold text-md ">
          <span className="text-orangeRed text-xl mr-4">Address</span>YOUR
          INFORMATION IS PRIVATE
        </h4>
        <label>Address</label>
        <input
          type="text"
          className="border-gray-400 rounded-sm border-solid border-2 p-1 w-full"
          name="address"
          placeholder="Enter the address"
          onChange={handleChange}
          required={true}
          value={apartmentData.address}
        />

        <div className="block gap-3 xl:flex justify-between items-center ">
          <div className="flex flex-col space-y-2 w-full">
            <label>City</label>
            <input
              type="text"
              className="border-gray-400 rounded-sm border-solid border-2 p-1 w-full"
              name="city"
              placeholder="Enter city"
              onChange={handleChange}
              required={true}
              value={apartmentData.city}
            />
          </div>

          <div className="flex flex-col space-y-2 w-full">
            <label>Country</label>
            <select
              id="country"
              name="country"
              className="p-1 rounded-sm border-gray-400 border-solid border-2 w-full"
              onChange={handleChange}
              required={true}
              value={apartmentData.country}
            >
              <option value="">Please select a country</option>
              <option value="Egypt">Egypt</option>
              <option value="Saudi Arabia">Saudi Arabia</option>
              <option value="UAE">UAE</option>
              <option value="Palestine">Palestine</option>
              <option value="Qatar">Qatar</option>
            </select>
          </div>
        </div>

        <hr />
        <h4 className="font-bold text-md ">
          <span className="text-orangeRed text-xl mr-4">Description</span>What
          is the apartment like?
        </h4>

        <label>Type</label>
        <select
          id="type"
          name="type"
          className="p-1 rounded-sm border-gray-400 border-solid border-2 w-full"
          onChange={handleChange}
          required={true}
          value={apartmentData.type}
        >
          <option value="">Please Select the Apartment Type</option>
          <option value="Penthouse">Penthouse</option>
          <option value="Loft">Loft</option>
          <option value="Garden Apartment">Garden Apartment</option>
          <option value="Studio Apartment">Studio Apartment</option>
        </select>

        <div className="block gap-3 w-full justify-between items-center xl:flex ">
          <div className="flex flex-col w-full space-y-3">
            <label>Bedrooms</label>
            <input
              type="number"
              className="border-gray-400 rounded-sm border-solid border-2 p-1 w-full"
              name="bedrooms"
              placeholder="Number of Bedrooms"
              onChange={handleChange}
              required={true}
              value={apartmentData.bedrooms}
            />
          </div>

          <div className="flex flex-col w-full space-y-3">
            <label>Bathrooms</label>
            <input
              type="number"
              className="border-gray-400 rounded-sm border-solid border-2 p-1 "
              name="bathrooms"
              placeholder="Number of Bathrooms"
              onChange={handleChange}
              required={true}
              value={apartmentData.bathrooms}
            />
          </div>
        </div>

        <label>Description</label>
        <textarea
          className="border-gray-400 rounded-sm border-solid border-2 p-1 w-full"
          name="description"
          placeholder="Enter the description"
          onChange={handleChange}
          required={true}
          value={apartmentData.description}
        ></textarea>

        <hr />

        <ImagePicker
          label="Image"
          name="imagePicker"
          apartmentData={apartmentData}
          setApartmentData={setApartmentData}
        />

        <label>Price</label>
        <input
          type="number"
          className="border-gray-400 rounded-sm border-solid border-2 p-1 w-full"
          name="price"
          onChange={handleChange}
          required={true}
          value={apartmentData.price}
        />
        <h4 className="font-bold text-md ">
          <span className="text-orangeRed text-xl mr-4">Contact</span>
          How can buyers contact you?
        </h4>

        <div className="block gap-3 w-full justify-between items-center xl:flex ">
          <div className="flex flex-col w-full space-y-3">
            <label>First Name</label>
            <input
              type="text"
              className="border-gray-400 rounded-sm border-solid border-2 p-1 w-full"
              name="firstName"
              placeholder="First Name"
              onChange={handleChange}
              required={true}
              value={apartmentData.firstName}
            />
          </div>

          <div className="flex flex-col w-full space-y-3">
            <label>Last Name</label>
            <input
              type="text"
              className="border-gray-400 rounded-sm border-solid border-2 p-1 "
              name="lastName"
              placeholder="Last Name"
              onChange={handleChange}
              required={true}
              value={apartmentData.lastName}
            />
          </div>

          <div className="flex flex-col w-full space-y-3">
            <label>Phone Number</label>
            <input
              type="text"
              className="border-gray-400 rounded-sm border-solid border-2 p-1 w-full"
              name="phone"
              placeholder="Phone Number"
              onChange={handleChange}
              required={true}
              value={apartmentData.phone}
            />
          </div>
        </div>

        <label>Email</label>
        <input
          type="email"
          className="border-gray-400 rounded-sm border-solid border-2 p-1 w-full"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required={true}
          value={apartmentData.email}
        />

        <div className="flex justify-end items-center mt-4">
          <button
            type="submit"
            className="p-3 bg-black text-white text-center h-12 rounded-md text-lg w-fit font-bold bg-gradient-to-r from-black to-gray-700 transition ease-in-out duration-300 hover:to-orangeRed"
          >
            List Apartment
          </button>
        </div>
      </form>
    </div>
  );
}
