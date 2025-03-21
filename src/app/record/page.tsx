import Image from 'next/image';

export default function Record() {
  return (
    <div className='w-full h-full'>
      <Image
        src="/Asistencia.svg" 
        alt="Asistencia"
        fill 
        className='mt-20'
        style={{ objectFit: 'cover' }} 
      />
    </div>
  );
}