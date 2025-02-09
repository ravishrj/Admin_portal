'use client';

import { useEffect, useState } from 'react';
import { collection, query, orderBy, limit, getDocs } from 'firebase/firestore';
import { fireStore } from '../../../_components/firebase/config';

const PreviewBlog = () => {
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchLatestBlog = async () => {
            try {
                const blogsRef = collection(fireStore, 'blogs');
                const q = query(blogsRef, orderBy('timestamp', 'desc'), limit(1));
                const querySnapshot = await getDocs(q);
        
                console.log("All blogs in Firestore:", querySnapshot.docs.map(doc => doc.data())); // ✅ Debugging
        
                if (!querySnapshot.empty) {
                    const latestBlog = querySnapshot.docs[0].data();
                    console.log("Latest Blog:", latestBlog);
                    setBlog(latestBlog);
                } else {
                    console.log("No blogs found in Firestore.");
                    setBlog(null);
                }
            } catch (error) {
                console.error("Error fetching blog:", error);
            } finally {
                setLoading(false);
            }
        };
        

        fetchLatestBlog();
    }, []);
console.log(blog,"blog");
    if (loading) return <p className="text-center text-gray-600">Loading...</p>;
    if (!blog) return <p className="text-center text-red-500">No blog posts found.</p>;

    return (
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10 w-11/12">
            <h1 className="text-3xl font-bold text-gray-900">{blog.title}</h1>
            <p className="text-gray-500 mt-1">{blog.metaTitle}</p>
            <p className="text-gray-700 italic mt-2">{blog.metaDescription}</p>
            
            {blog.image && (
                <img src={blog.image} alt="Blog Cover" className="w-full h-auto mt-4 rounded-md" />
            )}

            <div className="border-t border-gray-300 mt-4 pt-4">
                <div dangerouslySetInnerHTML={{ __html: blog.content }} className="prose max-w-none"></div>
            </div>
        </div>
    );
};

export default PreviewBlog;
