'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'next/navigation';
import { StaticCanvas, FabricText } from 'fabric';
import Swal from 'sweetalert2';

import qrbg from '@/assets/QRCard.png';
import qricon from '@/assets/qr-block-icon.png';
import { headwearParts } from '@/components/character-editor/headwear-parts';
import { headParts } from '@/components/character-editor/head-parts';
import { patternParts } from '@/components/character-editor/patterns';
import torso from '@/assets/character-editor/body/torso.png';
import hands from '@/assets/character-editor/body/hands.png';

import { loadImage, applyInvertFilter, createSVG, createQRSVG, SVG_SLEEVE, SVG_TORSO } from '@/utils/canvasUtils';
import { GlareCard } from '@/components/ui/glare-card';

export default function Page() {
    const scaleFactor = 0.75;
    const mobileScaleFactor = 0.5;
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const canvasRefMobile = useRef<HTMLCanvasElement | null>(null);
    const [canvasInstance, setCanvasInstance] = useState<StaticCanvas | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const params = useParams();
    const qrgenerator = params.qrgenerator as string[];
    const [userId, headwearId, headId, patternId, playerColor, patternTone] = qrgenerator;

    useEffect(() => {
        const partCategories = [headParts, headwearParts, patternParts];
        const selectedImages = [
            partCategories[0][Number(headwearId)],
            partCategories[1][Number(headId)],
            partCategories[2][Number(patternId)],
        ];

        if (!canvasRef.current) return;
        if (!canvasRefMobile.current) return;

        const canvas = new StaticCanvas(canvasRef.current, {
            width: 594 * scaleFactor,
            height: 942 * scaleFactor,
        });
        const mobileCanvas = new StaticCanvas(canvasRefMobile.current, {
            width: 594 * mobileScaleFactor,
            height: 942 * mobileScaleFactor,
        });

        // Cargar y agregar las imágenes al canvas
        const loadAndDrawImages = async () => {
            try {
                // Imagen de fondo
                const backgroundImage = await loadImage(qrbg.src, {
                    scaleX: canvas.width / 594,
                    scaleY: canvas.height / 942,
                });
                canvas.backgroundImage = backgroundImage;
                
                const mobileBackgroundImage = await loadImage(qrbg.src, {
                    scaleX: mobileCanvas.width / 594,
                    scaleY: mobileCanvas.height / 942,
                });
                mobileCanvas.backgroundImage = mobileBackgroundImage;

                // Figura 1
                await loadAndAddImage(torso.src, { left: (52 * scaleFactor), top: (5 * scaleFactor), scaleX: (0.5 * scaleFactor), scaleY: (0.5 * scaleFactor) }, canvas);
                const svg1 = await createSVG(SVG_SLEEVE.replace(/COLOR/g, playerColor), true);
                if (svg1) {
                    svg1.set({ left: (192 * scaleFactor), top: (221 * scaleFactor), scaleX: (0.5 * scaleFactor), scaleY: (0.5 * scaleFactor) });
                    canvas.add(svg1);
                }
                const svg2 = await createSVG(SVG_TORSO.replace(/COLOR/g, playerColor));
                if (svg2) {
                    svg2.set({ left: (227 * scaleFactor), top: (209 * scaleFactor), scaleX: (0.5 * scaleFactor), scaleY: (0.5 * scaleFactor) });
                    canvas.add(svg2);
                }
                await loadAndAddImage(hands.src, { left: (52 * scaleFactor), top: (5 * scaleFactor), scaleX: (0.5 * scaleFactor), scaleY: (0.5 * scaleFactor) }, canvas);

                // Figura 1 Mobile
                await loadAndAddImage(torso.src, { left: (52 * mobileScaleFactor), top: (5 * mobileScaleFactor), scaleX: (0.5 * mobileScaleFactor), scaleY: (0.5 * mobileScaleFactor) }, mobileCanvas);
                const svg1Mobile = await createSVG(SVG_SLEEVE.replace(/COLOR/g, playerColor), true);
                if (svg1Mobile) {
                    svg1Mobile.set({ left: (192 * mobileScaleFactor), top: (221 * mobileScaleFactor), scaleX: (0.5 * mobileScaleFactor), scaleY: (0.5 * mobileScaleFactor) }, mobileCanvas);
                    mobileCanvas.add(svg1Mobile);
                }
                const svg2Mobile = await createSVG(SVG_TORSO.replace(/COLOR/g, playerColor));
                if (svg2Mobile) {
                    svg2Mobile.set({ left: (227 * mobileScaleFactor), top: (209 * mobileScaleFactor), scaleX: (0.5 * mobileScaleFactor), scaleY: (0.5 * mobileScaleFactor) });
                    mobileCanvas.add(svg2Mobile);
                }
                await loadAndAddImage(hands.src, { left: (52 * mobileScaleFactor), top: (5 * mobileScaleFactor), scaleX: (0.5 * mobileScaleFactor), scaleY: (0.5 * mobileScaleFactor) }, mobileCanvas);

                // Figura 2
                await loadAndAddImage(torso.src, { left: (52 * scaleFactor), top: (444 * scaleFactor), scaleX: (0.5 * scaleFactor), scaleY: (0.5 * scaleFactor), flipY: true }, canvas);
                const svg3 = await createSVG(SVG_SLEEVE.replace(/COLOR/g, playerColor), true);
                if (svg3) {
                    svg3.set({ left: (192 * scaleFactor), top: (627 * scaleFactor), scaleX: (0.5 * scaleFactor), scaleY: (0.5 * scaleFactor), flipY: true });
                    canvas.add(svg3);
                }
                const svg4 = await createSVG(SVG_TORSO.replace(/COLOR/g, playerColor));
                if (svg4) {
                    svg4.set({ left: (227 * scaleFactor), top: (615 * scaleFactor), scaleX: (0.5 * scaleFactor), scaleY: (0.5 * scaleFactor), flipY: true });
                    canvas.add(svg4);
                }
                loadAndAddImage(hands.src, { left: (52 * scaleFactor), top: (444 * scaleFactor), scaleX: (0.5 * scaleFactor), scaleY: (0.5 * scaleFactor), flipY: true }, canvas);
                
                // Figura 2 Mobile
                await loadAndAddImage(torso.src, { left: (52 * mobileScaleFactor), top: (444 * mobileScaleFactor), scaleX: (0.5 * mobileScaleFactor), scaleY: (0.5 * mobileScaleFactor), flipY: true }, mobileCanvas);
                const svg3Mobile = await createSVG(SVG_SLEEVE.replace(/COLOR/g, playerColor), true);
                if (svg3Mobile) {
                    svg3Mobile.set({ left: (192 * mobileScaleFactor), top: (627 * mobileScaleFactor), scaleX: (0.5 * mobileScaleFactor), scaleY: (0.5 * mobileScaleFactor), flipY: true });
                    mobileCanvas.add(svg3Mobile);
                }
                const svg4Mobile = await createSVG(SVG_TORSO.replace(/COLOR/g, playerColor));
                if (svg4Mobile) {
                    svg4Mobile.set({ left: (227 * mobileScaleFactor), top: (615 * mobileScaleFactor), scaleX: (0.5 * mobileScaleFactor), scaleY: (0.5 * mobileScaleFactor), flipY: true });
                    mobileCanvas.add(svg4Mobile);
                }
                loadAndAddImage(hands.src, { left: (52 * mobileScaleFactor), top: (444 * mobileScaleFactor), scaleX: (0.5 * mobileScaleFactor), scaleY: (0.5 * mobileScaleFactor), flipY: true }, mobileCanvas);

                // Partes seleccionadas en figura 1
                for (let i = 0; i < selectedImages.length; i++) {
                    const part = selectedImages[i];
                    if (!part) continue;
                    const img = await loadImage(part.src.src, { left: (52 * scaleFactor), top: (5 * scaleFactor), scaleX: (0.5 * scaleFactor), scaleY: (0.5 * scaleFactor) });
                    applyInvertFilter(img, patternTone === 'black' && i === 2);
                    canvas.add(img);
                }

                // Partes seleccionadas en figura 1 Mobile
                for (let i = 0; i < selectedImages.length; i++) {
                    const part = selectedImages[i];
                    if (!part) continue;
                    const img = await loadImage(part.src.src, { left: (52 * mobileScaleFactor), top: (5 * mobileScaleFactor), scaleX: (0.5 * mobileScaleFactor), scaleY: (0.5 * mobileScaleFactor) });
                    applyInvertFilter(img, patternTone === 'black' && i === 2);
                    mobileCanvas.add(img);
                }
                
                // Partes seleccionadas en figura 2
                for (let i = 0; i < selectedImages.length; i++) {
                    const part = selectedImages[i];
                    if (!part) continue;
                    const img = await loadImage(part.src.src, { left: (52 * scaleFactor), top: (444 * scaleFactor), scaleX: (0.5 * scaleFactor), scaleY: (0.5 * scaleFactor), flipY: true });
                    applyInvertFilter(img, patternTone === 'black' && i === 2);
                    canvas.add(img);
                }

                // Partes seleccionadas en figura 2 Mobile
                for (let i = 0; i < selectedImages.length; i++) {
                    const part = selectedImages[i];
                    if (!part) continue;
                    const img = await loadImage(part.src.src, { left: (52 * mobileScaleFactor), top: (444 * mobileScaleFactor), scaleX: (0.5 * mobileScaleFactor), scaleY: (0.5 * mobileScaleFactor), flipY: true });
                    applyInvertFilter(img, patternTone === 'black' && i === 2);
                    mobileCanvas.add(img);
                }

                // Textos
                const urlMap = {
                    CeraPro: 'url("/fonts/cera-pro/CeraPro-Bold.woff")'
                }

                const fontCera = await new FontFace('CeraPro', urlMap.CeraPro, {
                    style: 'normal',
                    weight: 'normal'
                }).load()
                

                document.fonts.add(fontCera)
                const text1 = new FabricText(userId, {
                    left: (50 * scaleFactor),
                    top: (555 * scaleFactor),
                    fontSize: (50 * scaleFactor),
                    fill: 'black',  // Color del texto
                    fontFamily: 'CeraPro', // Fuente,
                    fontWeight: 'bold',
                    angle: 270
                });
                canvas.add(text1);
                const text2 = new FabricText(userId, {
                    left: (550 * scaleFactor),
                    top: (390 * scaleFactor),
                    fontSize: (50 * scaleFactor),
                    fill: 'black',  // Color del texto
                    fontFamily: 'CeraPro', // Fuente,
                    fontWeight: 'bold',
                    angle: 90
                });
                canvas.add(text2);

                const text1Mobile = new FabricText(userId, {
                    left: (50 * mobileScaleFactor),
                    top: (555 * mobileScaleFactor),
                    fontSize: (50 * mobileScaleFactor),
                    fill: 'black',  // Color del texto
                    fontFamily: 'CeraPro', // Fuente,
                    fontWeight: 'bold',
                    angle: 270
                });
                mobileCanvas.add(text1Mobile);
                const text2Mobile = new FabricText(userId, {
                    left: (550 * mobileScaleFactor),
                    top: (390 * mobileScaleFactor),
                    fontSize: (50 * mobileScaleFactor),
                    fill: 'black',  // Color del texto
                    fontFamily: 'CeraPro', // Fuente,
                    fontWeight: 'bold',
                    angle: 90
                });
                mobileCanvas.add(text2Mobile);

                // QR
                await loadAndAddImage(qricon.src, { left: -(5 * scaleFactor), top: 0, scaleX: (1 * scaleFactor), scaleY: (1 * scaleFactor) }, canvas);
                const qrSVG = await createQRSVG(Number(userId));
                if (qrSVG) {
                    qrSVG.set({ left: (210 * scaleFactor), top: (381 * scaleFactor), scaleX: (9 * scaleFactor), scaleY: (9 * scaleFactor) });
                    canvas.add(qrSVG);
                }

                // QR Mobile
                await loadAndAddImage(qricon.src, { left: -(5 * mobileScaleFactor), top: 0, scaleX: (1 * mobileScaleFactor), scaleY: (1 * mobileScaleFactor) }, mobileCanvas);
                const qrSVGMobile = await createQRSVG(Number(userId));
                if (qrSVGMobile) {
                    qrSVGMobile.set({ left: (210 * mobileScaleFactor), top: (381 * mobileScaleFactor), scaleX: (9 * mobileScaleFactor), scaleY: (9 * mobileScaleFactor) });
                    mobileCanvas.add(qrSVGMobile);
                }
                
                setCanvasInstance(canvas);

                // Renderizar todo
                canvas.renderAll();
                mobileCanvas.renderAll();
            } catch (error) {
                console.error(error);
            }
        };

        const loadAndAddImage = async (src: string, options: object | undefined, canvas: StaticCanvas) => {
            const img = await loadImage(src, options);
            canvas.add(img);
        };

        loadAndDrawImages()

        return () => {
            canvas.dispose(); // Cleanup
            mobileCanvas.dispose(); // Cleanup
        };
    }, [headId, headwearId, patternId, patternTone, playerColor, userId,]);
        
    const uploadImage = () => {
        setIsLoading(true);
        const dataUrl = canvasInstance?.toDataURL({ format: 'png', multiplier: 2 });
        if (!dataUrl) return;
        fetch(`/api/qr-image/${userId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                lego_image: dataUrl,
                url_image: `/cardgenerator/${userId}/${headwearId}/${headId}/${patternId}/${playerColor}/${patternTone}`
            })
        }).then(async (res) => {
            const data = await res.json();
            Swal.fire({
                icon: 'success',
                title: data.message,
                text: '¡Tu tarjeta ha sido registrada!',
                showConfirmButton: false,
                timer: 2500,
                timerProgressBar: true
            });
            setIsLoading(false);
        }).catch((err) => {
            console.error(err);
            Swal.fire({
                icon: 'error',
                title: 'Error al registrar la tarjeta',
                text: 'Inténtalo de nuevo más tarde',
                confirmButtonText: 'Entendido',
            });
            setIsLoading(false);
        });
    };

    const downloadImage = () => {
        setIsLoading(true);
        try {
            const dataUrl = canvasInstance?.toDataURL({ format: 'png', multiplier: 2 });
            if (!dataUrl) return;

            const a = document.createElement('a');
            a.href = dataUrl;
            a.download = 'qr-sac.png';
            a.click();
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className='w-full min-h-fit h-dvh pb-5 gap-5 bg-blacksac flex flex-col items-center'>
            <div className='flex flex-col md:flex-row h-fit w-full md:w-108 px-5 pt-5 md:px-0 gap-5 justify-between'>
                <button
                    onClick={() => uploadImage()}
                    className={`w-full relative inline-flex h-12 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#7DDE92_0%,#037171_50%,#7DDE92_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-8 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                        {isLoading ? 'Cargando...' : 'Registrar Imagen'}
                    </span>
                </button>

                <button
                    onClick={() => downloadImage()}
                    className={`w-full relative inline-flex h-12 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-8 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                        {isLoading ? 'Cargando...' : 'Descargar Imagen'}
                    </span>
                </button>
            </div>

            <GlareCard>
                <canvas ref={canvasRef} width={594 * scaleFactor} height={942 * scaleFactor}></canvas>
            </GlareCard>
            <canvas className='md:hidden' ref={canvasRefMobile} width={594 * mobileScaleFactor} height={942 * mobileScaleFactor}></canvas>
        </div>
    );
}