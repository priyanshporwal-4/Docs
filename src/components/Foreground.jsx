import React, { useRef, useState } from 'react'
import Card from './Card'

function Foreground() {

    const ref = useRef(null)

    const data = [
        {
            desc: "Hey",
            fileSize : ".9mb", 
            close : true, 
            tag : {isOpen : true, tagTitle : "Download Now", tagColor : "green"},
        },
        {
            desc: "Your contribution will be very good for us.",
            fileSize : ".9mb", 
            close : false, 
            tag : {isOpen : true, tagTitle : "Upload", tagColor : "blue"},
        },
        {
            desc: "How are You?",
            fileSize : ".9mb", 
            close : false, 
            tag : {isOpen : true, tagTitle : "Download Now", tagColor : "green"},
        },
        {
            desc: "Do you like my project.",
            fileSize : ".9mb", 
            close : true, 
            tag : {isOpen : true, tagTitle : "Upload", tagColor : "blue"},
        },
        {
            desc: "You can contribute to it.",
            fileSize : ".9mb", 
            close : true, 
            tag : {isOpen : false, tagTitle : "Download Now", tagColor : "green"},
        },
    ];
    useState()
  return (
    <div ref = {ref} className='fixed top-0 left-0 w-full h-full z-[3] flex gap-10 flex-wrap p-5'>
        {data.map((item, index)=>(
            <Card data={item} reference={ref}/>
        ))}
    </div>
  )
}

export default Foreground