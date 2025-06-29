"use client"
import Navbar from '@/components/Navbar'
import React, { useEffect, useState } from 'react'
import LetterGlitch from '@/components/loadingComp/LetterGlitch'
const clientLayout = ({ children }: { children: React.ReactNode }) => {
      const [loading, setLoading] = useState(true);
    
      useEffect(() => {
        const timer = setTimeout(( ) => {
          setLoading(false);
        },2000);
    
        return () => clearTimeout(timer);
    
      }, []);  

      if (loading) {
        return (
          <div className="flex items-center justify-center h-screen">
            {/* <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div> */}
            <LetterGlitch
                glitchSpeed={50}
                centerVignette={true}
                outerVignette={false}
                smooth={true}
            />
          </div>
        );
      }
  return (
    <div>
        <div className="relative w-full flex items-center justify-center">
          <Navbar />
        </div>
        {children}
    </div>
  )
}

export default clientLayout