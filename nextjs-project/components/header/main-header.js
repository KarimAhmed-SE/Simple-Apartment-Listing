import Image from "next/image";
import Logo from "@/assets/images/Logo.png";
import Link from "next/link";

export default function MainHeader() {
  return (
    <div className="container flex justify-between items-center mx-auto mb-10">
      <div className="flex justify-center items-center w-28 h-28">
        <Link href="/">
          <Image src={Logo} />
        </Link>
      </div>

      <div className="flex justify-center items-center space-x-6 p-3">
        <Link
          href="/"
          className="text-xl font-bold transition-color duration-300 ease-in-out hover:text-orangeRed"
        >
          Home
        </Link>
        <Link
          href="/apartments/listing"
          className="text-xl font-bold transition-color duration-300 ease-in-out hover:text-orangeRed"
        >
          List Apartment
        </Link>

        <Link
          href="/apartments"
          className="text-xl font-bold transition-color duration-300 ease-in-out hover:text-orangeRed"
        >
          Browse Apartments
        </Link>
      </div>
    </div>
  );
}
