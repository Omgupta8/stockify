import { NavLink, Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="z-50 w-[18%] bg-[rgba(8,13,22,0.5)] shadow-[0_0px_30px_rgba(0,0,0,0.5),0_100rem_150rem_rgba(4,19,36,255)]   h-[100vh] flex flex-col min-h-screen ">
      <div className="ml-[1.75rem] mt-[1rem]">
        <Link to="/" className="font-bold text-4xl ">
          <div className="flex items-center ">
            <img
              src="../../public/images/favicon.png"
              alt=""
              width="55rem"
              className="mr-[0.1rem] "
            />
            <div className="mb-[0.25rem] pb-1 text-transparent bg-clip-text bg-gradient-to-br from-[#23ba5a] via-[#8BE78B] to-[#1DA74B] sriracha-regular">
              <h1>Stockify</h1>
            </div>
          </div>
        </Link>
      </div>
      <div>
        <ul className="ml-[2.75rem]  rounded-lg mt-[4rem] w-[60%] ">
          <li>
            <NavLink
              className="list-item py-1 px-1 mb-4  rounded-full"
              to="/"
              isActive={(match) => !!match}
              style={({ isActive }) => ({
                backgroundColor: isActive ? "white" : "",
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "black" : "white",
                // boxShadow: isActive
                //   ? "0 0 0 px rgba(0,0,0,0), 0 0 0 5px linear-gradient(45deg, #9BFF6F, #6B8E23)"
                //   : "",
                outlineColor: isActive ? "#008000" : "",
                outlineWidth: isActive ? "3px" : "",
                outlineStyle: isActive ? "solid" : "",
                fontSize: isActive ? "1.2rem" : "1.2rem",
              })}
            >
              {() => (
                <div className="w-[100%]  flex items-center">
                  <div className="bg-[rgba(8,13,22,1)] rounded-full mr-[1rem]">
                    <img
                      src="../../public/images/icons8-chart-96.png"
                      alt=""
                      style={{ width: "2.5rem", height: "2.5rem" }}
                      className="p-[0.4rem]"
                    />
                  </div>
                  Portfolio
                </div>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink
              className="list-item py-1 px-1 mb-4  rounded-full"
              to="/watchlist"
              isActive={(match) => !!match}
              style={({ isActive }) => ({
                backgroundColor: isActive ? "white" : "",
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "black" : "white",
                // boxShadow: isActive
                //   ? "0 0 0 px rgba(0,0,0,0), 0 0 0 5px linear-gradient(45deg, #9BFF6F, #6B8E23)"
                //   : "",
                outlineColor: isActive ? "#008000" : "",
                outlineWidth: isActive ? "3px" : "",
                outlineStyle: isActive ? "solid" : "",
                fontSize: isActive ? "1.2rem" : "1.2rem",
              })}
            >
              {() => (
                <div className="w-[100%]  flex items-center">
                  <div className="bg-[rgba(8,13,22,1)] rounded-full mr-[1rem]">
                    <img
                      src="../../public/images/icons8-eye-96.png"
                      alt=""
                      style={{ width: "2.5rem", height: "2.5rem" }}
                      className="p-[0.5rem]"
                    />
                  </div>
                  Watchlist
                </div>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink
              className="list-item py-1 px-1 mb-4   rounded-full"
              to="/holding"
              isActive={(match) => !!match}
              style={({ isActive }) => ({
                backgroundColor: isActive ? "white" : "",
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "black" : "white",
                // boxShadow: isActive
                //   ? "0 0 0 px rgba(0,0,0,0), 0 0 0 5px linear-gradient(45deg, #9BFF6F, #6B8E23)"
                //   : "",
                outlineColor: isActive ? "#008000" : "",
                outlineWidth: isActive ? "3px" : "",
                outlineStyle: isActive ? "solid" : "",
                fontSize: isActive ? "1.2rem" : "1.2rem",
              })}
            >
              {() => (
                <div className="w-[100%]  flex items-center">
                  <div className="bg-[rgba(8,13,22,1)] rounded-full mr-[1rem]">
                    <img
                      src="../../public/images/icons8-trade-96.png"
                      alt=""
                      style={{ width: "2.5rem", height: "2.5rem" }}
                      className="p-[0.45rem]"
                    />
                  </div>
                  Holding
                </div>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink
              className="list-item py-1 px-1 mb-4   rounded-full"
              to="/profile"
              isActive={(match) => !!match}
              style={({ isActive }) => ({
                backgroundColor: isActive ? "white" : "",
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "black" : "white",
                // boxShadow: isActive
                //   ? "0 0 0 px rgba(0,0,0,0), 0 0 0 5px linear-gradient(45deg, #9BFF6F, #6B8E23)"
                //   : "",
                outlineColor: isActive ? "#008000" : "",
                outlineWidth: isActive ? "3px" : "",
                outlineStyle: isActive ? "solid" : "",
                fontSize: isActive ? "1.2rem" : "1.2rem",
              })}
            >
              {() => (
                <div className="w-[100%]  flex items-center">
                  <div className="bg-[rgba(8,13,22,1)] rounded-full mr-[1rem]">
                    <img
                      src="../../public/images/icons8-person-100.png"
                      alt=""
                      style={{ width: "2.5rem", height: "2.5rem" }}
                      className="p-[0.35rem]"
                    />
                  </div>
                  Profile
                </div>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink
              className="list-item py-1 px-1 mb-4   rounded-full"
              to="/wallet"
              isActive={(match) => !!match}
              style={({ isActive }) => ({
                backgroundColor: isActive ? "white" : "",
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "black" : "white",
                // boxShadow: isActive
                //   ? "0 0 0 px rgba(0,0,0,0), 0 0 0 5px linear-gradient(45deg, #9BFF6F, #6B8E23)"
                //   : "",
                outlineColor: isActive ? "#008000" : "",
                outlineWidth: isActive ? "3px" : "",
                outlineStyle: isActive ? "solid" : "",
                fontSize: isActive ? "1.2rem" : "1.2rem",
              })}
            >
              {() => (
                <div className="w-[100%]  flex items-center">
                  <div className="bg-[rgba(8,13,22,1)] rounded-full mr-[1rem]">
                    <img
                      src="../../public/images/icons8-wallet-100.png"
                      alt="hello"
                      style={{ width: "2.5rem", height: "2.5rem" }}
                      className="p-[.4rem]"
                    />
                  </div>
                  Wallet
                </div>
              )}
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="mt-auto mb-[1rem] ml-[3rem]">
        <ul>
          <li className="list-item py-1 px-1 mb-3  text-[1.15rem] rounded-full">
            <Link to="/signup">
              <div className="w-[100%]  flex items-center">
                <div className="bg-[rgba(8,13,22,1)] rounded-full mr-[1rem]">
                  <img
                    src="../../public/images/icons8-add-user-96.png"
                    alt="hello"
                    style={{ width: "2.5rem", height: "2.5rem" }}
                    className="p-[.45rem]"
                  />
                </div>
                Sign Up
              </div>
            </Link>
          </li>
          <li className="list-item py-1 px-1 mb-4 text-[1.15rem] rounded-full">
            <Link to="/login">
              <div className="w-[100%]  flex items-center">
                <div className="bg-[rgba(8,13,22,1)] rounded-full mr-[1rem]">
                  <img
                    src="../../public/images/icons8-login-100.png"
                    alt="hello"
                    style={{ width: "2.5rem", height: "2.5rem" }}
                    className="p-[.35rem]"
                  />
                </div>
                Login
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
