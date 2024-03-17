import { getApartmentDetails } from "@/app/api/Apartments/route";
import { format } from "date-fns";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BedIcon from "@mui/icons-material/Bed";
import BathtubIcon from "@mui/icons-material/Bathtub";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import PublicIcon from "@mui/icons-material/Public";
import CurrencyPoundIcon from "@mui/icons-material/CurrencyPound";
import Footer from "@/components/footer/footer";

export default async function ApartmentDetails({ params }) {
  const id = params.details;
  const apartmentDetails = await getApartmentDetails(id);

  return (
    <div className="flex flex-col space-y-3">
      <div className="flex flex-col container  mt-10 mx-auto  py-5 px-3 ">
        <div className="mb-10 flex justify-center items-center">
          <img
            className="w-full h-auto"
            src={`http://localhost:3000/${apartmentDetails.image}`}
          />
        </div>
        <div className="flex justify-between py-3">
          <div className="flex justify-start items-start">
            <h1 className="text-5xl font-bold">{apartmentDetails.type}</h1>
          </div>
        </div>

        <div className="flex justify-start items-center w-full mt-10 px-3">
          <div className="flex space-x-3">
            <h2 className="text-1xl font-bold hover:text-blue-500 hover:cursor-pointer">
              By{" "}
              {apartmentDetails.sellerFirstName +
                " " +
                apartmentDetails.sellerLastName}
            </h2>
            <p className="text-gray-500 hover:text-blue-500 hover:cursor-pointer">
              {apartmentDetails.sellerEmail}
            </p>
            <p className="text-gray-500">
              {" "}
              {format(new Date(apartmentDetails.createdAt), "yyyy-MM-dd HH:mm")}
            </p>
          </div>
        </div>

        <div className="flex flex-col space-y-6 mt-10 px-3">
          <h2 className="text-xl font-bold">Overview</h2>
          <div className="flex space-x-3">
            <LocationOnIcon />
            <p>{apartmentDetails.address}</p>
          </div>
          <div className="flex space-x-3">
            <LocationCityIcon />
            <p>{apartmentDetails.city}</p>
          </div>
          <div className="flex space-x-3">
            <PublicIcon />
            <p>{apartmentDetails.country}</p>
          </div>
          <div className="flex space-x-3">
            <BedIcon />
            <p>{apartmentDetails.bedrooms}</p>
          </div>
          <div className="flex space-x-3">
            <BathtubIcon />
            <p>{apartmentDetails.bathrooms}</p>
          </div>
        </div>

        <div className="flex flex-col space-y-6 mt-10 px-3">
          <h2 className="text-xl font-bold">Price</h2>

          <div className="flex space-x-3 shadow-md shadow-gray-400 w-fit p-5">
            <CurrencyPoundIcon />
            <p className="text-lg font-bold">{apartmentDetails.price}</p>
          </div>
        </div>
        <div className="flex flex-col space-y-3 mt-10 px-3 ">
          <h2 className="text-xl font-bold">Apartment Description</h2>
          <div
            className="shadow-md shadow-gray-400 p-5 "
            dangerouslySetInnerHTML={{ __html: apartmentDetails.description }}
          ></div>
        </div>
      </div>
    </div>
  );
}
