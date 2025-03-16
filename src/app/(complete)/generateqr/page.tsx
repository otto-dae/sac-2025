'use client' //I dotn like this :(

import DownloadPdfLand from '@/components/dwlrecord/DownloadPdfLand';
import React, { useState } from 'react';

export default function GeneraQr() {

    const [isVisible, setVisible] = useState(false);

    const IdkFrontEnd = () => {
        setVisible(true)
    }

    return (

        <>
            <button onClick={IdkFrontEnd}>puchame</button>

            <div className={`h-80 w=80 ${isVisible ? 'block' : 'hidden'}`}><DownloadPdfLand/></div>
        </>


    );
}
