import { HiArrowDown } from "react-icons/hi";
import { HiArrowUp } from "react-icons/hi";
function Profit_Cirterion({ title, price, profit }) {
  return (
    <div className="flex-grow p-6 shadow">
      <div className=" flex flex-col items-start">
        <h1 className="text-xl font-semibold mb-3">{title}</h1>
        <div className=" flex flex-col">
          <div className=" flex mb-3 items-center justify-between gap-2 flex-wrap">
            <span className=" font-bold text-2xl">{price}</span>
            <div className=" flex items-center flex-wrap">
              <span>{profit}</span>
              <HiArrowDown className=" ml-1 text-red-600" />
            </div>
          </div>
          <p className=" text-gray-400 text-sm">compared to last month</p>
        </div>
      </div>
    </div>
  );
}

export { Profit_Cirterion };
