import React from 'react'
import { Link } from 'react-router-dom'

const IndexPages = () => {
    
    return (
        <div className="flex items-center justify-between p-4 h-20  border-b-2 border-gray-200">
          <header className="flex items-center justify-between w-full p-4">
    
            <a href="https://www.airbnb.co.in/" className="flex items-center gap-1 text-red-500">
              <i className="bx bxl-airbnb text-3xl"></i>
              <span className="font-bold text-xl">airbnb</span>
            </a>
    
            <div className="flex items-center  gap-4 border-2 border-gray-200 shadow-lg py-2 px-4 rounded-full">
              <div className="font-bold text-sm border-r-2 border-gray-200 pr-2">
                Anywhere
              </div>
              <div className="font-bold text-sm border-r-2 border-gray-200 pr-2">
                Anyweek
              </div>
              <div className="flex gap-2 justify-center items-center">
                <div className="font-normal text-gray-500 text-sm">
                  Add guests
                </div>  
                <a href="" className="bg-red-500 rounded-full w-8 h-8 text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 pl-2 pt-2 text-white">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                  </svg>
                </a>
              </div>
            </div>
    
            <div className="flex items-center gap-4">
              <div className="font-bold text-sm">
                Airbnb your home
              </div>
              <div className="text-xl">
                <i className="bx bx-globe" ></i>
              </div>
              <Link to={"/login"} className="flex items-center  gap-4 border-2 border-gray-300 py-2 px-4 rounded-full">
                <div className="">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                </div>
                <div className="">
                  <i className="bx bx-user-circle text-2xl"></i>
                </div>
              </Link>
            </div>
    
          </header>
        </div>
    );    

}

export default IndexPages