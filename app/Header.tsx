import Link from "next/link";
import Logo from "./Logo";
import Search from "./Search";

export default function Header() {
  return (
    <header className="sticky top-0 bg-white z-10">
      <div className="relative">
        <div className="flex items-center py-5 sm:justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 lg:max-w-[1400px]">
          <Logo />
          <Link
            href="/host/homes"
            className="hover:bg-gray-100 p-3 rounded-full font-bold hidden lg:inline-flex duration-500"
          >
            Airbnb your home
          </Link>
        </div>
        <Search />
      </div>
    </header>
  );
}
