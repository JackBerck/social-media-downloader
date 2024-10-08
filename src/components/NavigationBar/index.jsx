import React, { useState } from "react";
import NavLink from "./NavLink";
import HamburgerButton from "./HamburgerButton";

export default function NavigationBar() {
  // set kondisi awal menu adalah tertutup
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // fungsi untuk membuka dan menutup menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="section-padding-x fixed w-full top-0 left-0 py-4 z-[999]">
      <div className="flex flex-wrap bg-slate-200 border-4 border-dark-base max-w-screen-lg container items-center justify-between p-3">
        <a
          href="/"
          className="text-2xl md:text-3xl font-bold text-primary font-josefin"
        >
          SnapSave
        </a>
        <div className="flex lg:hidden">
          {/* kirim nilai toggleMenu dan isMenuOpen ke HamburgerButton agar bisa berjalan */}
          <HamburgerButton onClick={toggleMenu} isMenuOpen={isMenuOpen} />
        </div>
        {/* cek jika isMenuOpen bernilai false tampilkan hidden dan jika true tampilkan block */}
        <ul
          className={`toggle ${
            isMenuOpen ? "block" : "hidden"
          } w-full lg:w-auto lg:flex text-right text-bold mt-5 lg:mt-0 border-t-2 border-dark-base lg:border-none`}
        >
          <NavLink href="/youtube">YouTube</NavLink>
          <NavLink href="/facebook">Facebook</NavLink>
          <NavLink href="/instagram">Instagram</NavLink>
          <NavLink href="/twitter">Twitter</NavLink>
          <NavLink href="/tiktok">TikTok</NavLink>
          <NavLink href="/spotify">Spotify</NavLink>
        </ul>
      </div>
    </nav>
  );
}
