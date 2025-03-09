'use client'

import Image, { StaticImageData } from 'next/image'
import React, { useState } from 'react';
import { headwearParts } from '@/components/character-editor/headwear-parts';
import { headwearThumbnails } from '@/components/character-editor/headwear-thumbnails';
import { headParts } from '@/components/character-editor/head-parts';
import { headThumbnails } from '@/components/character-editor/head-thumbnails';
import { patternParts } from '@/components/character-editor/patterns';
import { patternThumbnails } from '@/components/character-editor/pattern-thumbnails';
import torso from '@/assets/character-editor/body/torso.png';
import hands from '@/assets/character-editor/body/hands.png';
import armClothe from '@/assets/character-editor/body/arm-clothe.svg';
import chestClothe from '@/assets/character-editor/body/chest-clothe.svg';

export default function Page() {
    const [selectedCategory, setSelectedCategory] = useState<'head' | 'headwear' | 'clothe'>('head');
    const [semantic, setSemantic] = useState<'white' | 'black'>('white');
    const [clotheColor, setClotheColor] = useState();
    const characterParts = {
        // add thumbnails for the parts
        head: headParts.map((part, i) => ({ ...part, thumbnail: headThumbnails[i].src })),
        headwear: headwearParts.map((part, i) => ({ ...part, thumbnail: headwearThumbnails[i].src })),
        clothe: patternParts.map((part, i) => ({ ...part, thumbnail: patternThumbnails[i].src })),
    }
    const [selectedParts, setSelectedParts] = useState({
        head: headParts[0].src,
        headwear: headwearParts[0].src,
        clothe: patternParts[0].src,
    })

    const handlePartSelection = (category: 'head' | 'headwear' | 'clothe', part: { id: number; src: StaticImageData, thumbnail?: StaticImageData }) => {
        setSelectedParts({ ...selectedParts, [category]: part.src });
    }

    const categories = [
        { key: 'clothe', label: 'Cuerpo' },
        { key: 'head', label: 'Cara' },
        { key: 'headwear', label: 'Cabello' },
    ]

    return (
        <div className='flex flex-col bg-amber-200 items-center justify-center h-screen space-y-4'>
            {/* Character Preview */}
            <div className='relative w-1/3 h-1/2 bg-amber-50'>
                <div className='absolute top-0 z-50'>
                    <Image
                        src={hands}
                        width={500}
                        height={500}
                        alt='Hands preview'
                    />
                </div>
                <div className='absolute top-0 z-40'>
                    <Image
                        src={selectedParts.headwear}
                        width={500}
                        height={500}
                        alt='Headwear preview'
                    />
                </div>
                <div className='absolute top-0 z-30'>
                    <Image
                        src={selectedParts.head}
                        width={500}
                        height={500}
                        alt='Head preview'
                    />
                </div>
                <div className='absolute top-0 z-20'>
                    <Image
                        src={selectedParts.clothe}
                        width={500}
                        height={500}
                        alt='Pattern preview'
                    />
                </div>
                <div className='absolute top-0 z-10 mix-blend-multiply w-full max-w-[500px] aspect-square'>
                    <svg className='w-full h-full' viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M352.787 657.849H295.041H294.235L280 605.206L291.818 567.066L362.725 433.041H398.984L352.787 657.849Z" fill="#42CDFF"/>
                        <path d="M352.787 657.849H295.041H294.235L280 605.206L291.818 567.066L362.725 433.041H398.984L352.787 657.849Z" stroke="#42CDFF"/>
                        <path d="M673.213 657.581H730.959H731.765L746 604.937L734.182 566.798L663.275 432.772H627.016L673.213 657.581Z" fill="#42CDFF"/>
                        <path d="M673.213 657.581H730.959H731.765L746 604.937L734.182 566.798L663.275 432.772H627.016L673.213 657.581Z" stroke="#42CDFF"/>
                    </svg>
                </div>
                <div className='absolute top-0 z-10 w-full max-w-[500px] aspect-square'>
                    <svg className='w-full h-full' viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M518.371 682.29H349.698L400.112 433.441C402.193 420.76 408.385 412.489 423.694 410.479C439.004 408.468 518.371 410.479 518.371 410.479V682.29Z" fill="#42CDFF" stroke="#42CDFF"/>
                        <path d="M507.762 682.377H676.435L626.021 433.529C623.941 420.848 617.749 412.577 602.439 410.566C587.13 408.556 507.762 410.566 507.762 410.566V682.377Z" fill="#42CDFF" stroke="#42CDFF"/>
                    </svg>
                </div>
                <div className='absolute top-0 z-0'>
                    <Image
                        src={torso}
                        width={500}
                        height={500}
                        alt='Body preview'
                    />
                </div>
            </div>

            {/* Customization Panel */}
            <div className='w-1/2 justify-center flex bg-black text-white z-60 rounded-full'>
                {/* Tabs */}
                <div className='flex space-x-4'>
                    {categories.map(category => (
                        <button
                            key={category.key}
                            className={`py-2 px-4 ${selectedCategory === category.key ? 'bg-neutral-700' : 'bg-blacksac'}`}
                            onClick={() => setSelectedCategory(category.key)}
                        >
                            {category.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Options Grid */}
            <div className='w-1/2 h-1/3 grid grid-cols-5 place-items-center overflow-auto scrollbar p-4 gap-y-5 bg-white border-2 z-60 rounded-2xl'>
                {characterParts[selectedCategory].map(part => (
                    <div
                        key={part.id}
                        className={`flex-shrink-0 w-24 h-24 p-3 border-2 rounded-lg grid grid-template-stack justify-center items-center cursor-pointer transition-all duration-300 ${
                            selectedParts[selectedCategory] === part.id
                                ? 'border-blue-500 bg-blue-50'
                                : 'border-gray-200 hover:border-blue-300 hover:scale-105'
                        }`}
                        onClick={() => handlePartSelection(selectedCategory, part)}
                    >
                        {/* Thumbnail */}
                        {part.thumbnail && (
                            <Image
                                className={`grid-area-stack ${selectedCategory === 'clothe' && 'invert'}`}
                                src={part.thumbnail}
                                width={600}
                                height={600}
                                alt={`${selectedCategory} thumbnail`}
                            />
                        )}
                        <div className='bottom-1 right-1 stroke-green-500 grid-area-stack'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                        </div>
                    </div>
                ))
                }
            </div>
            <div className='w-full flex justify-end'>
                <button className='bg-blacksac hover:bg-neutral-700 text-white font-bold py-2 px-4 rounded'>
                    ¡Terminé!
                </button>
            </div>
        </div>
    );
}