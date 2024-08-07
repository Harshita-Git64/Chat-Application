import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex flex-col justify-center items-center content-center mt-40">
      <img src="https://seosherpa.com/wp-content/uploads/2020/12/404-error-page-header-transparent.png"></img>
      <div className="text-gray-600 font-semibold text-xl">
        This page isn't available!! Try searching for something else.
      </div>
     
    </div>
  );
};

export default Error;
