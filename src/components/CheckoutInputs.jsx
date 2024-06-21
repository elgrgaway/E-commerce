import { useState } from "react";

function CheckoutInputs() {
  const [ischecked, setIsChecked] = useState(true);
  const checkHandler = () => {
    setIsChecked((perv) => !perv);
  };
  return (
    <div className="flex flex-col flex-1">
      <label className="text-[var(--text-gray)]" htmlFor="first-name">
        First name <span className="text-red-500">*</span>
      </label>
      <input
        className="bg-[var(--bg-gray)] w-full p-2 rounded mb-8 mt-2"
        type="text"
        id="first-name"
        required
      />
      <label className="text-[var(--text-gray)]" htmlFor="last-name">
        Last name <span className="text-red-500">*</span>
      </label>
      <input
        className="bg-[var(--bg-gray)] w-full p-2 rounded mb-8 mt-2"
        type="text"
        id="last-name"
        required
      />
      <label className="text-[var(--text-gray)]" htmlFor="street-address">
        Street Address <span className="text-red-500">*</span>
      </label>
      <input
        className="bg-[var(--bg-gray)] w-full p-2 rounded mb-8 mt-2"
        type="text"
        id="street-address"
        required
      />
      <label className="text-[var(--text-gray)]" htmlFor="apartment">
        Apartment, floor, etc. (optional)
      </label>
      <input
        className="bg-[var(--bg-gray)] w-full p-2 rounded mb-8 mt-2"
        type="text"
        id="apartment"
      />
      <label className="text-[var(--text-gray)]" htmlFor="town">
        Town/City <span className="text-red-500">*</span>
      </label>
      <input
        className="bg-[var(--bg-gray)] w-full p-2 rounded mb-8 mt-2"
        type="text"
        id="town"
        required
      />
      <label className="text-[var(--text-gray)]" htmlFor="phone-number">
        Phone Number <span className="text-red-500">*</span>
      </label>
      <input
        className="bg-[var(--bg-gray)] w-full p-2 rounded mb-8 mt-2"
        type="tel"
        id="phone-number"
        required
      />
      <label className="text-[var(--text-gray)]" htmlFor="email">
        Email Address <span className="text-red-500">*</span>
      </label>
      <input
        className="bg-[var(--bg-gray)] w-full p-2 rounded mb-8 mt-2"
        type="email"
        id="email"
        required
      />
      {/* <div className="flex gap-4"> */}
      <label
        htmlFor="checkbox"
        className="flex items-center gap-4 "
        onClick={checkHandler}
      >
        <span
          className={`${
            ischecked ? "bg-[var(--red-color)] rotate-[360deg] " : ""
          }w-6 h-6 rounded text-center content-center text-white text-lg border-solid border-2 border-[var(--red-color)] transition-all cursor-pointer`}
        >
          &#10004;{" "}
        </span>
        {/* <input type="checkbox" id="checkbox" className="hidden" /> */}
        Save this information for faster check-out next time
      </label>
      {/* </div> */}
    </div>
  );
}
export default CheckoutInputs;
