import Image from "next/image";
import logoImage from "../assets/images/logosaas.png";
import MenuIcon from "../assets/icons/menu.svg";

export const Navbar = () => {
  return (
    <div className=" bg-black">
      <div className="px-4">
        <div className="py-4 flex items-center justify-between">
          <div className="relative">
            <div className="absolute w-full top-2 bottom-0 bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] blur-md"></div>
            <Image
              src={logoImage}
              alt="logo image"
              className="relative h-12 w-12"
            />
          </div>
          <div className="border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden">
            <MenuIcon className="text-white" />
          </div>
          <nav className="text-white [&>a:not(:last-child)]:opacity-60 [&>a:not(:last-child):hover]:opacity-100 transition hidden sm:flex gap-6 items-center ">
            <a href="">About</a>
            <a href="">Features</a>
            <a href="">Updates</a>
            <a href="">Help</a>
            <a href="">Customers</a>
            <a
              href=""
              className="bg-white hover:bg-white/60 transition text-black py-2 px-4 rounded-lg"
            >
              Get for free
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};
