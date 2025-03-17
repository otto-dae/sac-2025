import Image from 'next/image';

export default function Attendance() {
  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
      <Image
        src="/Asistencia.svg" 
        alt="Asistencia"
        fill 
        style={{ objectFit: 'cover' }} 
      />
    </div>
  );
}