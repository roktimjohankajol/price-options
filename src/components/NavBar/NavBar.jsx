import { useState } from "react";
import Link from "../Link/Link";
import { HiOutlineMenuAlt1, HiOutlineX } from 'react-icons/hi';
const NavBar = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        { id: 'home', path: '/', name: 'Home' },
        { id: 'about', path: '/about', name: 'About' },
        { id: 'services', path: '/services', name: 'Services' },
        { id: 'contact', path: '/contact', name: 'Contact' },
        { id: 'not-found', path: '*', name: 'Not Found' },
      ];
      
    return (
        <div>
            <button onClick={()=> setOpen(!open)} className="md:hidden text-2xl">
                {
                    open === true ? <HiOutlineX></HiOutlineX> 
                    : <HiOutlineMenuAlt1></HiOutlineMenuAlt1>
                }
                
            </button>
            <ul className={`md:flex md:static rounded-md my-5 p-5 absolute bg-red-100 duration-1000 z-50 justify-center ${open ? 'top-24' : '-top-60'}`}>
                {
                    routes.map( route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </div>
    );
};

export default NavBar;