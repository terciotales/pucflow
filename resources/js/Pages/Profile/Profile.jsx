import Navbar from "@/Components/Navbar.jsx";

export default function Profile(props) {
    const {
        auth
    } = props;

    return (
        <>
            <Navbar user={auth.user}/>
            <div
                className="relative sm:flex sm:justify-center sm:items-center h-full bg-dots-darker bg-center bg-blue-bg dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">
                <div className="max-w-4xl w-full mx-auto py-8 text-white">
                    <div className="flex align-middle gap-6">
                        <span className="flex overflow-hidden bg-blue w-32 h-32 rounded-full">
                            <span className="w-full h-full bg-black opacity-0 hover:opacity-50 transition-all">

                            </span>
                        </span>
                        <div className="flex flex-col gap-4 justify-center">
                            <span className="text-5xl">{auth.user.name}</span>
                            <span className="text-2xl">{auth.user.email}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
