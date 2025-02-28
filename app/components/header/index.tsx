import burgerIcon from "./assets/burger-icon.png";
import profilePicture from "./assets/profile-picture.png";
import searchIcon from "./assets/search-icon.png";
import gearIcon from "./assets/gear-icon.svg";
import notifIcon from "./assets/notif-icon.svg";

export function Header() {
  return (
    <header className="flex flex-col pt-6 pl-6 pr-6 pb-5 gap-5 bg-white md:shadow-xs">
      <div className="flex flex-row justify-between items-center">
        <button className="w-[14px] h-[18px] md:hidden">
          <img src={burgerIcon} alt="burger icon" />
        </button>

        <div className="font-semibold text-xl">Overview</div>

        <div className="flex flex-row items-center gap-7">
          <div className="relative hidden md:block">
            <img
              src={searchIcon}
              alt="search icon"
              className="size-[15px] absolute top-3 left-4"
            />
            <input
              type="text"
              placeholder="Search for something"
              className="bg-[#F5F7FA] rounded-[40px] py-3 pl-10 pr-5 placeholder-[#8BA3CB] text-sm font-normal w-full"
            />
          </div>

          <button className="bg-[#F5F7FA] size-[50px] rounded-full flex items-center justify-center invisible md:visible cursor-pointer">
            <img src={gearIcon} alt="gear" />
          </button>

          <button className="bg-[#F5F7FA] size-[50px] rounded-full flex items-center justify-center invisible md:visible cursor-pointer">
            <img src={notifIcon} alt="gear" />
          </button>

          <div className="size-[35px] md:size-[60px]">
            <img
              src={profilePicture}
              alt="profile picture"
              className="w-full"
            />
          </div>
        </div>
      </div>

      <div className="relative md:hidden">
        <img
          src={searchIcon}
          alt="search icon"
          className="size-[15px] absolute top-3 left-4"
        />
        <input
          type="text"
          placeholder="Search for something"
          className="bg-[#F5F7FA] rounded-[40px] py-3 pl-10 pr-5 placeholder-[#8BA3CB] text-xs font-normal w-full"
        />
      </div>
    </header>
  );
}
