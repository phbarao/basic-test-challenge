import React, { useCallback } from "react";

export default function Button() {
  const showAllert = useCallback(() => {
    alert("OK");
  }, []);

  return <button onClick={showAllert}>Alert</button>;
}
