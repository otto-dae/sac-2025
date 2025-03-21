import Image from "next/image";
import Link from "next/link";

interface props {
  image: string;
  url: string;
  title: string;
  color: string;
  identation?: string;
}

const SectionButtons = ({ image, url, title, color, identation }: props) => {

  return (
    <Link href={url} className={`flex flex-row w-fit justify-center items-center gap-3 text-xl mb-4 p-1 ${identation} rounded-4xl`}>
      <div className={`${color} p-2 rounded-full w-10 h-10`}>
        <Image alt="" src={image} />
      </div>

      {title}
    </Link>
  );
};

export default SectionButtons;
