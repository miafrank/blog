import React from "react";
import "../index.css";

const SearchBar = ({
  formSubmit,
  value,
  handleSearchKey,
  clearSearch,
}) => {
  <form onSubmit={formSubmit}>
    <input
      type='text'
      id='search-navbar'
      class='block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
      placeholder='Search By Category'
      value={value}
      onChange={handleSearchKey}
    />
    <button
      data-collapse-toggle='navbar-search'
      type='button'
      class='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
      aria-controls='navbar-search'
      aria-expanded='false'
    >
      <span class='sr-only'>Open main menu</span>
      <svg
        class='w-5 h-5'
        aria-hidden='true'
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 17 14'
      >
        <path
          stroke='currentColor'
          stroke-linecap='round'
          stroke-linejoin='round'
          stroke-width='2'
          d='M1 1h15M1 7h15M1 13h15'
        />
      </svg>
    </button>
  </form>;
};

export default SearchBar;
