import { useState, useEffect, useRef } from 'react';

function NavBar(){
    const [isOpen, setIsOpen] = useState(false); 
    const menuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const closeMenu = () => setIsOpen(false);

    return (
        <nav>
            <div className="flex items-center justify-between p-4 px-2 sm:px-6 lg:px-8">
                {/* Logo and site name */}
                <div className="flex items-center">
                    <img src="/penguinLogoPicture.png" alt="Penguin Logo" className="h-16 w-16"/>
                    <span className="ml-3 text-black-500 font-bold text-xl">Franks Site</span>
                </div>

                {/* Mobile menu button */}
                <div className="sm:hidden flex items-center">
                    <button
                        type="button"
                        className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        aria-controls="mobile-menu"
                        aria-expanded={isOpen}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className={`block h-6 w-6 ${isOpen ? 'hidden' : 'block'}`}
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                        <svg
                            className={`hidden h-6 w-6 ${isOpen ? 'block' : 'hidden'}`}
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Desktop menu */}
                <div className="hidden sm:flex sm:items-center sm:justify-end space-x-4">
                    <a href="#" className="p-2">About</a>
                    <a href="#" className="p-2">Skills</a>
                    <a href="#" className="p-2">Experience</a>
                    <a href="#" className="p-2">Contact</a>
                    <a href="#" className="p-2">Resume</a>
                </div>
            </div>

            {/* Mobile menu */}
            <div ref={menuRef} className={`sm:hidden ${isOpen ? 'block' : 'hidden'}`} id="mobile-menu">
                <div className="space-y-1 px-2 pb-3 pt-2">
                    <a href="#" className="block rounded-md bg-black px-3 py-2 text-base font-medium text-white" aria-current="page" onClick={closeMenu}>About</a>
                    <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-black hover:bg-black hover:text-white" onClick={closeMenu}>Skills</a>
                    <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-black hover:bg-black hover:text-white" onClick={closeMenu}>Experience</a>
                    <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-black hover:bg-black hover:text-white" onClick={closeMenu}>Contact</a>
                    <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-black hover:bg-black hover:text-white" onClick={closeMenu}>Resume</a>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
