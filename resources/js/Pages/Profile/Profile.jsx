import Navbar from "@/Components/Navbar.jsx";
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';

export default function Profile(props) {
    const {
        auth
    } = props;

    return (
        <>
            <Navbar user={auth.user}/>
            <div
                className="relative flex-col px-6 sm:flex sm:justify-center sm:items-center h-full bg-blue-bg">
                <div className="max-w-4xl w-full mx-auto py-8 text-white border-b-white">
                    <div className="flex align-middle gap-6">
                        <span className="flex overflow-hidden bg-blue w-32 h-32 rounded-full">
                            <span
                                className="w-full h-full bg-black opacity-0 hover:bg-opacity-50 hover:opacity-100 hover:cursor-pointer transition-all flex justify-center items-center">
                                <EditRoundedIcon fontSize="large" className="text-white"/>
                            </span>
                        </span>
                        <div className="flex flex-col gap-3 justify-center">
                            <span className="text-5xl">{auth.user.name}</span>
                            <span className="text-2xl">{auth.user.email}</span>
                        </div>
                    </div>
                </div>
                <div className="max-w-4xl w-full mx-auto py-8 text-white gap-2 flex flex-wrap">
                    <div className="post w-post aspect-square bg-blue">
                        <span className="w-full h-full bg-black opacity-0 hover:bg-opacity-40 hover:opacity-100 hover:cursor-pointer transition-all flex justify-center items-center">
                                <RemoveRedEyeOutlinedIcon fontSize="large" className="text-white"/>
                        </span>
                    </div>
                    <div className="post w-post aspect-square bg-blue">
                        <span className="w-full h-full bg-black opacity-0 hover:bg-opacity-40 hover:opacity-100 hover:cursor-pointer transition-all flex justify-center items-center">
                                <RemoveRedEyeOutlinedIcon fontSize="large" className="text-white"/>
                        </span>
                    </div>
                    <div className="post w-post aspect-square bg-blue">
                        <span className="w-full h-full bg-black opacity-0 hover:bg-opacity-40 hover:opacity-100 hover:cursor-pointer transition-all flex justify-center items-center">
                                <RemoveRedEyeOutlinedIcon fontSize="large" className="text-white"/>
                        </span>
                    </div>
                    <div className="post w-post aspect-square bg-blue">
                        <span className="w-full h-full bg-black opacity-0 hover:bg-opacity-40 hover:opacity-100 hover:cursor-pointer transition-all flex justify-center items-center">
                                <RemoveRedEyeOutlinedIcon fontSize="large" className="text-white"/>
                        </span>
                    </div>
                    <div className="post w-post aspect-square bg-blue">
                        <span className="w-full h-full bg-black opacity-0 hover:bg-opacity-40 hover:opacity-100 hover:cursor-pointer transition-all flex justify-center items-center">
                                <RemoveRedEyeOutlinedIcon fontSize="large" className="text-white"/>
                        </span>
                    </div>
                    <div className="post w-post aspect-square bg-blue">
                        <span className="w-full h-full bg-black opacity-0 hover:bg-opacity-40 hover:opacity-100 hover:cursor-pointer transition-all flex justify-center items-center">
                                <RemoveRedEyeOutlinedIcon fontSize="large" className="text-white"/>
                        </span>
                    </div>
                    <div className="post w-post aspect-square bg-blue">
                        <span className="w-full h-full bg-black opacity-0 hover:bg-opacity-40 hover:opacity-100 hover:cursor-pointer transition-all flex justify-center items-center">
                                <RemoveRedEyeOutlinedIcon fontSize="large" className="text-white"/>
                        </span>
                    </div>
                    <div className="post w-post aspect-square bg-blue">
                        <span className="w-full h-full bg-black opacity-0 hover:bg-opacity-40 hover:opacity-100 hover:cursor-pointer transition-all flex justify-center items-center">
                                <RemoveRedEyeOutlinedIcon fontSize="large" className="text-white"/>
                        </span>
                    </div>
                    <div className="post w-post aspect-square bg-blue">
                        <span className="w-full h-full bg-black opacity-0 hover:bg-opacity-40 hover:opacity-100 hover:cursor-pointer transition-all flex justify-center items-center">
                                <RemoveRedEyeOutlinedIcon fontSize="large" className="text-white"/>
                        </span>
                    </div>
                    <div className="post w-post aspect-square bg-blue">
                        <span className="w-full h-full bg-black opacity-0 hover:bg-opacity-40 hover:opacity-100 hover:cursor-pointer transition-all flex justify-center items-center">
                                <RemoveRedEyeOutlinedIcon fontSize="large" className="text-white"/>
                        </span>
                    </div>
                    <div className="post w-post aspect-square bg-blue">
                        <span className="w-full h-full bg-black opacity-0 hover:bg-opacity-40 hover:opacity-100 hover:cursor-pointer transition-all flex justify-center items-center">
                                <RemoveRedEyeOutlinedIcon fontSize="large" className="text-white"/>
                        </span>
                    </div>
                    <div className="post w-post aspect-square bg-blue">
                        <span className="w-full h-full bg-black opacity-0 hover:bg-opacity-40 hover:opacity-100 hover:cursor-pointer transition-all flex justify-center items-center">
                                <RemoveRedEyeOutlinedIcon fontSize="large" className="text-white"/>
                        </span>
                    </div>
                    <div className="post w-post aspect-square bg-blue">
                        <span className="w-full h-full bg-black opacity-0 hover:bg-opacity-40 hover:opacity-100 hover:cursor-pointer transition-all flex justify-center items-center">
                                <RemoveRedEyeOutlinedIcon fontSize="large" className="text-white"/>
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}
