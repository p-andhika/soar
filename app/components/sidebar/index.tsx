import { NavLink } from "react-router";
import soarIcon from "./assets/soar-icon.svg";
import dashboardIcon from "./assets/dashboard-icon.svg";
import transactionIcon from "./assets/transaction-icon.svg";
import accountIcon from "./assets/account-icon.svg";
import investmentIcon from "./assets/investment-icon.svg";
import ccIcon from "./assets/cc-icon.svg";
import loanIcon from "./assets/loan-icon.svg";
import serviceIcon from "./assets/service-icon.svg";
import privilegeIcon from "./assets/privilege-icon.svg";
import settingIcon from "./assets/setting-icon.svg";

const menuItems = [
  { id: 1, icon: "home", label: "Dashboard", enabled: true, link: "/" },
  { id: 2, icon: "currency-dollar", label: "Transactions", enabled: false },
  { id: 3, icon: "user", label: "Accounts", enabled: false },
  { id: 4, icon: "chart-bar", label: "Investments", enabled: false },
  { id: 5, icon: "credit-card", label: "Credit Cards", enabled: false },
  { id: 6, icon: "cash", label: "Loans", enabled: false },
  { id: 7, icon: "cog", label: "Services", enabled: false },
  { id: 8, icon: "light-bulb", label: "My Privileges", enabled: false },
  {
    id: 9,
    icon: "adjustments",
    label: "Setting",
    enabled: true,
    link: "/setting",
  },
];

export function Sidebar() {
  return (
    <div className="hidden bg-white md:flex md:flex-col md:shadow-md md:h-[100vh]">
      <div className="flex items-center py-[33px] px-[38px] gap-[10px]">
        <img src={soarIcon} alt="soar" width={35} height={35} />
        <h1 className="text-[25px] font-extrabold">Soar Task</h1>
      </div>

      <nav className="flex-1">
        <ul className="space-y-4">
          {menuItems.map((item) => (
            <li key={item.id}>
              <NavLink
                to={item.link || "#"}
                className={({ isActive }) =>
                  `flex items-center px-[42px] py-3 rounded-lg relative ${
                    isActive && item.enabled
                      ? "font-semibold text-black"
                      : "text-gray-400 hover:bg-gray-100"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span className="mr-4">
                      {renderIcon(item.icon, isActive)}
                    </span>
                    <span className="text-[18px] font-medium">
                      {item.label}
                    </span>

                    {isActive && item.enabled && (
                      <span className="w-[6px] h-[60px] bg-black rounded-tr-2xl rounded-br-2xl absolute left-0" />
                    )}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

const renderIcon = (iconName: string, isActive: boolean) => {
  switch (iconName) {
    case "home":
      return (
        <img
          src={dashboardIcon}
          alt="dashboard"
          width={25}
          height={25}
          style={{
            filter: isActive ? "brightness(0)" : "brightness(1)",
          }}
        />
      );
    case "currency-dollar":
      return (
        <img src={transactionIcon} alt="dashboard" width={25} height={25} />
      );
    case "user":
      return <img src={accountIcon} alt="dashboard" width={25} height={25} />;
    case "chart-bar":
      return (
        <img src={investmentIcon} alt="dashboard" width={25} height={25} />
      );
    case "credit-card":
      return <img src={ccIcon} alt="dashboard" width={25} height={25} />;
    case "cash":
      return <img src={loanIcon} alt="dashboard" width={25} height={25} />;
    case "cog":
      return <img src={serviceIcon} alt="dashboard" width={25} height={25} />;
    case "light-bulb":
      return <img src={privilegeIcon} alt="dashboard" width={25} height={25} />;
    case "adjustments":
      return (
        <img
          src={settingIcon}
          alt="dashboard"
          width={25}
          height={25}
          style={{
            filter: isActive ? "brightness(0)" : "brightness(1)",
          }}
        />
      );
    default:
      return null;
  }
};
