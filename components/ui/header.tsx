// "use client";

// import React, { useState } from 'react';
// import Link from 'next/link';
// import  Button  from '@/components/ui/button';
// import { Menu, X } from 'lucide-react';


// function Header() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <header className='fixed w-full bg-black shadow-md z-50'>
//       <div className='max-w-7xl mx-auto flex items-center justify-between p-4'>
//         <div className='text-2xl font-bold'>
//           <Link href='/'>Osmium</Link>
//         </div>

//         <nav className='hidden md:flex space-x-6'>
//           <Link href='/about' className='hover:text-gray-600'>About</Link>
//           <Link href='/services' className='hover:text-gray-600'>Services</Link>
//           <Link href='/contact' className='hover:text-gray-600'>Contact</Link>
//         </nav>

//         <div className='md:hidden'>
//           <button onClick={toggleMenu}>
//             {menuOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
//           </button>
//         </div>

//         <div className='hidden md:block'>
//           <Button>Get Started</Button>
//         </div>
//       </div>

//       {menuOpen && (
//         <nav className='md:hidden bg-black shadow-md p-4'>
//           <Link href='/about' className='block py-2'>About</Link>
//           <Link href='/services' className='block py-2'>Services</Link>
//           <Link href='/contact' className='block py-2'>Contact</Link>
//         </nav>
//       )}
//     </header>
//   );
// }

// export default Header;
