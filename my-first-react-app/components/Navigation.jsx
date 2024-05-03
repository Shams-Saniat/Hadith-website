import React from 'react';

function Navigation() {
  return (
    <nav className="bg-gray-800 text-white px-4 py-2 flex justify-between items-center">
      <a href="#" className="text-lg font-medium">Hadiths</a>
      <ul className="flex space-x-4">
        <li><a href="#" className="hover:text-gray-200">Books</a></li>
        <li><a href="#" className="hover:text-gray-200">Narrators</a></li>
        <li><a href="#" className="hover:text-gray-200">Collections</a></li>
      </ul>
    </nav>
  );
}

export default Navigation;
