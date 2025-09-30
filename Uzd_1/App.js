import React, { useState } from "react";

export default function App() {
  const [colors, setColors] = useState(["black", "black", "black", "black"]);

  const toggleColor = (index) => {
    const newColors = [...colors];
    newColors[index] = newColors[index] === "black" ? "blue" : "black";
    setColors(newColors);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#e5e5e5",
        padding: "20px"
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "30px",
          backgroundColor: "lightgray",
          padding: "20px",
          borderRadius: "10px"
        }}
      >
        <button
          style={{
            border: "2px solid yellow",
            backgroundColor: "white",
            padding: "10px 20px"
          }}
          onClick={() => toggleColor(0)}
        >
          Button1
        </button>
        <button
          style={{
            border: "2px solid yellow",
            backgroundColor: "white",
            padding: "10px 20px"
          }}
          onClick={() => toggleColor(1)}
        >
          Button2
        </button>
        <button
          style={{
            border: "2px solid yellow",
            backgroundColor: "white",
            padding: "10px 20px"
          }}
          onClick={() => toggleColor(2)}
        >
          Button3
        </button>
        <button
          style={{
            border: "2px solid yellow",
            backgroundColor: "white",
            padding: "10px 20px"
          }}
          onClick={() => toggleColor(3)}
        >
          Button4
        </button>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "15px",
          backgroundColor: "pink",
          padding: "20px",
          marginTop: "20px",
          width: "100%",
          borderRadius: "10px"
        }}
      >
        <div
          style={{
            border: "2px solid hotpink",
            padding: "10px 20px",
            color: colors[0]
          }}
        >
          Text1
        </div>
        <div
          style={{
            border: "2px solid hotpink",
            padding: "10px 20px",
            color: colors[1]
          }}
        >
          Text2
        </div>
        <div
          style={{
            border: "2px solid hotpink",
            padding: "10px 20px",
            color: colors[2]
          }}
        >
          Text3
        </div>
        <div
          style={{
            border: "2px solid hotpink",
            padding: "10px 20px",
            color: colors[3]
          }}
        >
          Text4
        </div>
      </div>
    </div>
  );
}
