import { Contact, Education, Hero, Project } from "@/app/component";
import Image from "next/image";
import Sertifikat from "./component/sertifikat";

export default function Home() {
  return (
    <main className="mt-16">
      <section className=" h-screen relative overflow-hidden flex items-center justify-center">
        <Hero/>
        
        <div className="w-60 h-60 bg-[#006ACC] rounded-full absolute  -right-40 top-40 "/>
        <div className="w-52 h-52 bg-[#FF0000] rounded-full absolute z-20 -right-24 top-80 "/>
      </section>
      
      <section className="bg-[#006ACC] h-screen relative overflow-hidden flex items-center justify-center">
        <Education/>

        <div className="absolute top-44 left-5 rounded-2xl w-48 h-20 bg-[#FF0000]"/>
        <div className="absolute bottom-20 right-5 rounded-2xl w-48 h-20 bg-[#FF0000]"/>
      </section>
      
      <section className="h-screen relative overflow-hidden flex items-center justify-center">
        <Project/>

        <div className='absolute z-30 rounded-full top-48 right-20 w-16 h-16 bg-[#FF0000]'/>
        <div className="absolute z-10 bottom-36 left-20 rounded-2xl w-48 h-20 bg-[#FF0000]"/>
      </section>
      
      <section className="h-screen relative flex items-center justify-center">
        <Sertifikat/>
      </section>
      
      <section className="h-[50vh] bg-black rounded-t-3xl relative flex items-center justify-center">
        <Contact/>
      </section>
          
    </main>
  );
}
