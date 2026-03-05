"use client"

import { useState, useEffect } from "react";

// This loading component only shows if loading takes longer than 1 second
const Loading = () => {
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(null);
    }, 3000);
    
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="relative w-full h-full min-h-[300px] min-w-[300px] flex items-center justify-center overflow-hidden">
      {loading ? (
        <div>Loading...</div>
      ) : (
        null
      )}
    </div>
  )
}

export default Loading;