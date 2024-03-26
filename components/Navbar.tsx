import { Socials } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="fixed top-0 z-[40] w-full h-[100px] bg-transparent flex justify-between items-center px-10 md:px-20">
      <div className="flex flex-row items-center gap-3">
        <Image
          src="/reactor.jpg"
          alt="Logo"
          width={45}
          height={45}
          className="w-full h-full object-contain rounded-full"
        />
        <h1 className="text-white text-[25px] font-semibold">Capamir</h1>
      </div>
      <div className="flex flex-row mb-2 gap-5">
        {Socials.map((social) => (
          <Link href={social.link} key={social.name}>
            <Image src={social.src} alt={social.name} width={28} height={28} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
