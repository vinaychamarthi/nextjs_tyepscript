import Link from "next/link";
import {MdOutlineLocalLaundryService, MdOutlineLocationOn} from 'react-icons/md'

export default function Home() {
  return (
    <>
      <div className="container text-center my-20">
      <h4 className="text-xl mb-5">MODERN & UPSCALE LAUNDROMAT</h4>
      <h1 className="text-6xl">A Better Place to do Your Laundry</h1>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <a href="#" className="flex items-center gap-1 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 uppercase"> <MdOutlineLocalLaundryService className='text-2xl' /> Book Service</a>
        <Link href="/contact" className="flex items-center gap-1 rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-800 shadow-sm hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white uppercase"> <MdOutlineLocationOn className='text-2xl' /> View Location</Link>
      </div>
    </div>
    </>
  )
}
