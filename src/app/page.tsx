"use client";

import { useState, useEffect } from "react";
import LegoWall from "@/components/loading/LegoWall";


export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 10000));
      setIsLoading(false);
    };

    loadData();
  }, []);

  return (
    <div>
      {isLoading ? (
        <LegoWall />
      ) : (
        <main>
          <p>Landing Page</p>
        </main>
      )}
    </div>
  );
}
