'use client'

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import dynamic from 'next/dynamic'

const DynamicLego = dynamic(
  () => import('@/components/qrsearch/LegoInput'),
  { ssr: false }
)

export default function Page() {
  const router = useRouter();
  const [code, setCode] = useState('');

  const codeHandler = (code: string) => {
    router.push(`/charactereditor/${code}`);
    return console.log(code);
  }

  return (
    <div className="w-full h-full bg-whitesac">
      <div className="w-full h-[92dvh] flex items-center justify-center bg-[url(/bg-qrSearch.png)] bg-cover bg-no-repeat">
        <form action={() => codeHandler(code)} className="p-8 gap-4 flex flex-col items-center justify-center rounded-2xl bg-whitesac">
          <h1 className="text-2xl font-bold">¿Cuál es tu expediente?</h1>
          <DynamicLego value={code} onChange={setCode} maxLength={6} />
          <div className="w-full text-end">
            <button
              type="submit"
              className={`w-full md:w-fit bg-blue-400 py-2 px-6 font-bold text-lg text-white rounded-2xl transition-all
                            ${code.length === 6
                  ? 'cursor-pointer hover:scale-105'
                  : 'cursor-not-allowed opacity-50'
                }`}
              disabled={code.length !== 6}
            >
              Buscar
            </button>
          </div>
        </form>
      </div>
    </div>

  );
}