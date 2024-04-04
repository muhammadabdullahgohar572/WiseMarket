import Logo from "../../assets/images/1704456252-footer_logo_image.png";
export const Footter = () => {
  return (
    <>
      <div className=" bg-black h-[250%]  text-white mt-[10%] ">
        <div className="sm:grid sm:grid-cols-3 sm:pb-[5%] sm:ml-[0%]   ml-[10%] sm:pl-[3%]  sm:pr-[3%] ">
          <div className="mt-[10%]">
            <img
              src={Logo}
              alt=""
              className="text-white w-[70%] h-[10%]"
              srcset=""
            />

            <h1 className="mt-[10%]">WiseMarket PK</h1>

            <div className="flex mt-[10%]">
              <i class="fa-solid fa-location-dot text-white "></i>

              <h1 className="text-white ml-[5%]">40-L Johar Town Lahore</h1>
            </div>

            <div className="flex mt-[5%]">
              <i class="fa-solid fa-phone"></i>

              <h1 className="text-white ml-[5%]">03133038410</h1>
            </div>

            <div className="flex mt-[5%]">
              <i class="fa-regular fa-message"></i>
              <h1 className="text-white ml-[5%]">
                muhammadabdullah572@gmail.com
              </h1>
            </div>

            <div className="flex mt-[5%]">
              <h1 className="text-white ">Stay connected</h1>
            </div>

            <div className="flex mt-[5%]">
              <i class="fa-brands fa-facebook   cursor-pointer"></i>
              <i class="fa-brands fa-square-instagram ml-[5%]  cursor-pointer h-[100%]"></i>
              <i class="fa-brands fa-square-twitter ml-[5%] cursor-pointer h-[100%]"></i>
              <i class="fa-brands fa-linkedin ml-[5%]  cursor-pointer h-[100%]"></i>
            </div>
            <div className="grid sm:grid-cols-2">
              <div>
                <div className="flex mt-[5%]">
                  <h1 className="text-white text-2xl font-semibold ">
                    My Account
                  </h1>
                </div>
                <div className="mt-[10%]">
                  <span className="cursor-pointer hover:text-zinc-400">
                    Sign In
                  </span>
                  <br />
                  <span className="cursor-pointer hover:text-zinc-400">
                    view chat
                  </span>
                  <br />
                  <span className="cursor-pointer hover:text-zinc-400">
                    My Wishlist
                  </span>
                  <br />
                  <span className="cursor-pointer hover:text-zinc-400">
                    Help
                  </span>
                  <br />
                </div>
              </div>

              <div>
                <button className="bg-green-500 w-[60%] h-[30%] sm:w-[120%] rounded-lg sm:h-[20%]">
                  <i class="fa-solid fa-bag-shopping"></i> Become a Vendor
                </button>
                <br />
                <span>
                  Reach millions of customers nationwide <br />
                  through wisemarket. A leading smart devices
                  <br />
                  platform in Pakistan
                  <br />
                </span>
              </div>
            </div>
          </div>

          <div className="text-white mt-[10%] sm:ml-[50%]">
            <h1 className="text-white text-2xl font-semibold">Quick Links</h1>
            <div className="mt-[10%] ">
              <span className="cursor-pointer hover:text-zinc-400">
                About Us
              </span>
              <br />
              <span className="cursor-pointer hover:text-zinc-400">FAQ's</span>
              <br />
              <span className="cursor-pointer hover:text-zinc-400">
                Contact Us
              </span>
              <br />
              <span className="cursor-pointer hover:text-zinc-400">Blogs</span>
              <br />
            </div>
          </div>

          <div className="text-white mt-[10%] sm:ml-[50%]">
            <h1 className="text-white text-2xl font-semibold">Services</h1>
            <div className="mt-[10%]">
              <span className="cursor-pointer hover:text-zinc-400">
                Return Policy
              </span>
              <br />
              <span className="cursor-pointer hover:text-zinc-400">
                Privacy Policy
              </span>
              <br />
              <span className="cursor-pointer hover:text-zinc-400">
                Refund-&-Shipping
              </span>
              <br />
              <span className="cursor-pointer hover:text-zinc-400">
                Warranty
              </span>
              <br />
            </div>
          </div>
        </div>

       
        <div className="bg-white ">
          <hr />
        </div>
         
         <div className="flex justify-between ml-[3%] mr-[3%]  mt-[5%]">
            <span className="text-white ">Copyright © 2023  WiseMarket. All Rights Reserved.</span>
         <span className="text-white "> We are using safe payments:</span>
         </div>

      </div>
    </>
  );
};
