import { Link, Head } from '@inertiajs/react';
import Navbar from "@/Components/Navbar.jsx";
import Post from "@/Components/Post.jsx";
import React from "react";
import users from "../../data/users.json";

const getPosts = async () => {
     const response= fetch("https://jsonplaceholder.typicode.com/posts");

    return (await response).json();
};

export default function Home({ auth, laravelVersion, phpVersion }) {
    const [posts, setPosts] = React.useState([]);

    React.useEffect(() => {
        getPosts().then((data) => setPosts(data));
    }, []);

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
                                PostContent={post.body}
                                PostAuthor={users.find((user) => user.id === post.userId).name}
                                PostDate={"Hoje"}
                                PostMedia={`https://picsum.photos/seed/${post.id}/500/300`}
                            />
                        );
                    })}
                </div>
            </div>
        </>
    );
}
