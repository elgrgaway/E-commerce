import { Link } from "react-router-dom";
import History from "../common/History";
function Error() {
  return (
    <>
      <History page="404 Error" />
      <div className=" flex flex-col items-center my-36">
        <h2 className="text-[110px] font-medium  max-xl:text-7xl ">
          404 Not Found
        </h2>
        <span className=" mb-20">
          Your visited page not found. You may go home page.
        </span>
        <Link className=" text-white py-4 px-12 bg-[#DB4444]" to="/">
          Back to home page
        </Link>
      </div>
    </>
  );
}
export default Error;
