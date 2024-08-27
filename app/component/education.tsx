import Image from "next/image"
import eduImage from '../../public/Gedung-SMK-MLG.jpg'
import { HiOutlineLocationMarker } from "react-icons/hi";
import Link from "next/link";



export default function Education() {
  return (
    <div className="container space-y-10">

      {/* title */}
      <div className="text-white text-center">
        <p className="text-5xl font-bold">Pendidikan</p>
        <p className="text-lg">Pendidikan Terakhir</p>
      </div>

      <div className="relative w-full h-max">

        {/* card eduaction */}
        <div className=" relative z-10 w-full bg-white rounded-3xl overflow-hidden shadow-2xl">
          <Image src={eduImage} alt="school IMage" />
          <div className="flex flex-col bg-white p-3 space-y-2">
            <Link href={'https://www.smktelkom-mlg.sch.id/'}>
              <p className="text-center text-2xl font-semibold text-[#006ACC] hover:text-red-500 transition-all">SMK Telkom Malang</p>
            </Link>

            <Link href={'https://www.bing.com/maps?osid=dd31292c-2f2f-4413-91cc-2598fd9962c3&cp=-7.976862~112.656362&lvl=17&pi=0&imgid=ded7b547-285b-49a3-8f2b-eb2938d2ce9f&v=2&sV=2&form=S00027'} className="flex items-center space-x-2 group">
              <HiOutlineLocationMarker className="scale-150 group-hover:stroke-blue-500 transition-all" />
              <p className="text-md group-hover:text-blue-500 group-hover:underline transition-all">Jl. Danau Ranau, Sawojajar</p>
            </Link>
            <ul className="list-disc ml-5">
              <li className="text-md">Rekayasa Perangkat Lunak</li>
              <li className="text-md">Expertise React JS dan Node JS</li>
            </ul>
          </div>
        </div>

        {/* cosmetic */}
        

      </div>
    </div>
  )
}
