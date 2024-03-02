import React from 'react'
import { FaFileAlt } from "react-icons/fa";
import { IoIosCloudDownload } from "react-icons/io";
import { IoIosClose } from "react-icons/io";
import { motion } from "framer-motion"


function Card({data, reference}) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale : 1.2}} dragElastic={.5} dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }} className='relative flex-shrink-0 w-60 h-72 rounded-[45px] bg-zinc-900 text-white py-10 px-8 overflow-hidden'>
        <FaFileAlt />
        <p className='text-sm leading-tight mt-5'>{data.desc}</p>
        <footer className='footer absolute bottom-0 w-full left-0'>
            <div className='flex items-center justify-between py-3 px-8 mb-3'>
                <h5>{data.fileSize}</h5>
                <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
                    {data.close ? <IoIosClose/> : <IoIosCloudDownload size={".8em"} color='#fff'/>}
                </span>
            </div>
            {
                data.tag.isOpen && (
                    <div className={`tag w-full py-4 ${data.tag.tagColor === "blue" ? "bg-sky-400" : "bg-green-400"} flex items-center justify-center`}>
                <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
            </div>
            )}
        </footer>
    </motion.div>
    )
}

export default Card