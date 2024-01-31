"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"; 
import { FaPlus } from "react-icons/fa6";

//melakukan POST data 
export const CreateNew = () => {
    const router = useRouter();
    const [title_app, setTitle] = useState("");
    const [desc_app, setDescription] = useState("");
    const [link_attach, setLinkAttach] = useState("");

    async function handleCreateBookmark() {
        const res = await fetch("https://v1.appbackend.io/v1/rows/zHtspcONf4Uq",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify([{title_app, desc_app, link_attach}]),
        });
        const data = await res.json();
        console.log(data);
        
        router.refresh()
    }
    return (
        <div className="my-8">
            <div className="flex flex-col justify-items-center space-y-2 ">
                <h3 className="font-bold text-xl text-black text-center"> ... Write New Bookmark ... </h3>
                <input className="input input-bordered w-full max-w-lg m-auto my-4 bg-cyan-950 text-white" placeholder="Title Bookmark" onChange={(e) => setTitle(e.target.value)} required/>
                <input className="input input-bordered w-full max-w-lg m-auto bg-cyan-950 text-white"  placeholder="Description Bookmark" onChange={(e) => setDescription(e.target.value)} require/>
                <input className="input input-bordered w-full max-w-lg m-auto bg-cyan-950 text-white" placeholder="Link Attachment" onChange={(e) => setLinkAttach(e.target.value)} required/>
                <button className="flex btn max-w-s m-auto text-white" onClick={handleCreateBookmark}> Add New <FaPlus /> </button>
            </div>
        </div>
    )
};