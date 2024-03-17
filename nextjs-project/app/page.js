import Image from "next/image";
import Link from "next/link";
import ImageSlideshow from "@/components/imageSlideshow/image-slideshow";

export default function Home() {
  return (
    <div className="container flex flex-col justify-center items-center space-y-10 mx-auto">
      <div className="block p-3 justify-center items-center space-y-6 xl:space-x-6  xl:flex ">
        <div className="w-full h-full">
          <ImageSlideshow />
        </div>

        <div className="flex flex-col space-y-6 w-full h-fit">
          <h1 className="text-3xl font-bold ">
            Welcome to <span className="text-orangeRed">ApartEase</span> where
            you will find your new home here!
          </h1>
          <p>
            Welcome to ApartEase, where finding your ideal apartment is
            effortless. We're dedicated to simplifying your apartment hunting
            experience with comprehensive listings and personalized service.
            Whether you're seeking a cozy studio or a spacious family home, our
            commitment to transparency, integrity, and exceptional customer care
            ensures you'll find the perfect place to call home.
          </p>

          <Link
            href="/apartments"
            className="p-3 bg-black text-white text-center h-12 rounded-md text-lg w-fit font-bold bg-gradient-to-r from-black to-gray-700 transition ease-in-out duration-300 hover:to-orangeRed"
          >
            Browse Apartments!
          </Link>
        </div>
      </div>

      <main className="mt-10 p-3">
        <div className="flex-col space-y-6 justify-center items-center"></div>
      </main>
    </div>
  );
}
