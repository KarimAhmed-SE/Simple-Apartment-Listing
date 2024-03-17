import Link from "next/link";
import Image from "next/image";

export default function ApartmentItem({
  type,
  id,
  image,
  description,
  sellerFirstName,
  sellerLastName,
  sellerEmail,
  price,
  address,
  city,
  phone,
}) {
  return (
    <div className="space-y-1 w-full h-fit rounded-md  border-2 border-slate-700 transition-opacity ease-in-out duration-300 hover:opacity-80 hover:cursor-pointer">
      <div className="w-full h-[70%]">
        <img src={image} alt={type} className=" object-fill"></img>
      </div>

      <div className="flex-col justify-center p-2 items-center space-y-3 w-full full">
        <h3 className="text-white p-2 bg-orangeRed rounded-full w-fit uppercase">
          {type}
        </h3>
        <div>
          <p className="text-xl">
            {sellerFirstName} {sellerLastName}
          </p>
          <p className="text-gray-600">{address}</p>
          <p className="text-gray-600">{city}</p>
        </div>

        <p className="text-center">
          <span className="font-bold text-xl">${price}</span>
        </p>

        <div className="flex justify-end items-center">
          <Link
            href={`/apartments/${id}`}
            className="rounded-md text-white text-lg w-fit font-bold p-3  bg-gradient-to-r from-orange-700 to-orangeRed transition ease-in-out duration-300 hover:to-orange-700"
          >
            {" "}
            View Details{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}
