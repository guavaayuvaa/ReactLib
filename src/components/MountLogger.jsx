// src/components/MountLogger.jsx
import React, { useEffect } from "react";

const MountLogger = () => {
  useEffect(() => {
    console.log("Mounted");
    return () => {
      console.log("Unmounted");
    };
  }, []);

  return <div>Check console for mount/unmount logs.</div>;
};

export default MountLogger;
