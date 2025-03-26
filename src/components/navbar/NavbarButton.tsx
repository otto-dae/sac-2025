import Link from "next/link";
import Image from "next/image";
import React from "react";

interface NavbarButtonProps{
    linkUrl : string,
    styling : string,
    imageUrl : string,
    width : number,
    height : number,
    tStyling : string,
    text : string

}

const NavbarButton =({ linkUrl,
    styling,
    imageUrl,
    width,
    height,
    tStyling,
    text } : NavbarButtonProps ) => {
    return(
        <Link href={linkUrl}>
            <div className={`w-fit uppercase h-fit self-stretch justify-start ${styling} items-center gap-2 flex transition-all duration-100 hover:scale-104`}>
                <Image src={imageUrl} alt="Picture of SAC" width={width} height={height} unoptimized={true}/>
                <div className={`${tStyling} text-whitesac font-normal font-['Cera Pro'] leading-normal`}>{text}</div>
            </div>
        </Link>
    )
}

export default NavbarButton;