import React from "react";
import { useState } from "react";

export const PassGen = () => {
  const [length, setLength] = useState(8);
  const [includeUpper, setIncludeUpper] = useState(true);
  const [includeLower, setIncludeLower] = useState(true);
  const [includeNumber, setIncludeNumber] = useState(true);
  const [includeSymbol, setIncludeSymbol] = useState(true);
  const [password, setPassword] = useState("");

  const generatePassword = () => {
    let charset = "";
    if (includeUpper) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeLower) charset += "abcdefghijklmnopqrstuvwxyz";
    if (includeNumber) charset += "0123456789";
    if (includeSymbol) charset += "!@#$%^&*()_+-";
    let genPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      genPassword += charset[randomIndex];
    }
    setPassword(genPassword);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    alert("Password copied to clipboard");
  };

  return (
    <div className="password-generator">
      <h2>Strong Password Generator</h2>
      <div className="input-group">
        <label htmlFor="">Password Length</label>
        <input
          type="number"
          id="num"
          value={length}
          onChange={(e) => parseInt(setLength(e.target.value))}
        />
      </div>
      <div className="checkbox-group">
        <input
          type="checkbox"
          id="uppercase"
          checked={includeUpper}
          onChange={(e) => setIncludeUpper(e.target.checked)}
        />
        <label htmlFor="uppercase">Include Uppercase Case</label>
      </div>
      <div className="checkbox-group">
        <input
          type="checkbox"
          id="lower"
          checked={includeLower}
          onChange={(e) => setIncludeLower(e.target.checked)}
        />
        <label htmlFor="lower">Include Lower Case</label>
      </div>
      <div className="checkbox-group">
        <input
          type="checkbox"
          id="numbers"
          checked={includeNumber}
          onChange={(e) => setIncludeNumber(e.target.checked)}
        />
        <label htmlFor="numbers">Include Number</label>
      </div>
      <div className="checkbox-group">
        <input
          type="checkbox"
          id="symbol"
          checked={includeSymbol}
          onChange={(e) => setIncludeSymbol(e.target.checked)}
        />
        <label htmlFor="symbol">Include Symbol</label>
      </div>
      <button id="generate" onClick={generatePassword}>
        Generate Password
      </button>
      <div className="generated-password">
        <input type="text" readOnly value={password} />
        <button className="copy-btn" onClick={copyToClipboard}>
          Copy
        </button>
      </div>
    </div>
  );
};
