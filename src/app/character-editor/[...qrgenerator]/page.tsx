'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { StaticCanvas, FabricImage, FabricText, filters, loadSVGFromString, util } from 'fabric';

import qrbg from '@/assets/QRCard.png';
import qricon from '@/assets/qr-block-icon.png';
import { headwearParts } from '@/components/character-editor/headwear-parts';
import { headParts } from '@/components/character-editor/head-parts';
import { patternParts } from '@/components/character-editor/patterns';
import torso from '@/assets/character-editor/body/torso.png';
import hands from '@/assets/character-editor/body/hands.png';

import generateQRCode from '@/components/character-editor/CreateQR';

export default function Page({ params }) {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [canvasInstance, setCanvasInstance] = useState<StaticCanvas | null>(null);
    const router = useRouter()
    const { qrgenerator } = React.use(params); // Obtener el slug de la URL
    const [headwearId, headId, patternId, playerColor, patternTone, userId] = qrgenerator;

    useEffect(() => {
        const partCategories = [headParts, headwearParts, patternParts]; // Orden de partes
        const selectedImages = [
            partCategories[0][Number(headwearId)], // headwear
            partCategories[1][Number(headId)],     // head
            partCategories[2][Number(patternId)],  // pattern
        ];

        if (!canvasRef.current) return;

        // Crear el canvas
        const canvas = new StaticCanvas(canvasRef.current, {
            width: 594,
            height: 942,
        });

        setCanvasInstance(canvas);

        // Función para cargar imágenes correctamente
        const loadImage = (src: string, options = {}) => {
            return new Promise<FabricImage>((resolve, reject) => {
                const imgElement = new window.Image();
                imgElement.src = src;
                imgElement.onload = () => {
                    const fabricImg = new FabricImage(imgElement, options);
                    resolve(fabricImg);
                };
                imgElement.onerror = () => reject(`Error al cargar la imagen: ${src}`);
            });
        };

        const applyInvertFilter = (image, shouldInvert) => {
            if (shouldInvert) {
                const invertFilter = new filters.Invert();
                image.filters.push(invertFilter);
                image.applyFilters(); // Aplica el filtro
            }
        };

        const createSVG1 = () => {
            const svgMarkup = `
                <svg viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M352.787 657.849H295.041H294.235L280 605.206L291.818 567.066L362.725 433.041H398.984L352.787 657.849Z" fill="#${playerColor}"/>
                    <path d="M352.787 657.849H295.041H294.235L280 605.206L291.818 567.066L362.725 433.041H398.984L352.787 657.849Z" stroke="#${playerColor}"/>
                    <path d="M673.213 657.581H730.959H731.765L746 604.937L734.182 566.798L663.275 432.772H627.016L673.213 657.581Z" fill="#${playerColor}"/>
                    <path d="M673.213 657.581H730.959H731.765L746 604.937L734.182 566.798L663.275 432.772H627.016L673.213 657.581Z" stroke="#${playerColor}"/>
                </svg>
            `;
            return loadSVGFromString(svgMarkup)
                .then((parsedSVG) => {
                    // Obtener los objetos de la propiedad "objects"
                    const objects = parsedSVG.objects;
                    // Agrupar los elementos SVG
                    const svgObject = util.groupSVGElements(objects, {});
                    svgObject.globalCompositeOperation = 'multiply'
                    return svgObject;
                })
                .catch((error) => {
                    console.error('Error al crear el SVG:', error);
                });
        };

        const createSVG2 = () => {
            const svgMarkup = `
                <svg viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M518.371 682.29H349.698L400.112 433.441C402.193 420.76 408.385 412.489 423.694 410.479C439.004 408.468 518.371 410.479 518.371 410.479V682.29Z" fill="#${playerColor}" stroke="#${playerColor}"/>
                    <path d="M507.762 682.377H676.435L626.021 433.529C623.941 420.848 617.749 412.577 602.439 410.566C587.13 408.556 507.762 410.566 507.762 410.566V682.377Z" fill="#${playerColor}" stroke="#${playerColor}"/>
                </svg>
            `;
            return loadSVGFromString(svgMarkup)
                .then((parsedSVG) => {
                    // Obtener los objetos de la propiedad "objects"
                    const objects = parsedSVG.objects;
                    // Agrupar los elementos SVG
                    const svgObject = util.groupSVGElements(objects, {});
                    return svgObject;
                })
                .catch((error) => {
                    console.error('Error al crear el SVG:', error);
                });
        };

        const createQRSVG = () => {
            const svgMarkup = generateQRCode(userId);
            return loadSVGFromString(svgMarkup)
                .then((parsedSVG) => {
                    // Obtener los objetos de la propiedad "objects"
                    const objects = parsedSVG.objects;
                    // Agrupar los elementos SVG
                    const svgObject = util.groupSVGElements(objects, {});
                    return svgObject;
                })
                .catch((error) => {
                    console.error('Error al crear el SVG:', error);
                });
        };

        // Cargar y agregar las imágenes al canvas
        const loadAndDrawImages = async () => {
            try {
                // Imagen de fondo
                const backgroundImage = await loadImage(qrbg.src, {
                    scaleX: canvas.width / 594,
                    scaleY: canvas.height / 942,
                });
                canvas.backgroundImage = backgroundImage;

                // body
                const bodyImage1 = await loadImage(torso.src, { left: 52, top: 5, scaleX: 0.5, scaleY: 0.5 });
                canvas.add(bodyImage1);
                const svg1 = await createSVG1();
                svg1.set({ left: 192, top: 221, scaleX: 0.5, scaleY: 0.5 });
                canvas.add(svg1);
                const svg2 = await createSVG2();
                svg2.set({ left: 227, top: 209, scaleX: 0.5, scaleY: 0.5 });
                canvas.add(svg2);  
                const handsImage1 = await loadImage(hands.src, { left: 52, top: 5, scaleX: 0.5, scaleY: 0.5 });
                canvas.add(handsImage1);

                const bodyImage2 = await loadImage(torso.src, { left: 52, top: 444, scaleX: 0.5, scaleY: 0.5, flipY: true });
                canvas.add(bodyImage2);
                const svg3 = await createSVG1();
                svg3.set({ left: 192, top: 627, scaleX: 0.5, scaleY: 0.5, flipY: true });
                canvas.add(svg3);
                const svg4 = await createSVG2();
                svg4.set({ left: 227, top: 615, scaleX: 0.5, scaleY: 0.5, flipY: true });
                canvas.add(svg4);  
                const handsImage2 = await loadImage(hands.src, { left: 52, top: 444, scaleX: 0.5, scaleY: 0.5, flipY: true });
                canvas.add(handsImage2);
                
                for (let i = 0; i < selectedImages.length; i++) {
                    const part = selectedImages[i];
                    const img = await loadImage(part.src.src, { left: 52, top: 5, scaleX: 0.5, scaleY: 0.5 });
                    applyInvertFilter(img, patternTone === 'black' && i === 2);
                    canvas.add(img);
                }
                
                for (let i = 0; i < selectedImages.length; i++) {
                    const part = selectedImages[i];
                    const img = await loadImage(part.src.src, { left: 52, top: 444, scaleX: 0.5, scaleY: 0.5, flipY: true });
                    applyInvertFilter(img, patternTone === 'black' && i === 2);
                    canvas.add(img);
                }

                const text1 = new FabricText(userId, {
                    left: 50,
                    top: 555,
                    fontSize: 50,
                    fill: 'black',  // Color del texto
                    fontFamily: 'Cera Pro', // Fuente,
                    fontWeight: 'bold',
                    angle: 270
                });
                canvas.add(text1);
                const text2 = new FabricText(userId, {
                    left: 550,
                    top: 390,
                    fontSize: 50,
                    fill: 'black',  // Color del texto
                    fontFamily: 'Cera Pro', // Fuente,
                    fontWeight: 'bold',
                    angle: 90
                });
                canvas.add(text2);

                const qrIconImage = await loadImage(qricon.src, { left: -5, top: 0 });
                canvas.add(qrIconImage);

                const qrSVG = await createQRSVG();
                qrSVG.set({ left: 210, top: 381, scaleX: 9, scaleY: 9 });
                canvas.add(qrSVG);

                // Renderizar todo
                canvas.renderAll();
            } catch (error) {
                console.error(error);
            }
        };

        loadAndDrawImages();

        return () => canvas.dispose(); // Cleanup
    }, []);

    // Función para exportar la imagen final
    const exportImage = () => {
        if (!canvasInstance) return;
        const dataUrl = canvasInstance.toDataURL({ format: 'png' });
        console.log(dataUrl);
    };

    return (
        <div className='bg-black'>
            {/* Canvas */}
            <canvas ref={canvasRef} width="594" height="942"></canvas>

            {/* Botón para exportar la imagen */}
            <button onClick={exportImage} className="bg-amber-400 cursor-pointer p-2 rounded">
                Generar Imagen
            </button>
        </div>
    );
}