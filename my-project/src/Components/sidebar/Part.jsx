import { Link } from "react-router-dom";
import { Initial_Parts } from "./Initial_Parts";

function Part({ title, Part_Childeren }) {
  return (
    <div className=" mb-4">
      <h1 className="font-bold text-gray-400 text-xs mb-3">{title}</h1>
      <ul className=" ml-3">
        {Part_Childeren.map((value) => {
          return (
            <Link className=" mb-1 block" key={value.label} to="/">
              <li className=" flex items-center">
                {value.icon}
                <span>{value.label}</span>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

export { Part };
