import { Menu } from "lucide-react";
import Logo from "../assets/logo-text.png";
const Nav = () => {
    return (
        <nav className="bg-white border-b border-gray-200 py-4 sticky top-0 z-50">
            
            <div className="flex justify-between container mx-auto items-center">

                <Menu className="md:hidden w-6 h-6 text-slate-800" />

                <img src={Logo} alt="Logo" className="w-30 h-auto object-contain" />

                <ul className="hidden md:flex gap-8 items-center font-bold text-slate-600">
                    <li className="text-pink-500">Home</li>
                    <li>Technologies</li>
                    <li>Projects</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>

                <div className="flex gap-4">
                    <button className="font-bold text-slate-800">
                        Sign in
                    </button>
                    <button className="bg-linear-to-r from-orange-600 to-purple-600 flex items-center justify-center text-white font-bold px-4 py-2 rounded-full">
                        Sign up
                    </button>
                </div>
            </div>

                        
        </nav>
    );
};

export default Nav;