import { useEffect, useState } from "react";
import { BiMinus } from "react-icons/bi";

function Timer({ duration }) {
  const [time, setTime] = useState(duration);
  useEffect(() => {
    setTimeout(() => {
      setTime(time - 1000);
    }, 1000);
  }, [time]);
  const getFormattedTime = (milliseconds) => {
    let totalSeconds = parseInt(Math.floor(milliseconds / 1000));
    let totalMinutes = parseInt(Math.floor(totalSeconds / 60));
    let totalHours = parseInt(Math.floor(totalMinutes / 60));
    let days = parseInt(Math.floor(totalHours / 24));
    let seconds = parseInt(totalSeconds % 60);
    let miuntes = parseInt(totalMinutes % 60);
    let hours = parseInt(totalHours % 24);
    function isDigit(val) {
      // if (String(+val).charAt(0) == val) {
      //   return "0" + val;
      // }
      // else{
      //   return val
      // }
      return String(+val).charAt(0) == val ? "0" + val : val;
    }
    return (
      <table className=" text-left inline-block">
        <thead>
          <tr>
            <th className="text-[12px] font-medium">Days</th>
            <th className="text-[12px] font-medium">Hours</th>
            <th className="text-[12px] font-medium">Miuntes</th>
            <th className="text-[12px] font-medium">Seconds</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-[32px] font-[inter] font-bold">
              {isDigit(days)}
              <span className="text-[#E07575] text-2xl mx-1">:</span>
            </td>
            <td className="text-[32px] font-[inter] font-bold">
              {isDigit(hours)}
              <span className="text-[#E07575] text-2xl mx-1">:</span>
            </td>
            <td className="text-[32px] font-[inter] font-bold">
              {isDigit(miuntes)}
              <span className="text-[#E07575] text-2xl mx-1">:</span>
            </td>
            <td className="text-[32px] font-[inter] font-bold">
              {isDigit(seconds)}
            </td>
          </tr>
        </tbody>
      </table>
    );
  };
  return <div>{getFormattedTime(time)}</div>;
}
export default Timer;
