
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Timestamp } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { fireStore } from '../../../_components/firebase/config';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { collection, addDoc } from 'firebase/firestore';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Bold from '@tiptap/extension-bold';
import Italic from '@tiptap/extension-italic';
import Underline from '@tiptap/extension-underline';
import BulletList from '@tiptap/extension-bullet-list';
import OrderedList from '@tiptap/extension-ordered-list';
import TextAlign from '@tiptap/extension-text-align';
import TextStyle from '@tiptap/extension-text-style'; // Fix for color support
import Color from '@tiptap/extension-color';
import Dropcursor from '@tiptap/extension-dropcursor';
import Image from '@tiptap/extension-image';
import Link from 'next/link';

const ContentEditor = () => {
    const router = useRouter();
    const storage = getStorage();

    const [blog, setBlog] = useState({
        title: '',
        postSetting: '',
        content: '',
        metaTitle: '',
        metaDescription: '',
        image: '',
        keyWords: ''
    });

    const editor = useEditor({
        extensions: [
            StarterKit,
            Bold,
            Italic,
            Underline,
            BulletList,
            OrderedList,
            TextStyle, // ✅ Fix: Required for Color extension
            TextAlign.configure({ types: ['heading', 'paragraph'] }),
            Color.configure({ types: ['textStyle'] }),
            Dropcursor,
            // Image
        ],
        content: blog.content,
        onUpdate: ({ editor }) => {
            handleContentChange(editor.getHTML());
        },
    });

    const handleInputChange = (e) => setBlog({ ...blog, [e.target.name]: e.target.value });

    const handleContentChange = (content) => setBlog(prev => ({ ...prev, content }));

    // const handleImageUpload = () => {
    //     const input = document.createElement('input');
    //     input.setAttribute('type', 'file');
    //     input.setAttribute('accept', 'image/*');
    //     input.click();

    //     input.onchange = async () => {
    //         const file = input.files[0];
    //         if (file) {
    //             const storageRef = ref(storage, `images/${file.name}`);
    //             try {
    //                 await uploadBytes(storageRef, file);
    //                 const imageUrl = await getDownloadURL(storageRef);
    //                 setBlog(prev => ({ ...prev, image: imageUrl }));
    //                 editor.chain().focus().setImage({ src: imageUrl }).run();
    //                 toast.success('Image uploaded successfully!');
    //             } catch (error) {
    //                 console.error('Error uploading image:', error);
    //                 toast.error('Error uploading image');
    //             }
    //         }
    //     };
    // };

    const handleImageUpload = () => {
        const input = document.createElement('input');
        input.setAttribute('type', 'file');
        input.setAttribute('accept', 'image/*');
        input.click();
    
        input.onchange = async () => {
            const file = input.files[0];
            if (file) {
                const formData = new FormData();
                formData.append("file", file);
                formData.append("upload_preset", "ravish_preset"); // 🔹 Replace with your Cloudinary preset
    
                try {
                    const response = await fetch("https://api.cloudinary.com/v1_1/ddwesaitq/image/upload", {
                        method: "POST",
                        body: formData
                    });
    
                    const data = await response.json();
                    if (data.secure_url) {
                        setBlog(prev => ({ ...prev, image: data.secure_url })); // ✅ Store Cloudinary image URL
                        // editor.chain().focus().setImage({ src: data.secure_url }).run();
                        toast.success("Image uploaded successfully!");
                    } else {
                        toast.error("Image upload failed!");
                    }
                } catch (error) {
                    console.error("Error uploading image:", error);
                    toast.error("Error uploading image");
                }
            }
        };
    };
    

    const handlePublish = async () => {
        if (!blog.title || !blog.metaDescription || !blog.metaTitle || !blog.content || !blog.keyWords) {
            toast.error('Fill all required fields');
        } else {
            try {
                await addDoc(collection(fireStore, 'blogs'), {
                    title: blog.title,
                    postSetting: blog.postSetting,
                    content: blog.content,
                    metaTitle: blog.metaTitle,
                    metaDescription: blog.metaDescription,
                    image: blog.image,
                    keyWords: blog.keyWords,
                    timestamp: Timestamp.now(), // ✅ Fix: Store timestamp correctly
                });
        
                toast.success('Blog Successfully Added!');
            } catch (error) {
                toast.error('Error in adding blog');
                console.error('Error:', error);
            }
        }
    };

    const handleDraft = async () => {
        try {
            await addDoc(collection(fireStore, 'drafts'), blog);
            toast.success('Blog saved as draft!');
        } catch (error) {
            toast.error('Error saving draft');
            console.error('Error:', error);
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10 w-[100%]">
           
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Create Blog Post</h1>

            <div className="space-y-4">
                {/* Title */}
                <div>
                    <label className="block text-gray-700 font-medium">Title</label>
                    <input type="text" name="title" value={blog.title} onChange={handleInputChange} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>

                {/* Post Setting */}
                <div>
                    <label className="block text-gray-700 font-medium">Post Setting</label>
                    <input type="text" name="postSetting" value={blog.postSetting} onChange={handleInputChange} className="w-full px-3 py-2 border rounded-md" />
                </div>

                {/* Meta Title */}
                <div>
                    <label className="block text-gray-700 font-medium">Meta Title</label>
                    <input type="text" name="metaTitle" value={blog.metaTitle} onChange={handleInputChange} className="w-full px-3 py-2 border rounded-md" />
                </div>

                {/* Meta Description */}
                <div>
                    <label className="block text-gray-700 font-medium">Meta Description</label>
                    <textarea name="metaDescription" value={blog.metaDescription} onChange={handleInputChange} className="w-full px-3 py-2 border rounded-md min-h-[80px]" />
                </div>

                {/* Keywords */}
                <div>
                    <label className="block text-gray-700 font-medium">Keywords</label>
                    <input type="text" name="keyWords" value={blog.keyWords} onChange={handleInputChange} className="w-full px-3 py-2 border rounded-md" />
                </div>

                {/* Content Editor */}
                <div>
                    <label className="block text-gray-700 font-medium">Content</label>

                    {/* Toolbar for Editor */}
                    {editor && (
                        <div className="flex gap-2 mb-3">
                        <button onClick={() => editor.chain().focus().toggleBold().run()} className="px-2 py-1 border rounded font-bold">B</button>
                        <button onClick={() => editor.chain().focus().toggleItalic().run()} className="px-2 py-1 border rounded italic">I</button>
                        <button onClick={() => editor.chain().focus().toggleUnderline().run()} className="px-2 py-1 border rounded underline">U</button>
                        <button onClick={() => editor.chain().focus().toggleBulletList().run()} className="px-2 py-1 border rounded">• List</button>
                        <button onClick={() => editor.chain().focus().toggleOrderedList().run()} className="px-2 py-1 border rounded">1. List</button>
                        <button onClick={() => editor.chain().focus().setTextAlign('center').run()} className="px-2 py-1 border rounded">Center</button>
                        <input type="color" onChange={(e) => editor.chain().focus().setColor(e.target.value).run()} className="border rounded w-10" />
                        {/* <button onClick={handleImageUpload} className="px-2 py-1 border rounded">📷</button> */}
                    </div>
                    )}

                    <EditorContent editor={editor} className="border p-2 rounded-md min-h-[150px] border-none" />
                </div>

                {/* Image Upload */}
                <div>
                    <button onClick={handleImageUpload} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Upload Image</button>
                    {blog.image && <img src={blog.image} alt="Uploaded" className="w-20 h-20 object-cover rounded-md border mt-2" />}
                </div>
                
                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3 mt-4">
                    <button onClick={() => setBlog({ title: '', postSetting: '', content: '', metaTitle: '', metaDescription: '', image: '', keyWords: '' })} className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500">Clear</button>
                    {/* <button onClick={() => router.push('/admin-portal/preview')} className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600">Preview</button> */}
                    <Link href={'/concepts/Blogs/preview'} className='bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600'>Preview</Link>
                    <button onClick={handleDraft} className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">Save Draft</button>
                    <button onClick={handlePublish} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Publish</button>
                    <button onClick={() => router.back()} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">Back</button>
                </div>
            </div>
        </div>
    );
};

export default ContentEditor;
