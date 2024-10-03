import { useState} from 'react';
import { Menu, X } from "lucide-react";

function NavBar(){
    const [isOpen, setIsOpen] = useState(false)
    
    const toggleNav = () => {
        setIsOpen(!isOpen);
    };
    

    return (
        <nav>
            <div className="flex items-center justify-between p-4 px-2 sm:px-6 lg:px-8 flex-wrap">
                {/* Logo and site name */}
                <div className="flex items-center">
                    <img src="/penguinLogoPicture.png" alt="Penguin Logo" className="h-16 w-16"/>
                    <span className="ml-3 text-black-500 font-bold text-xl">Franks Site</span>
                </div>

                {/* Desktop menu */}
                <div className="hidden sm:flex sm:items-center sm:justify-end space-x-4">
                    <a href="#" className="p-2">About</a>
                    <a href="#" className="p-2">Skills</a>
                    <a href="#" className="p-2">Experience</a>
                    <a href="#" className="p-2">Contact</a>
                    <a href="#" className="p-2">Resume</a>
                </div>
                <div className='sm:hidden'>
                    <button onClick={toggleNav}>{isOpen ? <X/> : <Menu/>}</button>
                </div>
                {isOpen && (
                    <div className='small:hidden flex flex-col items-center basis-full'>
                        <a href="#" className="p-2">About</a>
                        <a href="#" className="p-2">Skills</a>
                        <a href="#" className="p-2">Experience</a>
                        <a href="#" className="p-2">Contact</a>
                        <a href="#" className="p-2">Resume</a>
                    </div>
                )}


            </div>

        </nav>
    );
}

export default NavBar;
