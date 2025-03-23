"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  Navbar as MTNavbar,
  Collapse,
  Button,
  IconButton,
  Typography,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import {
  HomeIcon,
  CommandLineIcon,
  ClipboardDocumentCheckIcon,
  XMarkIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";

interface NavItemProps {
  children: React.ReactNode;
  onClick?: () => void;
}

function NavItem({ children, onClick }: NavItemProps) {
  return (
    <li>
      <Typography
        as="button"
        variant="paragraph"
        className="flex items-center gap-2 font-medium cursor-pointer"
        onClick={onClick}
      >
        {children}
      </Typography>
    </li>
  );
}

const NAV_MENU = [
  {
    name: "Home",
    icon: HomeIcon,
    href: "/",
    content: "Ini adalah halaman utama. Selamat datang!",
  },
  {
    name: "Publikasi",
    icon: ClipboardDocumentCheckIcon,
    href: "#publikasi",
    content: "Di sini Anda bisa melihat berbagai publikasi kami.",
    buttons: ["Artikel", "Berita", "Laporan"],
    links: ["/publikasi/artikel", "/publikasi/berita", "/publikasi/laporan"],
  },
  {
    name: "API",
    icon: CommandLineIcon,
    href: "#api",
    content: "Data API tersedia di bawah ini.",
    buttons: ["Data SDI", "Data Diskominfo Kota Serang", "Data 3", "Data 4"],
    links: ["/fetch-data/data_sdi", "/fetch-data/data_kominfo", "/api/data3", "/api/data4"],
  },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: "",
    content: "",
    buttons: [],
    links: [],
  });

  const router = useRouter();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) setOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolling(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuClick = (
    name: string,
    content: string,
    buttons: string[],
    links: string[]
  ) => {
    setModalContent({ title: name, content, buttons, links });
    setModalOpen(true);
  };

  return (
    <>
      <MTNavbar
        shadow={false}
        fullWidth
        blurred={false}
        color={isScrolling ? "white" : "transparent"}
        className={`fixed top-0 z-50 border-0 transition-all duration-300 ${
          isScrolling ? "backdrop-blur-md bg-white/70" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between">
          {/* 🔹 Logo + Nama SIKONDANG */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => router.push("/")}>
            <Image src="/logos/logo-srg.png" alt="Logo" width={100} height={100} />
          </div>

          {/* 🔹 Menu Navbar */}
          <ul
            className={`ml-10 hidden items-center gap-6 lg:flex ${
              isScrolling ? "text-black" : "text-white"
            }`}
          >
            {NAV_MENU.map(({ name, icon: Icon, content, buttons, links, href }) => (
              <NavItem
                key={name}
                onClick={() =>
                  name === "Home" ? router.push(href) : handleMenuClick(name, content, buttons, links)
                }
              >
                <Icon className="h-7 w-7" />
                <span>{name}</span>
              </NavItem>
            ))}
          </ul>

          {/* 🔹 Login Button */}
          <div className="hidden items-center gap-4 lg:flex">
            <a href="#">
              <Button color={isScrolling ? "gray" : "white"}>Login</Button>
            </a>
          </div>

          {/* 🔹 Menu Mobile */}
          <IconButton
            variant="text"
            color={isScrolling ? "gray" : "white"}
            onClick={() => setOpen((cur) => !cur)}
            className="ml-auto inline-block lg:hidden"
          >
            {open ? (
              <XMarkIcon strokeWidth={2} className="h-6 w-6" />
            ) : (
              <Bars3Icon strokeWidth={2} className="h-6 w-6" />
            )}
          </IconButton>
        </div>

        {/* 🔹 Menu Mobile (Dropdown) */}
        <Collapse open={open}>
          <div className="container mx-auto mt-4 rounded-lg bg-white px-6 py-5">
            <ul className="flex flex-col gap-4 text-black">
              {NAV_MENU.map(({ name, icon: Icon, content, buttons, links, href }) => (
                <NavItem
                  key={name}
                  onClick={() =>
                    name === "Home" ? router.push(href) : handleMenuClick(name, content, buttons, links)
                  }
                >
                  <Icon className="h-5 w-5" />
                  <span>{name}</span>
                </NavItem>
              ))}
            </ul>
            <div className="mt-6 flex items-center gap-4">
              <Button variant="text">Log in</Button>
            </div>
          </div>
        </Collapse>
      </MTNavbar>

      {/* 🔹 Modal */}
      <Dialog open={modalOpen} handler={() => setModalOpen(false)}>
        <DialogHeader>{modalContent.title}</DialogHeader>
        <DialogBody>
          <p>{modalContent.content}</p>
          <div className="mt-4 flex flex-col gap-2">
            {modalContent.buttons.map((btn, index) => (
              <a
                key={index}
                href={modalContent.links[index] || "#"}
                className="w-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button color="blue" className="w-full">
                  {btn}
                </Button>
              </a>
            ))}
          </div>
        </DialogBody>
        <DialogFooter>
          <Button color="red" onClick={() => setModalOpen(false)}>
            Tutup
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}

export default Navbar;
