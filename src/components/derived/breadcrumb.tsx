import { capitalizeFirstLetter } from "../../libs/helper";
import { Link } from "react-router-dom";

export default function Breadcrumb({ data }: { data: Array<string> }) {
  return data[0] === "" ? null : (
    <div className="flex gap-2 text-sm font-medium px-2 mb-8">
      <div key="dashbord" className="flex gap-2">
        <Link
          to="/"
          style={{
            color: data.length === 0 ? "rgb(29 78 216)" : "rgb(51 65 85)",
            pointerEvents: data.length > 0 ? "all" : "none",
          }}
        >
          Home
        </Link>
        {data.length > 0 && <div className="text-sm">/</div>}
      </div>
      {(data || []).map((i, idx) => (
        <div key={i} className="flex gap-2">
          <Link
            to={`/${data.slice(0, idx + 1).join("/")}`}
            style={{
              color:
                data.length - 1 === idx ? "rgb(29 78 216)" : "rgb(51 65 85)",
              pointerEvents: data.length - 1 !== idx ? "all" : "none",
            }}
          >
            {capitalizeFirstLetter(i)}
          </Link>
          {data.length - 1 !== idx && <div className="text-sm">/</div>}
        </div>
      ))}
    </div>
  );
}
