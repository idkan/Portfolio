import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { FiHome, FiUser, FiFileText, FiBriefcase, FiBook, FiMessageSquare, FiGrid, FiX, FiMoon, FiSun } from "react-icons/fi";

const Navbar = () => {

    const { systemTheme, theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [navMenuOpen, setNavMenuOpen] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const renderThemeChanger = () => {

        if (!mounted) return null;

        const currentTheme = theme === "system" ? systemTheme : theme;

        if (currentTheme === "light") {
            return (
                <FiMoon className="text-xl cursor-pointer text-sm text-title mr-4 hover:text-primary-alt duration-300 dark:text-title-dark dark:hover:text-primary md:m-0" onClick={() => setTheme("dark")} />
            )
        } else {
            return (
                <FiSun className="text-xl cursor-pointer text-sm text-title mr-4 hover:text-primary-alt duration-300 dark:text-title-dark dark:hover:text-primary md:m-0" onClick={() => setTheme("light")} />
            )
        }
    }

    const toggleNavMenu = () => {
        setNavMenuOpen(!navMenuOpen);
    }

    useEffect(function mount() {
        const sections = window.document.querySelectorAll("section[id]");

        function scrollActive() {
            const scrollY = window.scrollY;

            sections.forEach(section => {
                const sectionHeight = section.offsetHeight;
                const sectionTop = section.offsetTop - 50;
                let sectionId = section.getAttribute("id");

                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    window.document.querySelector(`a[href="#${sectionId}"]`).classList.add("text-primary");
                } else {
                    window.document.querySelector(`a[href="#${sectionId}"]`).classList.remove("text-primary");
                }
            });
        }

        function scrollHeader() {
            const nav = window.document.getElementById("header");
            if (window.scrollY >= 80) {
                nav.classList.add("shadow-[0_-1px_4px_rgba(0,0,0,0.15)]");
            } else {
                nav.classList.remove("shadow-[0_-1px_4px_rgba(0,0,0,0.15)]");
            }
        }

        window.addEventListener("scroll", scrollActive);
        window.addEventListener("scroll", scrollHeader);
    });


    return (
        <header className="header dark:bg-body-dark md:top-0 md:bottom-[initial] md:py-0 md:px-4 lg:p-0" id="header">
            <nav className="nav max-w-5xl h-12 flex justify-between items-center container xs:mx-4 md:mx-auto md:h-[4.5rem] md:gap-x-4 ">
                <a href="#" className="nav__logo text-title font-medium hover:text-primary dark:text-title-dark dark:hover:text-primary">Abraham </a>
                <div id="nav-menu" className={`nav__menu fixed ${navMenuOpen ? "bottom-0" : "-bottom-full"} left-0 w-full bg-body pt-8 px-6 pb-12 shadow-[0_-1px_4px_rgba(0,0,0,0.15)] rounded-t-3xl rounded-b-sm duration-300 dark:bg-body-dark xs:px-1 xs:pb-16 md:static md:w-auto md:shadow-none md:rounded-none md:transition-none md:py-0 md:top-0 md:bottom-[initial] md:ml-auto`}>
                    <ul className="nav__list grid grid-cols-3 gap-8 xs:gap-x-0 md:flex md:gap-x-8">
                        <li className="nav__item" onClick={toggleNavMenu}><a href="#home" className="nav__link flex flex-col items-center text-tiny text-title font-medium hover:text-primary dark:text-title-dark dark:hover:text-primary"><FiHome className="text-xl md:hidden" />Home</a></li>
                        <li className="nav__item" onClick={toggleNavMenu}><a href="#about" className="nav__link flex flex-col items-center text-tiny text-title font-medium hover:text-primary dark:text-title-dark dark:hover:text-primary"><FiUser className="text-xl md:hidden" />About</a></li>
                        <li className="nav__item" onClick={toggleNavMenu}><a href="#skills" className="nav__link flex flex-col items-center text-tiny text-title font-medium hover:text-primary dark:text-title-dark dark:hover:text-primary"><FiFileText className="text-xl md:hidden" />Skills</a></li>
                        <li className="nav__item" onClick={toggleNavMenu}><a href="#portfolio" className="nav__link flex flex-col items-center text-tiny text-title font-medium hover:text-primary dark:text-title-dark dark:hover:text-primary"><FiBriefcase className="text-xl md:hidden" />Projects</a></li>
                        <li className="nav__item" onClick={toggleNavMenu}><a href="#blog" className="nav__link flex flex-col items-center text-tiny text-title font-medium hover:text-primary dark:text-title-dark dark:hover:text-primary"><FiBook className="text-xl md:hidden" />Blog</a></li>
                        <li className="nav__item" onClick={toggleNavMenu}><a href="#contact" className="nav__link flex flex-col items-center text-tiny text-title font-medium hover:text-primary dark:text-title-dark dark:hover:text-primary"><FiMessageSquare className="text-xl md:hidden" />Contact</a></li>
                    </ul>
                    <FiX id="nav-close" className="nav__close absolute right-5 bottom-2 text-2xl cursor-pointer text-primary hover:text-primary-alt md:hidden" onClick={toggleNavMenu} />
                </div>
                <div className="nav__btns flex items-center">
                    {renderThemeChanger()}
                    <div id="nav-toggle" className="nav__toggle text-title font-medium text-lg cursor-pointer hover:text-primary dark:text-title-dark dark:hover:text-primary md:hidden" onClick={toggleNavMenu}>
                        <FiGrid className="font-bold" />
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;