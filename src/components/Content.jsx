"use client";
import React  from 'react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { MdOutlineAutorenew } from "react-icons/md";

export const Content = ({item}) => {
    const router = useRouter();
    const [editMode, setEditMode] = useState(false);

    const [title_app, setTitle] = useState(item.title_app);
    const [desc_app, setDescription] = useState(item.desc_app);
    const [link_attach, setLinkAttach] = useState(item.link_attach);

    //Delete Data 
    async function handleDelete() {
        const res = await fetch("https://v1.appbackend.io/v1/rows/zHtspcONf4Uq",{
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify([item._id]),
        });
        const data = await res.json();
        console.log(data);
        
        router.refresh()
    }
    //Update Data 
    async function handleUpdate() {
        const res = await fetch("https://v1.appbackend.io/v1/rows/zHtspcONf4Uq", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({_id : item._id, title_app, desc_app, link_attach}),
        });
        const data = await res.json();
        console.log(data);
        router.refresh();
        setEditMode(false);
    }

    if (editMode){
        return (
            <div className="flex flex-col justify-items-center space-y-2 ">
             <h3 className="font-bold text-xl text-black text-center"> ... Changes Something ... </h3>
             <input className="input input-bordered w-full max-w-lg m-auto" placeholder="Title Bookmark" onChange={(e) => setTitle(e.target.value)} value={title_app}/>
             <input className="input input-bordered w-full max-w-lg m-auto" placeholder="Description Bookmark" onChange={(e) => setDescription(e.target.value)} value={desc_app}/>
             <input className="input input-bordered w-full max-w-lg m-auto" placeholder="Link Attachment" onChange={(e) => setLinkAttach(e.target.value)} value={link_attach}/>
             <button className="flex btn max-w-s m-auto" onClick={handleUpdate}> Update <MdOutlineAutorenew /> </button>
        </div>
        );
    }
    
  return (
<div className="bg-gray-200 p-4 rounded-md shadow-md mb-4">
  <h1 className="font-bold text-lg mb-2 text-black">{item.title_app}</h1>
  <p className="text-gray-700 mb-2">{item.desc_app}</p>
  <a href={item.link_attach} className="text-blue-500 hover:underline mb-2 block" target='blank'>
    {item.link_attach}
  </a>
  <button onClick={handleDelete} className="bg-red-500 text-white px-4 py-2 mr-2 rounded-md hover:bg-red-600"> Delete</button>
  <button onClick={() => setEditMode(true)} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"> Edit</button>
</div>

  )
};