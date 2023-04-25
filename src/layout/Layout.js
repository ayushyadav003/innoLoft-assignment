import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  AccountBalanceOutlined,
  BookmarkBorderOutlined,
  ViewModuleOutlined,
} from "@mui/icons-material";

function Layout({ children }) {
  const matches = useMediaQuery("(min-width:600px)");

  const options = [
    { name: "Main", icon: <AccountBalanceOutlined />, route: "/" },
    { name: "Product", icon: <BookmarkBorderOutlined />, route: "/product" },
    {
      name: "Edit Product",
      icon: <ViewModuleOutlined />,
      route: "/edit-product",
    },
  ];

  return (
    <div className="bg-[#f5f5fb] flex">
      {!matches ? (
        <div>
          <div className="fixed top-0 w-screen bg-[#fff] p-4">
            <img
              src="https://img.innoloft.com/logo.svg"
              width="100"
              hright="100"
              alt="logo"
            />
          </div>
          <div className="flex fixed bg-[#fff] bottom-0 w-screen">
            {options.map((option, i) => (
              <div
                key={i}
                style={{
                  color:
                    window.location.pathname === option.route
                      ? "#5465FF"
                      : "#000",
                }}
                className=" text-center w-[33%] cursor-pointer"
              >
                <a
                  key={i}
                  href={option.route}
                  className={`font-bold flex gap-2 grid py-2`}
                >
                  <span>{option.icon}</span>
                  <span className="text-xs font-medium">{option.name}</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="bg-[#fefefe] w-[15%] fixed left-0 h-screen ">
          <div className={`grid gap-5 px-[24px] py-[100px]`}>
            <div className="absolute top-[5%] left-[4%]">
              <img
                src="https://img.innoloft.com/logo.svg"
                width="100"
                hright="100"
                alt="logo"
              />
            </div>
            {options.map((option, i) => (
              <a
                key={i}
                href={option.route}
                className={`font-bold flex gap-2 py-[10px]`}
              >
                <span
                  style={{
                    color:
                      window.location.pathname === option.route
                        ? "#5465FF"
                        : "#000",
                  }}
                  className={`text-[#393943]`}
                >
                  {option.icon} {option.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      )}
      <div style={{ margin: !matches ? "12% 0 15% 0" : "0 0 0 15%" }}>
        {children}
      </div>
    </div>
  );
}

export default Layout;
