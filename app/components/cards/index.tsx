import { BarChart } from "./components/bar";
import { PieChart } from "./components/pie";

import ChipWhiteIcon from "./assets/chip-white-icon.png";
import ChipBlackIcon from "./assets/chip-black-icon.png";
import MasterCardIcon from "./assets/master-card-icon.png";
import CardIcon from "./assets/card-icon.svg";
import DollarIcon from "./assets/dollar-icon.svg";
import PaypalIcon from "./assets/paypal-icon.svg";
import ProfilePicture1 from "./assets/profile-picture-1.png";
import ProfilePicture2 from "./assets/profile-picture-2.png";
import ProfilePicture3 from "./assets/profile-picture-3.png";
import SendIcon from "./assets/send-icon.svg";
import { LineChart } from "./components/line";

const data = [
  {
    name: "Livia Bator",
    position: "CEO",
    image: ProfilePicture1,
  },
  {
    name: "Randy Press",
    position: "Director",
    image: ProfilePicture2,
  },
  {
    name: "Workman",
    position: "Designer",
    image: ProfilePicture3,
  },
];

export function Cards() {
  return (
    <>
      <div className="flex flex-col gap-5 md:flex-row md:gap-8">
        <div className="flex flex-col gap-5 md:w-[725px]">
          <div className="flex flex-row justify-between w-full">
            <h1 className="font-semibold md:text-[22px]">My Cards</h1>
            <button className="font-semibold text-sm md:text-[17px]">
              See All
            </button>
          </div>

          <div className="flex overflow-x-auto gap-5 md:gap-7">
            <div className="flex-none w-[265px] md:w-[350px]">
              <div className="flex flex-col px-5 py-4 bg-[#5B5A6F] rounded-[15px]">
                <div className="flex flex-row justify-between items-center">
                  <div>
                    <p className="text-[11px] text-white md:text-xs">Balance</p>
                    <p className="text-white md:text-[18px]">$5,756</p>
                  </div>

                  <img
                    src={ChipWhiteIcon}
                    alt="chip"
                    width={29}
                    height={29}
                    className="md:w-[34px]"
                  />
                </div>

                <div className="flex flex-row mt-6 mb-4 gap-14 md:mt-[33px] md:mb-[24px]">
                  <div>
                    <p className="text-[10px] text-white opacity-70 uppercase md:text-xs">
                      Card Holder
                    </p>
                    <p className="text-[13px] text-white md:text-[15px]">
                      Edi Kusuma
                    </p>
                  </div>

                  <div>
                    <p className="text-[10px] text-white opacity-70 uppercase md:text-xs">
                      Valid Thru
                    </p>
                    <p className="text-[13px] text-white md:text-[15px]">
                      12/22
                    </p>
                  </div>
                </div>

                <hr className="ml-[-20px] mr-[-20px] text-[#DFEAF2]" />

                <div className="flex flex-row justify-between pt-4 md:pt-5 md:pb-1">
                  <p className="text-white md:text-[18px]">
                    3778 **** **** 1234
                  </p>
                  <img
                    src={MasterCardIcon}
                    className="w-[27px] h-[18px] md:w-[40px] md:h-[26px]"
                  />
                </div>
              </div>
            </div>

            <div className="flex-none w-[265px] md:w-[350px]">
              <div className="flex flex-col px-5 py-4 bg-white rounded-[15px] border-1 border-[#DFEAF2]">
                <div className="flex flex-row justify-between items-center">
                  <div>
                    <p className="text-[11px] text-[#718EBF] md:text-xs">
                      Balance
                    </p>
                    <p className="text-[#343C6A] md:text-[18px]">$5,756</p>
                  </div>

                  <img
                    src={ChipBlackIcon}
                    alt="chip"
                    width={29}
                    height={29}
                    className="md:w-[34px]"
                  />
                </div>

                <div className="flex flex-row mt-6 mb-4 gap-14 md:mt-[33px] md:mb-[24px]">
                  <div>
                    <p className="text-[10px] text-[#718EBF] opacity-70 uppercase md:text-xs">
                      Card Holder
                    </p>
                    <p className="text-[13px] text-[#343C6A] md:text-[15px]">
                      Edi Kusuma
                    </p>
                  </div>

                  <div>
                    <p className="text-[10px] text-[#718EBF] opacity-70 uppercase md:text-xs">
                      Valid Thru
                    </p>
                    <p className="text-[13px] text-[#343C6A] md:text-[15px]">
                      12/22
                    </p>
                  </div>
                </div>

                <hr className="ml-[-20px] mr-[-20px] text-[#DFEAF2]" />

                <div className="flex flex-row justify-between pt-4 md:pt-5 md:pb-1">
                  <p className="text-[#343C6A] md:text-[18px]">
                    3778 **** **** 1234
                  </p>
                  <img
                    src={MasterCardIcon}
                    className="w-[27px] h-[18px] md:w-[40px] md:h-[26px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:flex md:flex-col md:gap-5 md:w-full">
          <h1 className="font-semibold md:text-[22px]">Recent Transaction</h1>

          <div className="flex flex-col gap-3 py-5 px-[18px] rounded-[15px] md:bg-white md:p-[25px] md:rounded-[25px]">
            <div className="flex flex-row items-center gap-[15px]">
              <div className="w-[50px] h-[50px] bg-[#FFF5D9] flex items-center justify-center rounded-full">
                <img src={CardIcon} width={25} height={25} />
              </div>

              <div className="flex flex-col">
                <p className="text-[#232323] text-sm font-medium">
                  Deposit from my
                </p>
                <p className="text-[#718EBF] text-xs">28 January 2021</p>
              </div>

              <span className="font-medium text-[#FF4B4A] text-[11px] ml-auto">
                -$850
              </span>
            </div>

            <div className="flex flex-row items-center gap-[15px]">
              <div className="w-[50px] h-[50px] bg-[#E7EDFF] flex items-center justify-center rounded-full">
                <img src={PaypalIcon} width={25} height={25} />
              </div>

              <div className="flex flex-col">
                <p className="text-[#232323] text-sm font-medium">
                  Deposit Paypal
                </p>
                <p className="text-[#718EBF] text-xs">25 January 2021</p>
              </div>

              <span className="font-medium text-[#41D4A8] text-[11px] ml-auto">
                -$2500
              </span>
            </div>

            <div className="flex flex-row items-center gap-[15px]">
              <div className="w-[50px] h-[50px] bg-[#DCFAF8] flex items-center justify-center rounded-full">
                <img src={DollarIcon} width={25} height={25} />
              </div>

              <div className="flex flex-col">
                <p className="text-[#232323] text-sm font-medium">
                  Jemi Wilson
                </p>
                <p className="text-[#718EBF] text-xs">21 January 2021</p>
              </div>

              <span className="font-medium text-[#41D4A8] text-[11px] ml-auto">
                -$5400
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5 md:flex-row md:gap-8">
        <div className="md:flex md:flex-col md:gap-5 md:w-[725px]">
          <h1 className="font-semibold md:text-[22px]">Weekly Activity</h1>

          <div className="md:bg-white rounded-[25px] md:py-7 md:px-[30px] md:h-full md:w-[725px]">
            <BarChart />
          </div>
        </div>

        <div className="md:flex md:flex-col md:gap-5 md:w-full">
          <h1 className="font-semibold md:text-[22px]">Expense Statistics</h1>

          <div className="md:bg-white rounded-[25px] md:py-7 md:px-[30px] md:w-full md:h-[388px] md:flex md:justify-center">
            <PieChart />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5 md:flex-row md:gap-8">
        <div className="flex flex-col gap-5 md:w-[445px]">
          <h1 className="font-semibold md:text-[22px]">Quick Transfer</h1>

          <div className="md:bg-white rounded-[25px] md:py-7 md:px-[30px] flex flex-col gap-5 md:gap-7">
            <div className="flex flex-row gap-5 items-center">
              {data.map((item) => {
                return (
                  <div className="flex flex-col items-center">
                    <img
                      src={item.image}
                      alt={item.position}
                      className="size-[50px] md:size-[70px] rounded-full mb-3"
                    />

                    <p className="text-xs text-[#232323] md:text-[16px]">
                      {item.name}
                    </p>
                    <p className="text-xs text-[#718EBF] md:text-[15px]">
                      {item.position}
                    </p>
                  </div>
                );
              })}

              <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300 transition-shadow ml-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>

            <div className="flex flex-row items-center gap-6">
              <span className="text-xs text-[#718EBF] md:text-[16px] w-[40%]">
                Write Amount
              </span>

              <div className="relative w-full">
                <input
                  type="text"
                  className="bg-[#EDF1F7] py-3 px-4 rounded-[50px] text-[#718EBF] text-xs md:text-[16px]"
                  placeholder="525.50"
                />

                <button className="flex flex-row items-center absolute bg-[#232323] text-white font-medium text-xs top-0 bottom-0 rounded-[50px] py-3 px-5 cursor-pointer right-0 gap-2 md:text-[15px]">
                  Send{" "}
                  <img
                    src={SendIcon}
                    alt="send"
                    className="w-[16px] h-[14px]"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 md:w-full">
          <h1 className="font-semibold md:text-[22px]">Balance History</h1>

          <div className="md:bg-white rounded-[25px] md:py-7 md:px-[30px] flex flex-col gap-5 md:gap-7">
            <LineChart />
          </div>
        </div>
      </div>
    </>
  );
}
