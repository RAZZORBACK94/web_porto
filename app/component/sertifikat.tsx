import Image from "next/image"
import eduImage from '../../public/Gedung-SMK-MLG.jpg'
import { HiOutlineLocationMarker } from "react-icons/hi";
import SertifScroll from "./scroll/sertifScroll";
import Button from "./custom/button";



export default function Sertifikat() {
  return (
    <div className="container space-y-5">

      {/* title */}
      <div className=" text-center">
        <p className="text-5xl font-bold">Sertifikat</p>
        <p className="text-lg">Sertifikat terbaru yang diraih</p>
      </div>

      <div className="flex hide-scrollbar justify-center overflow-y-auto h-[500px] w-full">
        {/* card eduaction */}
        <SertifScroll/>
      </div>

      <div className='flex justify-center'>
      <Button link="#" bgColor="bg-[#FF0000]" text="Selengkapnya"/>
      </div>
    </div>
  )
}
