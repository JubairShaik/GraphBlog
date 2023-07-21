'use client'
import React, { useState, useEffect } from 'react';

import Link from 'next/link';
// import { getCategories } from '../services';


const categories = [
  {name:"React",slug:"dev"},
 

]



const Header = () => {


  // const [categories, setCategories] = useState([]);

  // useEffect(() => {
  //   getCategories().then((newCategories) => {
  //     setCategories(newCategories);
  //   });
  // }, []);

  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-blue-400 py-8">
        <div className="md:float-left block">
          <Link href="/">
            <span className="cursor-pointer font-bold text-4xl text-white">GraphBLOG</span>
          </Link>
        </div>


        {/* All the Categories of the Navbar Are Shown Here  */}
        {/* {categories comes from GraphCMS} */}

        <div className="hidden md:float-left bg-red-500  md:contents">
          {categories.map((category, index) => (
            // its Always better to code the categories on Dummycategories{ArrayData} instead of fetching ''}
            // <Link key={index} href={`/category/${category.slug}`}>
            //   <span className="md:float-right mt-2 align-middle text-white ml-4 
            //   font-semibold cursor-pointer">{category.name}</span>
            // </Link>
          
              <span  key={index} className="md:float-right mt-2 align-middle text-white ml-4 
              font-semibold cursor-pointer">{category.name}
              </span> 

          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
