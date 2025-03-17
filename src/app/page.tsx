"use client";

import { useState, useEffect } from "react";
import LegoWall from "@/components/loading/LegoWall";
import Schedule from "@/components/schedule/Schedule";


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
          <Schedule/>
        </main>
      )}
    </div>
  );
}
