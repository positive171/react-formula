import './Formula.css';
import { useState } from 'react';

function AmbiguousCase() {
    const [angleA, setAngleA] = useState(0);
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    const [result, setResult] = useState("Press Calculate");

    function ambiguousCase(e) {
        e.preventDefault();

        const numA = parseFloat(a);
        const numB = parseFloat(b);
        const angle = (parseFloat(angleA)) * Math.PI / 180;

        const h = numB * Math.sin(angle);

        if ((h == 0) || (numA == 0)) {
            setResult("Invalid input")
        } else if (angle < Math.PI / 2) {
            if (numA < h) setResult("No Triangle");
            else if (numA === h) setResult("Right Triangle");
            else if (numA > numB) setResult("One Triangle");
            else setResult("Two Triangles");
        } else {
            if (numA <= numB) setResult("No Triangle");
            else setResult("One Triangle");
        }
    }

    return (
        <form onSubmit={ambiguousCase}>
            <section>
                <h2>Ambiguous Case</h2>
                <label>Angle A: <input type="number" id="angleA" value={angleA} onChange={(event) => setAngleA(event.target.value)} required /></label>
                <label>Side a: <input type="number" id="ambiguousSideA" value={a} onChange={(event) => setA(event.target.value)} required /></label>
                <label>Side b: <input type="number" id="ambiguousSideB" value={b} onChange={(event) => setB(event.target.value)} required /></label>
                <label>Triangle Type (result): <input type="text" id="ambiguousResult" disabled value={result} readOnly /></label>
                <button id="button2" type="submit">Calculate</button>
            </section>
        </form>
    )
}

export default AmbiguousCase;
