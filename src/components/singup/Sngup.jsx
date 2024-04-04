import { useEffect, useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Footter } from "../home/Footter";

export const Sngup = () => {
  const [usercred, setUserCred] = useState({
    name: "",
    password: "",
  });

  const [user, setuser] = useState({});

  const login = async () => {
    try {
      const userData = await localStorage.getItem("user");
      const userboj = JSON.parse(userData);
      if (userboj) {
        setuser(userboj);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    login();
  }, []);

  const logOut = async () => {
    try {
      localStorage.removeItem("user");
      setuser({});
      console.log("abdullah");
    } catch (error) {
      console.log(error);
    }
  };

  const sing = async () => {
    try {
      if (usercred.name !== "" && usercred.password !== "") {
        console.warn(usercred);

        const response = await fetch("http://localhost:5000/sigup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(usercred),
        });
        const Data = await response.json();

        if (Data === "user not found") {
          toast.error("User not found", {
            position: "top-center",
          });
        } else {
          console.log("Signup success");
          toast.success("Signup success", {
            position: "top-center",
          });

          localStorage.setItem("user", JSON.stringify(Data));
          setuser(Data);

          if (usercred.name !== "" && usercred.password !== "") {
            const Decode = await fetch(`http://localhost:5000/user/${Data}`);
            const Decordsok = await Decode.json();

            if (Decordsok) {
              console.log(Decordsok);

              setuser(Decordsok);
            }
          }
        }
      } else {
        console.log("Please fill in correct details");
        toast.error("Please fill in correct details", {
          position: "top-center",
          theme: "dark",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {!user._id ? (
        <div className=" bg-slate-50  text-center sm:mt-[10%] p-6">
          <div className="">
            <div>
              <span className="mr-[4%] text-lg font-semibold">username</span>
              <input
                type="text"
                placeholder="Enter  User name"
                required
                className="p-[2%] sm:mt-0 mt-[5%]"
                onChange={(e) =>
                  setUserCred({ ...usercred, name: e.target.value })
                }
              />
            </div>
          </div>

          <br />
          <div className="">
            <div>
              <span className="mr-[4%] text-lg font-semibold">Password</span>
              <input
                type="password"
                placeholder="Enter  password"
                onChange={(e) =>
                  setUserCred({ ...usercred, password: e.target.value })
                }
                required
                className="p-[2%] sm:mt-0 mt-[5%]"
              />
            </div>
          </div>

          <br />

          <button
            onClick={sing}
            className="sm:mt-[10%] mt-[10%] bg-[#1BAB6E] text-white p-3 transition-all hover:p-4 hover:rounded-xl hover:text-2xl duration-1000 "
          >
            submit
          </button>
        </div>
      ) : (
        <>
          <h1>{user.Email}</h1>
          <div className="container mx-auto p-4">
            <header className="bg-blue-500 text-white p-4 mb-4">
              <h1 className="text-2xl font-semibold">Welcome to My Page</h1>
            </header>

            <div className="bg-white p-8 rounded-md shadow-md">
              <p className="text-gray-700 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
                perspiciatis, unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium.
              </p>

              <p className="text-gray-700 mb-4">
                In hac habitasse platea dictumst. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>

              <p className="text-gray-700">
                Ut enim ad minima veniam, quis nostrum exercitationem ullam
                corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                consequatur?
              </p>
            </div>

            <button className="bg-red-400 rounded-lg p-4" onClick={logOut}>
              log out
            </button>
          </div>
        </>
      )}
      <ToastContainer /> <Footter />
    </>
  );
};
