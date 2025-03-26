'use client';

import React, { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import CardImagePage  from "@/components/card-generator/CardImagePage";
import CharacterEditorPage from "@/components/character-editor/CharacterEditorPage";

export default function Page() {
  const [renderPage, setRenderPage] = useState<'editor' | 'card' | 'loading'>('loading');
  const router = useRouter();
  const params = useParams();
  const exp = params.exp as string;

  useEffect(() => {
    if (!exp) {
      router.push('/');
      return;
    }

    fetch(`/api/qr-image/${exp}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setRenderPage('editor');
          return;
        }
        setRenderPage('card');
      })
      .catch((err) => {
        console.error(err);
        router.push('/error');
      });
  }, [exp, router]);

  return (
    <>
      {renderPage === 'loading' && <div>Loading...</div>}
      {renderPage === 'editor' && <CharacterEditorPage exp={exp} />}
      {/* TODO: Fix this */}
      {renderPage === 'card' && <CardImagePage/> }
    </>
  );
}