import React from "react";

function Navbar() {
  return (
    <header className="flex justify-between py-6">
      <h1 className="text-lg font-bold">Saad Elkarrak</h1>
      <nav className="flex gap-6">
        <a href="#" className="hover:underline">
          About
        </a>
        <a href="#" className="hover:underline">
          My work
        </a>
        <a href="#" className="hover:underline">
          Projects
        </a>
        <a href="#" className="hover:underline">
          Contacts
        </a>
      </nav>
      <button className="hover:underline">French</button>
    </header>
  );
}

export default Navbar;
