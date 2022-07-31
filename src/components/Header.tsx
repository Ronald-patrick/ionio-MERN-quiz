import {
  BellIcon,
  LoginIcon,
  ChevronDownIcon,
  MenuAlt2Icon,
} from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const statex: any = useSelector((state) => state);
  return (
    <div className="h-[70px] bg-white shadow-md flex justify-between items-center px-4">
      <div className="flex justify-center items-center">
        <Link to="/" className="font-bold text-xl">Ionio Quiz</Link>
        <img src="logo.png" alt="Logo" className="ml-10" />
        {statex.isAuthenticated && (
          <div className="flex justify-center items-center gap-5">
            <MenuAlt2Icon className="w-8 h-8 mx-4" />
            <div className="relative">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block p-2 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
                placeholder="Search"
                required
              />
            </div>
          </div>
        )}
      </div>

      {statex.isAuthenticated ? (
        <div className="flex justify-center items-center">
          <BellIcon className="w-6 h-6" />
          <h1 className="font-bold text-lg mx-4">{statex.user.name}</h1>
          <ChevronDownIcon className="w-6 h-6" />
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <LoginIcon className="w-6 h-6" />
          <Link to="/login" className="text-coolgray2 text-md ml-2">
            Login/Register
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
