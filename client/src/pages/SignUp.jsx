import { useState } from "react";
import "./Login.css"; // Import the custom CSS file
import { Link } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(name, email, password);
  };
  return (
    <div className="login-container bg-[#06101c] ">
      <div className="bg-[rgba(8,13,22,0.3)] w-[28%] p-[1rem] pr-[1.5rem] rounded-lg outline outline-[1px] outline-[#303030] shadow-[0_8px_20px_rgba(0,0,0,0.5),0_0_150px_rgba(4,19,36,255)]">
        {/* Logo or Header */}
        <div className="">
          <Link to="/" className="font-bold ">
            <div className="flex items-center ">
              <img
                src="../../public/images/favicon.png"
                alt=""
                width="34rem"
                className="object-cover"
              />
              <div className=" pb-0.5 text-transparent bg-clip-text bg-gradient-to-br from-[#23ba5a] via-[#8BE78B] to-[#1DA74B]">
                <h1 className="text-[1.4rem]">Stockify</h1>
              </div>
            </div>
          </Link>
        </div>
        <div className="ml-2">
          <h1 className="mt-[.75rem] mb-[1.25rem] font-semibold  text-4xl">
            Sign Up
          </h1>
          <form onSubmit={submitHandler}>
            <div className="mb-[1rem]">
              <label htmlFor="name" className="text-[#676e72]">
                Full Name
              </label>
              <input
                type="name"
                id="name"
                name="name"
                placeholder="Jon Snow"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`input-field outline outline-[1px] bg-[#05070a] rounded-lg outline-[#2B2B30] hover:outline-[#58585E] h-[2.75rem] placeholder-[#31384a]`}
                required
              />
            </div>

            <div className="mb-[1rem]">
              <label htmlFor="email" className="text-[#676e72]">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`input-field  outline outline-[1px] bg-[#05070a] rounded-lg outline-[#2B2B30] hover:outline-[#58585E] placeholder-[#31384a] h-[2.75rem]`}
                required
              />
            </div>

            <div className="mb-[1rem]">
              <label htmlFor="password" className="text-[#676e72]">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`input-field  outline outline-[1px] bg-[#05070a] rounded-lg outline-[#2B2B30] hover:outline-[#58585E] placeholder-[#31384a] h-[2.75rem]`}
                required
              />
            </div>

            {/* <div className="form-group">
              <label>
                <input type="checkbox" name="remember" /> Remember me
              </label>
            </div> */}

            <button type="submit"  className="submit-btn rounded-lg mt-[1rem]">
              Sign Up
            </button>
          </form>
        </div>

        {/* Form for email and password */}

        <div className="divider">or</div>

        {/* Social Media Buttons */}
        <div className="social-buttons">
          <button
            className="google-btn rounded-xl h-[3.5rem]"
            onClick={() => alert("Sign in with Google")}
          >
            <div className="flex items-center justify-center ">
              <img
                src="../../public/images/google-removebg-preview.png"
                alt="img"
                width="40rem"
              />
              Sign in with Google
            </div>
          </button>
          {/* <button
            className="facebook-btn rounded-xl h-[3.5rem]"
            onClick={() => alert("Sign in with Facebook")}
          >
            Sign Up with Facebook
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
