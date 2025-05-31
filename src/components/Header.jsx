import { Link, NavLink } from "react-router";

export default function Header() {
    const navLinks = [
        { name: "Home", path: "/home" },
        { name: "About", path: "/about" },
        { name: "Experience", path: "/experience" },
        { name: "Projects", path: "/projects" },
        { name: "Contact", path: "/contact" },
    ];
    return (
        <header className=" w-full bg-purple-300 fixed">
            <div className="max-w-7xl flex gap-5 items-center justify-between px-2 py-3 sm:px-10 sm:py-6 mx-auto">
                <Link to='/home' className=" text-xl md:text-3xl uppercase font-bold text-purple-800 tracking-wide">Portfolio</Link>
                <nav>
                    <ul className="flex items-center text-sm md:text-lg font-medium gap-4 sm:gap-10 ">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <NavLink to={link.path} className={({ isActive }) => isActive ? 'text-purple-800 font-bold' : 'hover:text-purple-600 transition-colors'}>{link.name}</NavLink>
                            </li>
                        )
                        )}
                    </ul>
                </nav>
            </div>
        </header>
    )
}
