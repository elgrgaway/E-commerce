import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
function LoadingProducts({ length, width }) {
  return (
    <div
      className={`mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-[${width}] m-auto`}
    >
      {Array.from({ length: length }).map(() => (
        <>
          <div className="card">
            <div className="mb-4 relative flex items-center justify-center bg-gray-200 rounded">
              <Skeleton width={300} height={200} />
            </div>
            <div>
              <div className="title h-6 -300 mb-1">
                <Skeleton />
              </div>
              <div className="price h-4  mb-1">
                <Skeleton />
              </div>
              <div className="flex items-center gap-2">
                <span className="flex items-center gap-2">
                  <div className="star-icon  w-4 h-4"></div>
                  <div className="ratingsAverage  w-8 h-4">
                    <Skeleton width={50} />
                  </div>
                </span>
                <span className="ratingsQuantity  w-12 h-4">
                  <Skeleton width={50} />
                </span>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
}
export default LoadingProducts;
