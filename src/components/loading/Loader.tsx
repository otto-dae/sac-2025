"use client";

import { useEffect, useState } from "react";
import LegoWall from "@/components/loading/LegoWall";

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 4000));
      setIsLoading(false);
    };

    loadData();
  }, []);
  return <div>{isLoading ? 
        <LegoWall /> 
  : ""}
  </div>;
};

export default Loader;