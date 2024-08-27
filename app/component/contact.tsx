import React from 'react'
import { FaInstagram, FaLinkedin, FaWhatsapp, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { contactList } from '../constant';
import Link from 'next/link';

export default function Contact() {
    return (
        <div className="container space-y-5">
            <div className="flex flex-col space-y-3 text-white text-center">
                <p className="text-5xl font-bold">Contact</p>
                <p className="text-lg">Hubungi kapanpun dan dimanapun</p>
            </div>

            <div className='flex justify-between'>

                <Link target='_blank' href='https://github.com/RAZZORBACK94'>
                    <FaGithub className='fill-white size-14 hover:fill-gray-500  transition-all' />
                </Link>
                <Link target='_blank' href='https://wa.me/qr/DLWEK2JLK7GGF1'>
                    <FaWhatsapp className='fill-white size-14 hover:fill-green-500 transition-all' />

                </Link>
                <Link target='_blank' href='https://www.linkedin.com/in/ahmad-yusuf-a358b3261/'>
                    <FaLinkedin className='fill-white size-14 hover:fill-blue-600 transition-all' />
                </Link>
                <Link target='_blank' href='https://www.instagram.com/dynamic_art94/'>
                    <FaInstagram href='' className='fill-white size-14 hover:fill-purple-500 transition-all' />

                </Link>
                <Link target='_blank' href='https://mail.google.com/mail/u/0/#inbox'>
                    <SiGmail className='fill-white size-14 hover:fill-red-700 transition-all' />
                </Link>
            </div>


        </div>
    )
}
