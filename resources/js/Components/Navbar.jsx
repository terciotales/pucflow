import Logo from "@/Icons/Logo.jsx";
import Dropdown from "@/Components/Dropdown.jsx";
import {useState} from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import {Head, Link} from '@inertiajs/react';


export default function Navbar({user}) {
    return (
        <>
            <Head title={user.name}/>
            <div className="bg-blue-dark flex justify-between p-4">
                <Link href="/">
                    <Logo className="w-32 h-auto"/>
                </Link>
                <div className="hidden sm:flex sm:items-center sm:ms-6">
                    <div className="ms-3 relative">
                        <Dropdown>
                            <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className="inline-flex text-white items-center px-3 py-2 border-transparent text-sm leading-4 font-medium rounded-md hover:text-gray-200 focus:outline-none transition ease-in-out duration-150"
                                            >
                                                {user.name}

                                                <svg
                                                    className="ms-2 -me-0.5 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                            </Dropdown.Trigger>

                            <Dropdown.Content className="border-orange">
                                <Dropdown.Link href={`/${user.name}`}>Perfil</Dropdown.Link>
                                <Dropdown.Link href={route('logout')} method="post" as="button">
                                    Sair
                                </Dropdown.Link>
                            </Dropdown.Content>
                        </Dropdown>
                    </div>
                </div>
            </div>
        </>
    );
};
