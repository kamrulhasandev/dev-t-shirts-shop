import { FaShippingFast, FaHeadset, FaThumbsUp } from "react-icons/fa";

const Service = () => {
  return (
    <div className="py-20 px-5 md:px-0">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid md:grid-cols-3 gap-5">
          <div className="flex flex-col items-center gap-2 bg-slate-100 py-5 hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:duration-200 cursor-pointer">
            <FaShippingFast size={50} />
            <h4 className="text-xl">FREE SHIPPING</h4>
            <p className="text-[#6E7092]">On All Orders</p>
          </div>
          <div className="flex flex-col items-center gap-2 bg-slate-100 py-5 hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:duration-200 cursor-pointer">
            <FaHeadset size={50} />
            <h4 className="text-xl">24/7 SUPPORT</h4>
            <p className="text-[#6E7092]">Get Help When You Need</p>
          </div>
          <div className="flex flex-col items-center gap-2 bg-slate-100 py-5 hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:duration-200 cursor-pointer">
            <FaThumbsUp size={50} />
            <h4 className="text-xl">100% RETURN</h4>
            <p className="text-[#6E7092]">Within 30 Days</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
