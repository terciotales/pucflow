import { Link, Head } from '@inertiajs/react';
import Navbar from "@/Components/Navbar.jsx";

export default function Home({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="PucFlow" />
            <Navbar user={auth.user}/>
            <div className="relative sm:flex sm:justify-center sm:items-center h-full bg-dots-darker bg-center bg-blue-bg dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">
                <div className="max-w-4xl w-full mx-auto py-8">

                </div>
            </div>
        </>
    );
}
