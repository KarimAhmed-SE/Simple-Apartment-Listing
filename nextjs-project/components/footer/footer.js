export default function Footer() {
  return (
    <section id="contact" className="bg-black w-full mt-20  ">
      <div className="flex flex-col space-x-14 mx-auto container md:flex-row justify-center items-center py-14">
        <div className="space-y-4 flex flex-col mt-5 md:w-full">
          <a
            href="#"
            className="text-base text-white hover:text-darkGrayishBlue"
          >
            About us
          </a>
          <a
            href="#"
            className="text-base text-white hover:text-darkGrayishBlue"
          >
            Contact
          </a>
          <a
            href="#"
            className="text-base text-white hover:text-darkGrayishBlue"
          >
            Policies
          </a>
        </div>

        <div className="space-y-14 flex flex-col mt-5 md:w-full">
          <div className="flex flex-row space-x-3">
            <input
              className="rounded-full text-center"
              type="text"
              placeholder="Updates in your inbox"
            />
            <a
              href="#"
              className=" bg-brightRed font-bold rounded-full  text-white px-4 py-2 md:w-1/5 justify-center items-center"
            >
              Go
            </a>
          </div>

          <p className="copyright text-white">
            Copyright &copy; 2024 Karim Ahmed
          </p>
        </div>
      </div>
    </section>
  );
}
