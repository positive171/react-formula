import './Formula.css';
import { useState } from 'react';

function NewtonsMethod() {
    const [guess, setGuess] = useState(0);
    const [result, setResult] = useState("Press Calculate");

    function newtonsMethod(e) {
        e.preventDefault();

        let root = parseFloat(guess);

        for (let i = 0; i < 100; i++) {
            const fx = (6 * Math.pow(root, 4)) - (13 * Math.pow(root, 3)) - (18 * Math.pow(root, 2)) + (7 * root) + 6;
            const fpx = (24 * Math.pow(root, 3)) - (39 * Math.pow(root, 2)) - (36 * root) + 7;

            const newRoot = root - fx / fpx;

            if (Math.abs(fx) < 0.0000001 || Math.abs(newRoot - root) < 0.0000001) break;

            root = newRoot;
        
        }
        setResult(`${root.toFixed(2)}`);
    }
        return (
            <form onSubmit={newtonsMethod}>
                <section>
                    <h2>Newtons Method</h2>
                    <label>Root Guess: <input type="number" id="sideA" value={guess} onChange={(event) => setGuess(event.target.value)} required /></label>
                    <label>Root Approximation (result): <input type="text" id="heronResult" disabled value={result} readOnly /></label>
                    <button id="button3" type="submit">Calculate</button>
                </section>
            </form>
        )
    
}
export default NewtonsMethod;