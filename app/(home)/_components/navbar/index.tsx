import Logo from "./logo";
import Actions from "./actions";
import Search from "./search";

const Navbar = () => {
  return (
    <nav className="bg-[#252731] h-20 flex items-center justify-between w-full shadow-sm px-2">
      <Logo />
      <Search />
      <Actions />
    </nav>
  );
};

export default Navbar;
