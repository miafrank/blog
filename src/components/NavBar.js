import "../index.css";

const NavBar = ({ formSubmit, value, handleSearchKey }) => {
  return (
    <div className="nav-bar">
      <nav class="bg-hot-pink border-x-hot-pink opacity-95 bg-gradient bg-cover bg-no-repeat shadow-md shadow-royal-blue rounded-md">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="/"
                class="block py-2 px-3 text-white bg-royal-blue rounded md:bg-transparent md:text-hot-pink md:p-0 md:dark:text-blue-500 md:hover:text-hot-pink"
                aria-current="page"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/blogs"
                class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:text-royal-blue md:hover:text-hot-pink md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Blogs
              </a>
            </li>
            <li>
              <a
                href="/projects"
                class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:text-royal-blue md:hover:text-hot-pink md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="/connect"
                class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:text-royal-blue md:hover:text-hot-pink md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Connect
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
