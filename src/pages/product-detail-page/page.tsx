import { useLoaderData } from "react-router-dom";
import { Discount, Fruit } from "../../types/product.type";
import LazyImg from "../../components/base/image";
import { useMobileScreen } from "../../hooks/useMobileScreen";
import { useState } from "react";

export default function ProductDetailPage() {
  const { data } = useLoaderData() as { data: Fruit };
  const [isFav, setFav] = useState(false);
  const newPrice = countNewPrice(data.discount, data.price);
  const isSmallScreen = useMobileScreen(640);
  return (
    <div>
      <div className="flex flex-col pb-12 sm:flex-row gap-6">
        <div className="rounded-lg sm:w-1/2 w-full h-60 sm:h-96 flex-shrink-0 overflow-hidden">
          <LazyImg
            className="h-96 w-full object-cover"
            src={data.image}
            alt={data.name}
          />
        </div>
        <div className="sm:w-1/2 w-full">
          <div className="flex justify-between lg:flex-row flex-col">
            <div className="flex gap-2 items-center">
              <h1 className="text-slate-700 font-semibold text-4xl">
                {data.name}
              </h1>
              {isFav ? (
                <button
                  onClick={() => setFav(false)}
                  type="button"
                  title="Remove from favourites"
                  className="w-fit px-3 text-center inline-flex items-center text-sm font-semibold border border-transparent text-red-700 hover:text-red-600 disabled:opacity-50 disabled:pointer-events-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path
                      d="M6.979 3.074a6 6 0 0 1 4.988 1.425l.037 .033l.034 -.03a6 6 0 0 1 4.733 -1.44l.246 .036a6 6 0 0 1 3.364 10.008l-.18 .185l-.048 .041l-7.45 7.379a1 1 0 0 1 -1.313 .082l-.094 -.082l-7.493 -7.422a6 6 0 0 1 3.176 -10.215z"
                      stroke-width="0"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <span className="sr-only">Remove from favourites</span>
                </button>
              ) : (
                <button
                  onClick={() => setFav(true)}
                  type="button"
                  title="Add to favourites"
                  className="w-fit px-3 text-center inline-flex items-center text-sm font-semibold border border-transparent text-red-700 hover:text-red-600 disabled:opacity-50 disabled:pointer-events-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"></path>
                  </svg>
                  <span className="sr-only">Add to favourites</span>
                </button>
              )}
            </div>
            <div className="flex lg:items-end mt-6 justify-end flex-col">
              {data.discount ? (
                <p className="text-slate-600 text-sm">
                  Discount:
                  <span className="ml-2 px-2 py-1 text-sm bg-orange-800 text-white rounded-md">
                    {`${data.discount?.type == "price" ? "Rp." : ""}${
                      data.discount?.amount
                    }${data.discount?.type == "percent" ? "%" : ""}`}
                  </span>
                </p>
              ) : null}
              {data.discount ? (
                <div className="flex gap-2 items-baseline mt-2">
                  <span className="text-orange-700 font-mono mr-2 text-sm line-through">{`Rp.${data.price}`}</span>
                  <span className="text-slate-600 font-mono font-semibold text-2xl">{`Rp.${newPrice}`}</span>
                </div>
              ) : (
                <span className="text-slate-600 font-mono font-semibold text-lg">{`Rp.${data.price}`}</span>
              )}
            </div>
          </div>
          <br />
          <h3 className="text-slate-600 mb-2 text-lg">Details</h3>
          <p className="text-slate-600 text-sm">{data.description}</p>
          <br className="h-full" />
        </div>
      </div>
      {isSmallScreen ? (
        <div className="bg-slate-800 w-screen fixed left-0 bottom-0">
          <div className="max-w-screen-lg w-full flex mx-auto">
            <button
              type="button"
              className="w-1/2 flex-shrink-0 px-3 text-center inline-flex justify-center items-center text-sm font-semibold border border-transparent text-white bg-blue-800 hover:text-blue-200 hover:bg-white/20 h-12 disabled:opacity-50 disabled:pointer-events-none"
            >
              Add to cart
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                <path d="M17 17h-11v-14h-2"></path>
                <path d="M6 5l14 1l-1 7h-13"></path>
              </svg>
            </button>
            <button
              type="button"
              className="w-1/2 inline-flex px-3 text-center justify-center items-center text-sm font-semibold border border-transparent bg-emerald-700 text-white hover:text-emerald-200 hover:bg-emerald-900 h-12 disabled:opacity-50 disabled:pointer-events-none"
            >
              Buy now
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M6.331 8h11.339a2 2 0 0 1 1.977 2.304l-1.255 8.152a3 3 0 0 1 -2.966 2.544h-6.852a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304z"></path>
                <path d="M9 11v-5a3 3 0 0 1 6 0v5"></path>
              </svg>
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

function countNewPrice(data: Discount | null, price: number): number {
  if (!data) return 0;
  const min =
    data.type === "percent"
      ? Math.ceil((data.amount / 100) * price)
      : data.amount;
  return price - min;
}
