import { Link, Head } from '@inertiajs/react';
import Navbar from "@/Components/Navbar.jsx";
import Post from "@/Components/Post.jsx";

const posts = [
    {
        id: 1,
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies aliquam, nunc sapien aliquet nunc, quis aliquet nisl nunc eu nisi. Sed vitae nisl eget nunc aliquam aliquet. Sed vitae nisl eget nunc aliquam aliquet.',
        date: '2021-10-10',
        media: 'https://picsum.photos/900',
        author: 'Gabriel'
    },
    {
        id: 2,
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies aliquam, nunc sapien aliquet nunc, quis aliquet nisl nunc eu nisi. Sed vitae nisl eget nunc aliquam aliquet. Sed vitae nisl eget nunc aliquam aliquet.',
        date: '2021-10-10',
        media: 'https://picsum.photos/901',
        author: 'Lucas'
    },
    {
        id: 2,
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies aliquam, nunc sapien aliquet nunc, quis aliquet nisl nunc eu nisi. Sed vitae nisl eget nunc aliquam aliquet. Sed vitae nisl eget nunc aliquam aliquet.',
        date: '2021-10-10',
        media: 'https://picsum.photos/902',
        author: 'Felipe'
    },
    {
        id: 2,
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies aliquam, nunc sapien aliquet nunc, quis aliquet nisl nunc eu nisi. Sed vitae nisl eget nunc aliquam aliquet. Sed vitae nisl eget nunc aliquam aliquet.',
        date: '2021-10-10',
        media: 'https://picsum.photos/903',
        author: 'Pedro'
    },
    {
        id: 2,
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies aliquam, nunc sapien aliquet nunc, quis aliquet nisl nunc eu nisi. Sed vitae nisl eget nunc aliquam aliquet. Sed vitae nisl eget nunc aliquam aliquet.',
        date: '2021-10-10',
        media: 'https://picsum.photos/904',
        author: 'Mateus'
    },
    {
        id: 2,
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies aliquam, nunc sapien aliquet nunc, quis aliquet nisl nunc eu nisi. Sed vitae nisl eget nunc aliquam aliquet. Sed vitae nisl eget nunc aliquam aliquet.',
        date: '2021-10-10',
        media: 'https://picsum.photos/905',
        author: 'José'
    },
    {
        id: 2,
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies aliquam, nunc sapien aliquet nunc, quis aliquet nisl nunc eu nisi. Sed vitae nisl eget nunc aliquam aliquet. Sed vitae nisl eget nunc aliquam aliquet.',
        date: '2021-10-10',
        media: 'https://picsum.photos/906',
        author: 'Marcos'
    },
    {
        id: 2,
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies aliquam, nunc sapien aliquet nunc, quis aliquet nisl nunc eu nisi. Sed vitae nisl eget nunc aliquam aliquet. Sed vitae nisl eget nunc aliquam aliquet.',
        date: '2021-10-10',
        media: 'https://picsum.photos/907',
        author: 'João'
    },
    {
        id: 2,
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies aliquam, nunc sapien aliquet nunc, quis aliquet nisl nunc eu nisi. Sed vitae nisl eget nunc aliquam aliquet. Sed vitae nisl eget nunc aliquam aliquet.',
        date: '2021-10-10',
        media: 'https://picsum.photos/908',
        author: 'Maria'
    },
    {
        id: 2,
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies aliquam, nunc sapien aliquet nunc, quis aliquet nisl nunc eu nisi. Sed vitae nisl eget nunc aliquam aliquet. Sed vitae nisl eget nunc aliquam aliquet.',
        date: '2021-10-10',
        media: 'https://picsum.photos/909',
        author: 'Fernando'
    },
];

export default function Home({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="PucFlow" />
            <Navbar user={auth.user}/>
            <div className="relative sm:flex sm:justify-center sm:items-center h-full bg-dots-darker bg-center bg-blue-bg selection:bg-red-500 selection:text-white">
                <div className="max-w-2xl w-full mx-auto py-8 gap-4 flex flex-col">
                    {posts.map((post) => {
                        return (
                            <Post
                                key={post.id}
                                PostTitle={post.title}
                                PostContent={post.title}
                                PostAuthor={post.author}
                                PostDate={post.date}
                                PostMedia={post.media}
                            />
                        );
                    })}
                </div>
            </div>
        </>
    );
}
