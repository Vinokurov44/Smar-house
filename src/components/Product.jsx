import React, { useState, useEffect } from "react";

export default function Product(props) {
  const localStorageKey = `${props.val}_${props.id}`; // Add unique identifier to key

  const [color, setColor] = useState(() => {
    const savedColor = localStorage.getItem(localStorageKey);
    return savedColor ? savedColor === "true" : false;
  });

  useEffect(() => {
    localStorage.setItem(localStorageKey, color.toString());
  }, [color, localStorageKey]);

  const change = () => {
    setColor(!color);
  };

  return (
    <div
      onClick={change}
      style={{width: "22%",height: "0.8cm",marginLeft: "39%",marginTop:'0.1cm',backgroundColor: color ? "#26DF54" : "#f14253",borderRadius:'7px'
      }}
    >
      <div style={{fontFamily:'Book Antiqua',paddingTop:'4px'}}>{props.val}</div>
    </div>
  );
}
