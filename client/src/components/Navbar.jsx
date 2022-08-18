const Navbar = () => {
  return (
    <nav className="border-gray-200 px-2 sm:px-4 bg-purple-900 text-white py-2.5 rounded dark:bg-gray-900">
      <div className="container flex flex-wrap justify-center items-center mx-auto">
        <a href="https://flowbite.com/" className="flex items-center">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Visual-Dashboard
          </span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
