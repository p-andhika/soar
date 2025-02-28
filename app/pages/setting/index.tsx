import { useState } from "react";
import profilePicture from "./assets/profile-picture.png";
import pencilIcon from "./assets/pencil-icon.png";

export function Setting() {
  const [profileData, setProfileData] = useState({
    name: "Charlene Reed",
    username: "Charlene Reed",
    email: "charlenereed@gmail.com",
    password: "**********",
    dateOfBirth: "25 January 1990",
    presentAddress: "San Jose, California, USA",
    permanentAddress: "San Jose, California, USA",
    city: "San Jose",
    postalCode: "45962",
    country: "USA",
  });

  const handleChange = (e: any) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Profile data saved:", profileData);
  };

  return (
    <div className="rounded-[25px] bg-white md:p-[30px]">
      <div className="border-b border-gray-200 mb-6">
        <nav className="flex space-x-8">
          <button className="cursor-pointer border-b-3 border-[#232323] pb-2 px-1 text-[#232323] font-medium text-[13px] md:text-base">
            Edit Profile
          </button>
          <button className="cursor-pointer pb-2 px-1 text-[#718EBF] text-[13px] md:text-base">
            Preferences
          </button>
          <button className="cursor-pointer pb-2 px-1 text-[#718EBF] text-[13px] md:text-base">
            Security
          </button>
        </nav>
      </div>

      <div className="flex flex-col md:flex-row md:gap-[57px]">
        <div className="relative mb-auto ml-auto mr-auto">
          <img src={profilePicture} width={90} height={90} />

          <div className="size-[30px] bg-[#232323] rounded-full flex justify-center flex-row items-center absolute right-0 bottom-0">
            <img src={pencilIcon} width={15} height={15} />
          </div>
        </div>

        <form onSubmit={handleSubmit} className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={profileData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
            </div>

            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                User Name
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={profileData.username}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={profileData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={profileData.password}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
            </div>

            <div>
              <label
                htmlFor="dateOfBirth"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Date of Birth
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="dateOfBirth"
                  name="dateOfBirth"
                  value={profileData.dateOfBirth}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div>
              <label
                htmlFor="presentAddress"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Present Address
              </label>
              <input
                type="text"
                id="presentAddress"
                name="presentAddress"
                value={profileData.presentAddress}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
            </div>

            <div>
              <label
                htmlFor="permanentAddress"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Permanent Address
              </label>
              <input
                type="text"
                id="permanentAddress"
                name="permanentAddress"
                value={profileData.permanentAddress}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
            </div>

            <div>
              <label
                htmlFor="city"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={profileData.city}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
            </div>

            <div>
              <label
                htmlFor="postalCode"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Postal Code
              </label>
              <input
                type="text"
                id="postalCode"
                name="postalCode"
                value={profileData.postalCode}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
            </div>

            <div>
              <label
                htmlFor="country"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Country
              </label>
              <input
                type="text"
                id="country"
                name="country"
                value={profileData.country}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
            </div>
          </div>

          <div className="mt-8">
            <button
              type="submit"
              className="w-full md:w-auto md:float-right bg-gray-800 text-white py-3 px-6 rounded-lg font-medium cursor-pointer"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
