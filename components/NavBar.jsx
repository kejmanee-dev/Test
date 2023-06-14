"use client";
import Image from "next/image";
import Link from "next/link";
import { title } from "process";
import React, { useState } from "react";

function NavBar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div className="container px-5 py-4">
      <nav className="flex justify-between space-x-5">
        <div>
          <div className="flex justify-start">
            <Link href="/">
              <Image src="/logo.svg" width={160} height={80} alt="LOGO"></Image>
            </Link>
          </div>
        </div>
        <div className="flex justify-end">
          {[
            ["หน้าหลัก", "/"],
            ["กฎหมาย/ระเบียบ", "/"],
            ["มาตรการดูแลผู้สูงอายุ", "/"],
            ["ข้อมูลเฉพาะจังหวัด", "/"],
            ["สถิติ", "/"],
          ].map(([title, url]) => (
            <a
              href={url}
              className="px-5 py-4 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"
            >
              {title}
            </a>
          ))}
        </div>
      </nav>
    </div>

    /* <div className="nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto  w-full flex items-center px-5">
            <ul className="justify-between flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
              <li className="hover:text-gray-500">
                <Link href="#" onClick={() => setNavBar(!navbar)}>
                  หน้าหลัก
                </Link>
              </li>
              <li className="hover:text-gray-500">
                <Link href="#" onClick={() => setNavBar(!navbar)}>
                  กฎหมาย/ระเบียบ
                </Link>
              </li>
              <li className="hover:text-gray-500">
                <Link href="#" onClick={() => setNavBar(!navbar)}>
                  มาตรการดูแลผู้สูงอายุ
                </Link>
              </li>
              <li className="hover:text-gray-500">
                <Link href="#" onClick={() => setNavBar(!navbar)}>
                  ข้อมูลเฉพาะจังหวัด
                </Link>
              </li>
              <li className="hover:text-gray-500">
                <Link href="#" onClick={() => setNavBar(!navbar)}>
                  สถิติ
                </Link>
              </li>
            </ul>
          </div> */
    // <div>
    //   <nav className="w-full bg-white fixed top-0 left-10 right-0 z-10">
    //     <div className="justify-between px-4 mx-auto lg:max-w-7x1 md:items-center md:flex md:px-8">
    //       <div>
    //         <div className="flex items-center jusyify-between py-3 md:py-5 md:block">
    //           {/* LOGO */}
    //           <Link href="/">
    //             <Image src="/logo.svg" width={100} height={70} alt="LOGO" />
    //           </Link>
    //           {/* HAMBURGER BUTTON FOR MOBILE */}
    //           <div className="md:hidden">
    //             <button
    //               className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
    //               onClick={() => setNavBar(!navbar)}
    //             >
    //               {navbar ? (
    //                 <Image
    //                   src="/close.svg"
    //                   width={30}
    //                   height={30}
    //                   alt="logo"
    //                 ></Image>
    //               ) : (
    //                 <Image
    //                   src="/hamburger.svg"
    //                   width={30}
    //                   height={30}
    //                   alt="logo"
    //                   className="focus:border-none active:border-none"
    //                 ></Image>
    //               )}
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div
    //       className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
    //         navbar ? "p-12 md:p-0 block" : "hidden"
    //       }`}
    //     >
    //       <ul className="h-screen md:h-auto items-center justify-center md:flex">
    //         <li className="pb-6 text-x1 text-black py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:bg-gray-400 border-gray-400 md:hover:text-gray-200 md:hover:bg-transparent">
    //           <Link href="#" onClick={() => setNavBar(!navbar)}>
    //             หน้าหลัก
    //           </Link>
    //         </li>
    //         <li className="pb-6 text-x1 text-black py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:bg-gray-400 border-gray-400 md:hover:text-gray-200 md:hover:bg-transparent">
    //           <Link href="#" onClick={() => setNavBar(!navbar)}>
    //             กฎหมาย/ระเบียบ
    //           </Link>
    //         </li>
    //         <li className="pb-6 text-x1 text-black py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:bg-gray-400 border-gray-400 md:hover:text-gray-200 md:hover:bg-transparent">
    //           <Link href="#" onClick={() => setNavBar(!navbar)}>
    //             มาตรการดูแลผู้สูงอายุ
    //           </Link>
    //         </li>
    //         <li className="pb-6 text-x1 text-black py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:bg-gray-400 border-gray-400 md:hover:text-gray-200 md:hover:bg-transparent">
    //           <Link href="#" onClick={() => setNavBar(!navbar)}>
    //             ข้อมูลเฉพาะจังหวัด
    //           </Link>
    //         </li>
    //         <li className="pb-6 text-x1 text-black py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:bg-gray-400 border-gray-400 md:hover:text-gray-200 md:hover:bg-transparent">
    //           <Link href="#" onClick={() => setNavBar(!navbar)}>
    //             สถิติ
    //           </Link>
    //         </li>
    //       </ul>
    //     </div>
    //   </nav>
    // </div>
  );
}
export default NavBar;
