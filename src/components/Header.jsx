import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  Bars4Icon,
  GlobeAmericasIcon,
  NewspaperIcon,
  PhoneIcon,
  RectangleGroupIcon,
  SquaresPlusIcon,
  SunIcon,
  TagIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import { IoMenu } from "react-icons/io5";
import { FaHandHoldingHeart } from "react-icons/fa";
import DonateButton from "./DonateButton";

const navListMenuItems = [
  {
    title: "Projects",
    link: '/projects',
    description: "Our upcoming location and projects ",
    icon: SquaresPlusIcon,
  },
  {
    title: "About Us",
    link: '/about-us',
    description: "Meet and learn about our dedication",
    icon: UserGroupIcon,
  },
  {
    title: "Blog",
    link: '/blogs',
    description: "Some snaps of our events",
    icon: Bars4Icon,
  },
  {
    title: "Contect Us",
    link: '/contect-us',
    description: "Contect information of our comunity",
    icon: SunIcon,
  },
  {
    title: "Donate Us",
    link: '/donate-us',
    description: "Helping the Homeless, Hungry, and Hurtings Children",
    icon: GlobeAmericasIcon,
  },
  {
    title: "News",
    link: '/neaws',
    description: "Our ",
    icon: NewspaperIcon,
  },

];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = navListMenuItems.map(
    ({ icon, title, description, link }, key) => (
      <a href={link} key={key}>
        <MenuItem className="flex hover:shadow-lg p-2 hover:bg-black/90 items-center gap-3 rounded-lg">
          <div className="flex items-center justify-center rounded-lg !bg-gray-300 p-2 ">
            {" "}
            {React.createElement(icon, {
              strokeWidth: 2,
              className: "h-6 text-gray-800 w-6",
            })}
          </div>
          <div>
            <Typography
              variant="h6"
              color="blue"
              className="flex items-center text-gray-400 text-sm font-bold"
            >
              {title}
            </Typography>
            <Typography
              variant="paragraph"
              className="text-sm !font-medium text-gray-400"
            >
              {description}
            </Typography>
          </div>
        </MenuItem>
      </a>
    ),
  );

  return (
    <React.Fragment className='bg-pink-500'>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
      >
        <MenuHandler className=''>
          <Typography as="div" variant="small" className="font-medium ">
            <ListItem
              className="flex items-center gap-2   hover:bg-gray-200  p-3 py-2 transition-all duration-200 font-medium text-gray-800"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Resources
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform md:block ${isMenuOpen ? "rotate-180" : ""
                  }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform md:hidden ${isMobileMenuOpen ? "rotate-180" : ""
                  }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden bg-black/80 max-w-screen-xl p-3 border-none shadow-lg rounded-xl md:block">
          <ul className="grid grid-cols-2 gap-4   z-10 outline-none outline-0">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block md:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}

function NavList() {
  return (
    <List className="mt-2 mb-2 gap-2 p-0 md:mt-0 md:mb-0 md:flex-row md:p-1">
      <Typography
        as="a"
        href="/"
        variant="small"
        color="blue-gray"
        className="font-medium "
      >
        <ListItem className="flex items-center hover:bg-gray-300 p-3 text-gray-800 transition-all duration-200  py-2 ">Home</ListItem>
      </Typography>
      <Typography
        as="a"
        href="/about-us"
        variant="small"
        color="blue-gray"
        className="font-medium "
      >
        <ListItem className="flex items-center hover:bg-gray-300 p-3 text-gray-800 transition-all duration-200  py-2 ">About us</ListItem>
      </Typography>
      <Typography
        as="a"
        href="/"
        variant="small"
        color="blue-gray"
        className="font-medium "
      >
        <ListItem className="flex items-center hover:bg-gray-300 p-3 text-gray-800 transition-all duration-200  py-2 ">Galary</ListItem>
      </Typography>
      <Typography
        as="a"
        href="/blogs"
        variant="small"
        color="blue-gray"
        className="font-medium "
      >
        <ListItem className="flex items-center hover:bg-gray-300 p-3 text-gray-800 transition-all duration-200  py-2 ">Blog</ListItem>
      </Typography>
      <Typography
        as="a"
        href="/volunteer"
        variant="small"
        color="blue-gray"
        className="font-medium "
      >
        <ListItem className="flex items-center hover:bg-gray-300 p-3 text-gray-800 transition-all duration-200  py-2 ">Volunteer</ListItem>
      </Typography>

      <Typography
        as="a"
        href="/contact-us"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center hover:bg-gray-300 text-gray-800 p-3 transition-all duration-200 gap-2 py-2 pr-4">
          Contect us
        </ListItem>
      </Typography>
    </List>
  );
}

export function MegaMenuDefault() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  return (
    <Navbar className="mx-auto w-full max-w-screen bg-white  rounded-none shadow-none border-none z-30  px-4 py-2">
      <div className="flex items-center justify-between text-blue-gray-50">
        <div className="flex items-center gap-2 rounded-xl ">
        <FaHandHoldingHeart size={38} className="text-green-600" />
        <div className="flex flex-col items-center  gap-0">
          <h1 className="text-gray-700 text-xl font-sans font-bold">
            MAKE IT MUMKIN
          </h1>
          <span className="text-gray-700 text-[10px] flex -mt-1 justify-center   w-full"> 

          Together, Anything is Mumkin
          </span>
        </div>
        </div>
        <div className="hidden mr-8 md:block">
          <NavList />
        </div>
        <div onClick={() => setOpenNav(prev => !prev)} className="md:hidden cursor-pointer p-2 group block">
          <IoMenu size={24} className="text-gray-800 group-hover:scale-125 transition-all duration-150 " />
        </div>
        <div className="md:block hidden">
          <DonateButton />
        </div>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}