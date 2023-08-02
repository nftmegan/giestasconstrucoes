'use client'

import { Fragment, useState } from 'react'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { Bars3Icon } from '@heroicons/react/24/outline'

import MobileSidebar from './mobileSidebar';
import NavbarWithMegaMenu from './pcTopbar';

import { usePathname, useSearchParams } from 'next/navigation';

import { useEffect } from 'react';

const navigation = {
    pages: [
        { name: 'Início', href: '#' },
        { name: 'Empresa', href: '#' },
        { name: 'Produtos', href: '#' },
        { name: 'Serviços', href: '#' },
        { name: 'Portfolio ', href: '#' },
        { name: 'Contactos ', href: '#' }
    ],
}

function classNames(...classes : any[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
    const [open, setOpen] = useState(false);

	const pathName = usePathname()
	const searchParams = useSearchParams()
  
	useEffect(() => {
	  setOpen(false);
	}, [pathName, searchParams])

    return (
        <div className={classNames("z-10 w-full", pathName === "/" && "fixed top-0 opacity-99")}>
            {/* Mobile menu */}
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>
                    <div className="fixed inset-0 z-40 flex">
                        <Transition.Child
                        as={Fragment}
                        enter="transition ease-in-out duration-300 transform"
                        enterFrom="-translate-x-full"
                        enterTo="translate-x-0"
                        leave="transition ease-in-out duration-300 transform"
                        leaveFrom="translate-x-0"
                        leaveTo="-translate-x-full"
                        >
                            <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">

                                <MobileSidebar setOpen={setOpen}/>

                                {/* Links 

                                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                                {navigation.pages.map((page) => (
                                    <div key={page.name} className="flow-root">
                                    <a href={page.href} className="-m-2 block p-2 font-medium text-gray-900">
                                        {page.name}
                                    </a>
                                    </div>
                                ))}
                                </div>

                                */}
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>
            <header className="relative bg-white">
                <p className="flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
                    Para mais informações contactar 915789036
                </p>

                <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="border-b border-gray-200">
                        <div className="flex h-16 items-center">

                            <div className="ml-4 flex lg:ml-0">
                                <a href="#">
                                <span className="sr-only">Your Company</span>
                                <img
                                    className="h-8 w-auto"
                                    src="/logo.png"
                                    alt=""
                                />
                                </a>
                            </div>

                            <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                                <div className="flex h-full space-x-8">
                                {navigation.pages.map((page) => (
                                    <a
                                    key={page.name}
                                    href={page.href}
                                    className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                                    >
                                    {page.name}
                                    </a>
                                ))}
                                </div>
                            </Popover.Group>

                            <div className="ml-auto flex items-center">
                                <div className="hidden lg:ml-8 lg:flex">
                                    <a href="#" className="flex items-center text-gray-700 hover:text-gray-800">
                                        <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg"
                                        alt=""
                                        className="block h-auto w-5 flex-shrink-0"
                                        />
                                        <span className="ml-1 block text-sm font-medium">PT</span>
                                        <span className="sr-only">, mudar linguagem</span>
                                    </a>
                                </div>
                            </div>

							<button
                                type="button"
                                className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
                                onClick={() => setOpen(true)}
                            >
                                <span className="absolute -inset-0.5" />
                                <span className="sr-only">Open menu</span>
                                <div className="flex space-x-2">
                                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                                    <span>Menu</span>
                                </div>
                            </button>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}