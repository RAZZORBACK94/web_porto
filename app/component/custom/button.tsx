import { link } from 'fs';
import Link from 'next/link'
import React from 'react'
import { styleText } from 'util'

interface buttonProps {
    link: string;
    bgColor: string;
    text: string;
}

export default function Button({link, bgColor,text}:buttonProps) {
  return (
    <Link href={link} className={`px-3 py-2 ${bgColor} rounded-full w-max font-semibold hover:bg-blend-darken text-white hover:text-black transition-all`}>{text}</Link>
  )
}
