import Link from "next/link";
import Image from "next/image";
import ApartmentGrid from "@/components/apartment/apartment-grid";
import { getAllApartments } from "../api/Apartments/route";
import ApartmentItem from "@/components/apartment/apartment-item";
import Footer from "@/components/footer/footer";
import { Suspense } from "react";

async function Apartments() {
  const apartments = await getAllApartments();

  return (
    <>
      <ul className="list-none w-full grid lg:grid-cols-2 xl:grid-cols-4 gap-8 ">
        {apartments.map((apartment) => {
          return (
            <li key={apartment._id}>
              <ApartmentItem
                type={apartment.type}
                id={apartment._id}
                image={apartment.image}
                description={apartment.description}
                sellerFirstName={apartment.sellerFirstName}
                sellerLastName={apartment.sellerLastName}
                sellerEmail={apartment.sellerEmail}
                price={apartment.price}
                phone={apartment.sellerPhone}
                address={apartment.address}
                city={apartment.city}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default async function Home() {
  return (
    <>
      <div className="container mx-auto space-y-24 h-fit p-3 ">
        <div className="flex flex-col space-y-6">
          <h1 className="text-3xl ">
            Browse our extensive collection of houses for sale procured just
            for, <span className="text-3xl text-orangeRed">you</span>
          </h1>

          <p className="">
            Looking for your dream apartment? Look no further than{" "}
            <span className="font-bold text-orangeRed"></span>! Our
            user-friendly platform connects renters with a wide range of
            listings, from cozy studios to spacious family homes. Find the
            perfect fit with detailed descriptions, high-quality photos, and
            easy-to-use contact forms, finding your new place is a breeze.
          </p>

          <div>
            <Link
              href="/apartments/listing"
              className="rounded-md text-white text-lg w-fit font-bold p-3  bg-gradient-to-r from-black to-gray-700 transition ease-in-out duration-300 hover:to-orangeRed"
            >
              {" "}
              List an apartment!
            </Link>
          </div>
        </div>

        <Suspense fallback={<h1 className="text-3xl">Loading...</h1>}>
          <Apartments />
        </Suspense>
      </div>
      <Footer />
    </>
  );
}
