import project1 from '../../public/imgProject/tokoBuku.png'
import project2 from '../../public/imgProject/permataPuri.png'

import certiport from '../../public/sertif/certiport.png'
import digiup from '../../public/sertif/digiup.png'
import kompeDigiup from '../../public/sertif/kompetensiDigiup.png'
import toeic from '../../public/sertif/toeic.png'
import cyber from '../../public/sertif/cyber.png'
import ukbi from '../../public/sertif/ukbi.png'
import tefa from '../../public/sertif/tefa.png'
import sefest from '../../public/sertif/sefest.png'

import { FaInstagram, FaLinkedin, FaWhatsapp, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";


export const navbarLink = [
    {title : 'Home', url:''},
    {title : 'About Me', url:''},
    {title : 'Experience', url:''},
]

export const projectList = [
    {
        image : project1, 
        alt : 'toko buku project', 
        bgColor : 'bg-[#0038FF]', 
        title : 'BUKU KU', 
        type : 'NodeJS, ReactJS, MySQL', 
        desc : 'Toko buku online dimana pembeli dapat mencari buku yang diinginkan hingga melakukan pembayaran.'
    }
    ,{
        image : project2, 
        alt : 'permata puri project', 
        bgColor : 'bg-[#ED5500]', 
        title : 'Permata Puri', 
        type : 'PHP, MySQL', 
        desc : 'Website yang diperuntukan Manajemen Hotel dan ini memiliki 3 halaman utama yaitu halaman pelanggan, staff, dan admin.'
    }
]

export const sertifList = [
    {
        image : certiport.src, 
        title : 'Information Technology Scpecialist (Certiport)',
        sebagai : 'HTML and CSS',
        date : '16 Jul 2024'
    },
    {
        image : sefest.src, 
        title : 'SEFEST 2024 Kategori UI/UX Design',
        sebagai : 'Peserta',
        date : '13 Jul 2024'
    },
    {
        image : tefa.src, 
        title : 'Student Wordpress Developer of Teaching Factory Program',
        sebagai : 'Best Participant',
        date : '14 Feb 2024'
    },
    {
        image : toeic.src, 
        title : 'TOEIC',
        sebagai : 'Nilai Skor 845',
        date : '20 Sep 2023'
    },
    {
        image : ukbi.src, 
        title : 'Ujian Kemahiran Berbahasa Indonesia',
        sebagai : 'Skor 676 (Sangat unggul)',
        date : '17 Jun 2023'
    },
    {
        image : kompeDigiup.src, 
        title : 'DigiUp Bootcamp',
        sebagai : 'Junior Web developer',
        date : '15 feb 2022'
    },
]

export const contactList =[
    {
        icon: FaInstagram, hover: 'fill-red-300', link: '#'
    }
]