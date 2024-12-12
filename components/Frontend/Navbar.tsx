'use client';
import React, { useState } from 'react';
import { Book, Home, InfoIcon, Mail, Menu, UserPlus, X } from 'lucide-react';
import { Session } from "next-auth";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { getInitials } from "@/utils/generateInitials";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Link from 'next/link';
import { Button } from '../ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import Image from 'next/image';
import { PersonIcon } from '@radix-ui/react-icons';

const Navbar = ({ session }: { session: Session | null }) => {
  const user = session?.user;
  const initials = getInitials(user?.name);
  const router = useRouter();
  async function handleLogout() {
    await signOut();
    router.push("/login");
  }
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const navItems = [
    { 
      href: "/", 
      label: "Home", 
      icon: Home 
    },
    { 
      href: "/about", 
      label: "How It Works", 
      icon: InfoIcon 
    },
    { 
      href: "/join", 
      label: "Join", 
      icon: UserPlus 
    },
    { 
      href: "/blog", 
      label: "Blog", 
      icon: Book 
    },
    { 
      href: "/contact", 
      label: "Contact", 
      icon: Mail 
    }
  ];
  return (
    <div className=" bg-white">
      <div className="relative  z-20 px-4  font-sans  max-w-7xl mx-auto shadow-md ">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center bg-white rounded-sm">
            <Image src={"/logo.png"} height={80} width={110} alt='logo' className='object-fit rounded-lg h-16'/>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
          <nav className="bg-white  ">
      <ul className="flex items-center justify-center py-2 px-4 space-x-2">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link 
              href={item.href} 
              className="
                group 
                flex 
                items-center 
                gap-2 
                px-4 
                py-2 
                text-gray-600 
                text-lg 
                font-semibold 
               
                transition 
                duration-300 
                ease-in-out
                hover:bg-sky-50
                hover:text-sky-600
                focus:outline-none
                focus:ring-2
                focus:ring-sky-300
              "
            >
              <item.icon 
                className="
                  text-slate-600 
                  group-hover:text-sky-500 
                  transition 
                  duration-300
                " 
                size={20} 
              />
              <span>{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
          </div>

          {/* Menu Button for Mobile */}
          <button onClick={toggleMenu} className="md:hidden text-sky-500">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <nav className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden">
              <ul className="flex flex-col space-y-2 font-bold p-4">
                <Link href="/" className="text-slate-800 hover:text-sky-500 transition duration-300 ease-in-out">
                  HOME
                </Link>
                <Link href="/about" className="text-slate-800 hover:text-sky-500 transition duration-300 ease-in-out">
                  ABOUT
                </Link>
                <Link href="/services" className="text-slate-800 hover:text-sky-500 transition duration-300 ease-in-out">
                  SERVICES
                </Link>
                <Link href="/blog" className="text-slate-800 hover:text-sky-500 transition duration-300 ease-in-out">
                  BLOG
                </Link>
                <Link href="/contact" className="text-slate-800 hover:text-sky-500 transition duration-300 ease-in-out">
                  CONTACT
                </Link>
              </ul>
            </nav>
          )}

          {/* Add Service Button (Always visible on medium and above) */}
          <nav className="flex items-center gap-4">
            {session && session.user && user?.email ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Avatar className="cursor-pointer">
                    {user.image ? (
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                    ) : (
                      <AvatarFallback>{initials}</AvatarFallback>
                    )}
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel className="text-center">
                    {user.name}
                  </DropdownMenuLabel>
                  <DropdownMenuLabel className="text-center font-light text-sm ">
                    {user.email}
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Link href="/dashboard">Dashboard</Link>
                  </DropdownMenuItem>

                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => handleLogout()}>
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button className="bg-sky-500 hover:bg-sky-800">
                <Link href="/login" className='flex text-md'>
                  <PersonIcon className="mr-2 h-4 w-4" /> Login
                </Link>
              </Button>
            )}
      
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
