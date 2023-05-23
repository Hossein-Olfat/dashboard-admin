import { IoMdNotificationsOutline } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";
import { MdLanguage } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";

function Header() {
  return (
    <header className=" w-full h-16">
      <section className=" flex justify-between sticky py-3 items-center flex-wrap px-4">
        <div className=" flex justify-center items-center text-3xl text-[#1e1e87] font-bold">
          <h1 className=" mr-1">Sabzlearn</h1>
          <IoMdHeart />
        </div>

        <div>
          <div className="flex items-center text-[#363636]">
            <div className="relative mr-4">
              <IoMdNotificationsOutline className="text-2xl cursor-pointer" />
              <span className="absolute text-white rounded-[50%] bg-[#e52d2d] text-[10px] flex justify-center items-center right-[-6px] top-[-7px] w-[20px] h-[19px]">
                2
              </span>
            </div>
            <div className="mr-4 relative">
              <MdLanguage className=" text-2xl cursor-pointer" />
              <span className="absolute text-white rounded-[50%] bg-[#e52d2d] flex justify-center items-center right-[-6px] top-[-7px] text-[10px] w-[20px] h-[19px]">
                3
              </span>
            </div>
            <div className="mr-4 relative">
              <IoMdSettings className="text-2xl cursor-pointer" />
              <span></span>
            </div>
            <div className=" cursor-pointer relative">
              <img
                className=" rounded-[50%]"
                width={"40px"}
                src="./public/images/profile.jfif"
              />
            </div>
          </div>
        </div>
      </section>
    </header>
  );
}
export { Header };
