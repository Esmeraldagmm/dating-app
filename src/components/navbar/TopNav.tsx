import { Button, Navbar, NavbarBrand, NavbarContent } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import { CgCardHearts } from "react-icons/cg";
import NavLink from "./NavLink";

export default function TopNav() {
  return (
    <Navbar
      maxWidth="full"
      className="bg-gradient-to-r from-pink-400 via-red-400 to-pink-600"
      classNames={{
        item: [
          "text-xl",
          "text-white",
          "uppercase",
          "data-[activate=true]:text-yellow-200",
        ],
      }}
    >
      <NavbarBrand as={Link} href="/">
        <CgCardHearts size={40} className="text-gray-200" />
        <div className="font-extralight text-3xl flex">
          <span className="text-gray-200">LoveLetter</span>
        </div>
      </NavbarBrand>
      <NavbarContent justify="center" className="gap-3 font-thin">
        <NavLink href="/members" label="Matches" />
        <NavLink href="/lists" label="Lists" />
        <NavLink href="/messages" label="Messages" />
      </NavbarContent>
      <NavbarContent justify="end">
        <Button
          as={Link}
          href="/login"
          variant="bordered"
          className="text-white"
        >
          Login
        </Button>
        <Button
          as={Link}
          href="/register"
          variant="bordered"
          className="text-white"
        >
          Sign Up
        </Button>
      </NavbarContent>
    </Navbar>
  );
}
