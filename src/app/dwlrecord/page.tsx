import React from 'react';
import RedBrickPdf from '@/components/dwlrecord/RedBrickPdf';
import TextBubbledwlr from '@/components/dwlrecord/TextBubbledwlr';
import BoldLego from '@/components/dwlrecord/BoldLego';
import DownloadPdfButton from '@/components/dwlrecord/DownloadPdfButton';
import '../globals.css';

export default function Dwlrecord() {
    return (

        <>
            <div className='flex'>
                <div className='w-1/2 h-screen bg-[#F75E63] relative'>
                    <div className='w-fit absolute p-10 mr-29 mb-70 bottom-0 right-0'><TextBubbledwlr/></div>
                    <div className='w-fit absolute mb-4 bottom-0 right-0'><BoldLego/></div>
                </div>
                <div className='w-1/2 h-screen relative block'>
                    <div className='w-full h-fit absolute top-1/2 bottom-1/2'>
                    <a>
                    <DownloadPdfButton/>
                    </a>
                    </div>
                    
                </div>
            </div>
            <div className='right-0 ml-10 left-0 absolute top-0'><RedBrickPdf/></div>

        </>

        /*<body className=' h-screen bg-gradient-to-r from-[#F75E63] to-[#F75E63] bg-no-repeat bg-[length:50%_100%]'>
            
        <div className='ml-10 abosulte left-0 right-0 top-0 mt-10 '><RedBrickPdf/></div>

        <div className='ml-10 relative left-0 right-0 bottom-0 mt-10 w-fit'><TextBubbledwlr/></div>

        <div className='ml-10 relative left-0 right-0 bottom-0 mt-10 w-fit'><BoldLego/></div>
        <div className='m-auto abosulte w-fit'><DownloadPdfButton/></div>

        </body>*/
    );
}
