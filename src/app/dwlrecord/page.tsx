import React from 'react';
import '../globals.css';
import RedBrickPdf from '@/components/dwlrecord/RedBrickPdf';
import TextBubbledwlr from '@/components/dwlrecord/TextBubbledwlr';
import BoldLego from '@/components/dwlrecord/BoldLego';
import DownloadPdfButton from '@/components/dwlrecord/DownloadPdfButton';

export default function Dwlrecord() {
    return (
        <div className='w-full h-full'>
        <div className='flex flex-row absolute top-0 left-0'>        
            <div className=' relative bg-[#F75E63] w-1/2 h-screen'></div>
            <div className='relative bg-white w-1/2 h-screen right-0 left-0'></div>
        </div>

        <div className='ml-10 absolute left-0 right-0 top-0 mt-10'><RedBrickPdf/></div>

        <div className='ml-10 absolute left-0 right-0 top-0 mt-10'><TextBubbledwlr/></div>
        
        <div className='ml-10 absolute left-0 right-0 top-0 mt-10'><BoldLego/></div>

        <div className='w-fit h-fit absolute m-auto'><DownloadPdfButton/></div>
        </div>
    );
}
