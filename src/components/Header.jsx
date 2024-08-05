import { Link } from "react-router-dom";

function HeaderSection() {
  return (
    <div>
      <header className="flex justify-between items-center h-[55px] bg-sky-600 p-3">
        <div className="font-bold text-2xl">My App</div>
        <nav>
          <ul className="flex">
            <li className="text-white pr-4 font-[500]">
              <Link to="/"> Home </Link>
            </li>
            <li className="text-white pr-4 font-[500]">
              <Link to="/service"> Service </Link>
            </li>
            <li className="text-white pr-4 font-[500]">
              <Link to="/about"> About </Link>
            </li>
            <li className="text-white font-[500]">
              <Link to="/contact"> Contact </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default HeaderSection;
