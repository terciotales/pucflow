import Navbar from "@/Components/Navbar.jsx";
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import {LazyLoadImage} from 'react-lazy-load-image-component';

const posts = [
    {
        id: 1,
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies aliquam, nunc sapien aliquet nunc, quis aliquet nisl nunc eu nisi. Sed vitae nisl eget nunc aliquam aliquet. Sed vitae nisl eget nunc aliquam aliquet.',
        date: '2021-10-10',
        media: 'https://picsum.photos/500',
    },
    {
        id: 2,
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies aliquam, nunc sapien aliquet nunc, quis aliquet nisl nunc eu nisi. Sed vitae nisl eget nunc aliquam aliquet. Sed vitae nisl eget nunc aliquam aliquet.',
        date: '2021-10-10',
        media: 'https://picsum.photos/501',
    },
    {
        id: 2,
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies aliquam, nunc sapien aliquet nunc, quis aliquet nisl nunc eu nisi. Sed vitae nisl eget nunc aliquam aliquet. Sed vitae nisl eget nunc aliquam aliquet.',
        date: '2021-10-10',
        media: 'https://picsum.photos/502',
    },
    {
        id: 2,
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies aliquam, nunc sapien aliquet nunc, quis aliquet nisl nunc eu nisi. Sed vitae nisl eget nunc aliquam aliquet. Sed vitae nisl eget nunc aliquam aliquet.',
        date: '2021-10-10',
        media: 'https://picsum.photos/503',
    },
    {
        id: 2,
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies aliquam, nunc sapien aliquet nunc, quis aliquet nisl nunc eu nisi. Sed vitae nisl eget nunc aliquam aliquet. Sed vitae nisl eget nunc aliquam aliquet.',
        date: '2021-10-10',
        media: 'https://picsum.photos/504',
    },
    {
        id: 2,
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies aliquam, nunc sapien aliquet nunc, quis aliquet nisl nunc eu nisi. Sed vitae nisl eget nunc aliquam aliquet. Sed vitae nisl eget nunc aliquam aliquet.',
        date: '2021-10-10',
        media: 'https://picsum.photos/505',
    },
    {
        id: 2,
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies aliquam, nunc sapien aliquet nunc, quis aliquet nisl nunc eu nisi. Sed vitae nisl eget nunc aliquam aliquet. Sed vitae nisl eget nunc aliquam aliquet.',
        date: '2021-10-10',
        media: 'https://picsum.photos/506',
    },
    {
        id: 2,
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies aliquam, nunc sapien aliquet nunc, quis aliquet nisl nunc eu nisi. Sed vitae nisl eget nunc aliquam aliquet. Sed vitae nisl eget nunc aliquam aliquet.',
        date: '2021-10-10',
        media: 'https://picsum.photos/507',
    },
    {
        id: 2,
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies aliquam, nunc sapien aliquet nunc, quis aliquet nisl nunc eu nisi. Sed vitae nisl eget nunc aliquam aliquet. Sed vitae nisl eget nunc aliquam aliquet.',
        date: '2021-10-10',
        media: 'https://picsum.photos/508',
    },
    {
        id: 2,
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies aliquam, nunc sapien aliquet nunc, quis aliquet nisl nunc eu nisi. Sed vitae nisl eget nunc aliquam aliquet. Sed vitae nisl eget nunc aliquam aliquet.',
        date: '2021-10-10',
        media: 'https://picsum.photos/509',
    },
];

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
                    {posts.map((post) => {
                        return (
                            <div className="post w-post aspect-square bg-blue" key={post.id}>
                                <span
                                    className="w-full h-full bg-black hover:cursor-pointer transition-all flex justify-center items-center">
                                     <LazyLoadImage
                                         src={post.media}
                                         alt={post.title}
                                         className="w-full h-full object-cover"
                                     />
                            </span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
