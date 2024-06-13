import Select from "react-select";
const customStyles = {
  control: (base, state) => ({
    ...base,
    background: "black",
    borderColor: state.isFocused ? "white" : "black",
    color: "white",
    boxShadow: state.isFocused ? null : null,
    "&:hover": {
      borderColor: "white",
    },
  }),
  singleValue: (base) => ({
    ...base,
    color: "white",
  }),
  dropdownIndicator: (base) => ({
    ...base,
    color: "white",
    padding: "0 8px",
    "&:hover": {
      color: "white",
    },
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
  menu: (base) => ({
    ...base,
    background: "black",
    color: "white",
  }),
  option: (base, state) => ({
    ...base,
    background: state.isSelected ? "gray" : "black",
    "&:hover": {
      background: "gray",
    },
    color: "white",
  }),
};

function TopHeader() {
  const options = [
    { value: "english", label: "English" },
    { value: "arbic", label: "Arabic" },
  ];
  return (
    <div className=" text-sm h-16 bg-black text-[#fafafa] flex items-center px-32 py-3  max-sm:p-2 max-sm:text-[10px]">
      <p className="  flex-1 text-center ">
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        <a href="#" className="font-semibold">
          ShopNow
        </a>
      </p>
      <Select
        options={options}
        defaultValue={options[0]}
        styles={customStyles}
      />
    </div>
  );
}

export default TopHeader;
