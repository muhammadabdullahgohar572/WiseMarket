import { useEffect, useState } from "react";


export const Login = () => {
  const [data, setdata] = useState({
    name: "",
    password: "",
    Email: "",
    Address: "",
  });

  const methodpost = async () => {
    if (data.name && data.password && data.Email && data.Address) {
      await fetch("http://localhost:5000/logindata", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((dataa) => {
          console.log(dataa);
          setdata();
          alert("success ok")
        })
        .catch((error) => {
          console.error("Error:", error);
        });
      console.log(data);
    } 
    else {
      console.log(data);
    }
  };
  useEffect(() => {
    methodpost();
  }, []);

  // const [products, setProduct] = useState([]);
  // const [productData, setProductData] = useState({
  //   title: "",
  //   body: "",
  // });

  // const getProducts = () => {
  //   fetch("http://localhost:4000/getProducts")
  //     .then((res) => res.json())
  //     .then((data) => setProduct(data));
  // };

  // useEffect(() => {
  //   getProducts();
  // }, []);

  // const handleSubmit = () => {
  //   fetch("http://localhost:4000/addProduct", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(productData),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);

  //       getProducts();
  //     });
  // };

  return (
    <>
      <form>
        <div className="shadow-2xl  bg-slate-50  text-center sm:mt-[10%] p-6">
          <div className="">
            <div>
              <span className="sm:mr-[4%] text-lg font-semibold">
                User Name
              </span>
              <input
                type="text"
                placeholder="Enter  User name"
                required
                className="p-[2%] sm:mt-0 mt-[5%]"
                onChange={(e) => setdata({ ...data, name: e.target.value })}
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
                required
                className="p-[2%] sm:mt-0 mt-[5%]"
                onChange={(e) => setdata({ ...data, password: e.target.value })}
              />

            </div>
          </div>

          <br />
          <div className="sm:inline hidden">
            <div>
              <span className="mr-[4%] text-lg font-semibold">Email</span>
              <input
                type="email"
                placeholder="Enter  Email"
                required
                className="p-[2%]"
                onChange={(e) => setdata({ ...data, Email: e.target.value })}
              />
            </div>
          </div>

          <div className="inline sm:hidden">
            <div>
              <span className="mr-[4%] text-lg font-semibold">Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter  Email"
                required
                onChange={(e) => setdata({ ...data, Email: e.target.value })}
                className="p-[2%] sm:mt-0 mt-[5%]"
              />
            </div>
          </div>

          <br />
          <div className="sm:inline hidden">
            <div>
              <span className="mr-[4%] text-lg font-semibold">Address</span>
              <input
                type="text"
                placeholder="Enter Address"
                required
                className="p-[2%] sm:mt-0 mt-[5%]"
                onChange={(e) => setdata({ ...data, Address: e.target.value })}
              />
            </div>
          </div>

          <div className="inline sm:hidden">
            <div>
              <span className="mr-[4%] text-lg font-semibold">Address</span>
              <br />
              <input
                type="text"
                placeholder="Enter A Address"
                required
                className="p-[2%] sm:mt-0 mt-[5%]"
                onChange={(e) => setdata({ ...data, Address: e.target.value })}
              />
            </div>
          </div>

          <button
            onClick={methodpost}
            className="sm:mt-[10%] mt-[10%] bg-[#1BAB6E] text-white p-3 transition-all hover:p-4 hover:rounded-xl hover:text-2xl duration-1000 "
          >
            submit
          </button>
        </div>
      </form>
    </>
  );
};
