import { Popover, Transition } from '@headlessui/react'
import Link from 'next/link'
import { Fragment } from 'react'

import MyLink from '../MyLink'
import { Paragraph } from '../Typography'

const HomeIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="ml-1 h-6 w-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
      />
    </svg>
  )
}
const FavouriteIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="ml-1 h-5 w-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
      />
    </svg>
  )
}
const AreaIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="ml-1 h-5 w-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
      />
    </svg>
  )
}
const CategoryIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="ml-1 h-5 w-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
      />
    </svg>
  )
}
interface INavItemProps {
  href: string
  icon: JSX.Element
  text: string
}
const NavItem = ({ href, icon, text }: INavItemProps) => {
  return (
    <li>
      <Link href={href}>
        <a className="link">
          {text} {icon}
        </a>
      </Link>
    </li>
  )
}

const MobileNavLinks = ({ href, icon, text }: INavItemProps) => {
  return (
    <li>
      <Popover.Button as={MyLink} href={href} className="focus block py-2">
        <div className="link">
          {text} {icon}
        </div>
      </Popover.Button>
    </li>
  )
}

const MobileNavigation = () => {
  return (
    <Popover className="pointer-events-auto md:hidden">
      <Popover.Button className="focus group flex items-center rounded-full bg-black/80 px-5 py-2 text-sm font-medium text-gray-400 shadow-lg shadow-zinc-600/10">
        Menu
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="ml-2 h-3 w-3"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 z-[100] bg-zinc-800/50 backdrop-blur-sm" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-1 scale-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-1 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="fixed inset-x-4 top-8 z-[120] origin-top rounded-3xl bg-gray-900/90 p-5"
          >
            <div className="flex items-center justify-between p-1">
              <Paragraph text="Navigation" />
              <Popover.Button aria-label="close menu" className="focus">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-8 w-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </Popover.Button>
            </div>
            <nav className="mt-6">
              <ul className="divide-y divide-zinc-600">
                <MobileNavLinks text="Home" icon={<HomeIcon />} href="/" />
                <MobileNavLinks
                  icon={<CategoryIcon />}
                  href="/category"
                  text="category"
                />
                <MobileNavLinks icon={<AreaIcon />} href="/area" text="area" />
                <MobileNavLinks
                  icon={<FavouriteIcon />}
                  href="/favourite"
                  text="favourite"
                />
              </ul>
            </nav>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  )
}

const Header = () => {
  return (
    <div className="container">
      <div className="mt-6 flex items-center justify-between px-2">
        <div />
        <nav className="hidden rounded-3xl bg-black py-2 px-5 shadow-md md:block">
          <ul className="flex">
            <NavItem text="Home" icon={<HomeIcon />} href="/" />
            <NavItem icon={<CategoryIcon />} href="/category" text="category" />
            <NavItem icon={<AreaIcon />} href="/area" text="area" />
            <NavItem
              icon={<FavouriteIcon />}
              href="/favourite"
              text="favourite"
            />
          </ul>
        </nav>
        <p>SEARCHBOX</p>
        <MobileNavigation />
      </div>
    </div>
  )
}

export default Header
