
import './Formula.css';
import { useState } from 'react';

function HeronsFormula() {
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    const [c, setC] = useState(0);
    const [result, setResult] = useState("Press Calculate");

    function heronsFormula(e) {
        e.preventDefault();

        const numA = parseFloat(a);
        const numB = parseFloat(b);
        const numC = parseFloat(c);

        const s = (numA + numB + numC) / 2;
        const area = Math.sqrt(s * (s - numA) * (s - numB) * (s - numC));

        if (!isNaN(area) && area > 0) {
            setResult(`${area.toFixed(2)} units²`);
        } else {
            setResult("Invalid input");
        }
    }

    return (
        <form onSubmit={heronsFormula}>
            <h2>Heron's Formula</h2>
            <label>Side a: <input type="number" id="sideA" value={a} onChange={(event) => setA(event.target.value)} required /></label>
            <label>Side b: <input type="number" id="sideB" value={b} onChange={(event) => setB(event.target.value)} required /></label>
            <label>Side c: <input type="number" id="sideC" value={c} onChange={(event) => setC(event.target.value)} required /></label>
            <label>Area (result): <input type="text" id="heronResult" disabled value={result} readOnly /></label>
            <button id="button1" type="submit">Calculate</button>
        </form>
    )
}

export default HeronsFormula;
