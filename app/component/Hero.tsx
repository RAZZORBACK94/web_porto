import { Button } from "./custom"

export default function Hero() {
  return (
    <div className="container space-y-5">
      <div className="flex flex-col space-y-3 text-6xl font-bold">
        <p className="">Hi Friend,</p>
        <p className="">I'm <span className="text-[#006ACC]">Ahmad Yusuf</span></p>
      </div>

      <p className="text-3xl font-semibold w-3/4 ">Siswa SMK Telkom Malang yang berdedikasi dan memiliki semangat yang kuat terhadap pengembangan keterampilan dan pertumbuhan karir</p>

      <div className="flex space-x-5">
        <Button link="#" bgColor="bg-[#006ACC]" text="Download CV"/>
        <Button link="#" bgColor="bg-[#FF0000]" text="Download Portfolio"/>
      </div>

      
    </div>
  )
}
