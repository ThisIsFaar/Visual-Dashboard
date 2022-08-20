const Navbar = () => {
  return (
    <nav className="border-gray-200 px-2 sm:px-4 bg-purple-900 text-white py-2.5 dark:bg-gray-900">
      <div className="container flex flex-wrap justify-center items-center mx-auto">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite Logo"
        />
        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
          Visual-Dashboard
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
