import './Formula.css';
import { useState } from 'react';

function PolynomialFunction() {
    const [coefficients, setCoefficients] = useState('');
    const [exponents, setExponents] = useState('');
    const [xValue, setXValue] = useState(0);
    const [equation, setEquation] = useState('');
    const [result, setResult] = useState(0);
  
    function polynomialFunction(j) {
        j.preventDefault();
        const c = coefficients.split(' ').map(Number);
        const e = exponents.split(' ').map(Number);
        const x = parseFloat(xValue);
        let equal = ""; 
        let eva = 0;

        for (let i = 0; i < c.length; i++) {
            const term = `${c[i]}x^${e[i]}`;
            equal += i > 0 && c[i] >= 0 ? `+${term}` : term;
            eva += c[i] * Math.pow(x, e[i]);
        }
        setEquation(equal);
        setResult(eva);
    }
        return (
            <form onSubmit={polynomialFunction}>
                <section>
                    <h2>Polynomial Function</h2>
                    <label>Coefficients: <input type="text" id="coefficients" value={coefficients} onChange={(event) => setCoefficients(event.target.value)} required /></label>
                    <label>Exponents: <input type="text" id="exponents" value={exponents} onChange={(event) => setExponents(event.target.value)} required /></label>
                    <label>x Value: <input type="number" id="xValue" value={xValue} onChange={(event) => setXValue(event.target.value)} required /></label>
                    <label>Equation (result): <input type="text" id="polynomialEquation" disabled value={equation} readOnly /></label>
                    <label>Evaluation Result (result): <input type="text" id="polynomialResult" disabled value={result} readOnly /></label>
                    <button id="button4" type="submit">Calculate</button>
                </section>
            </form>
        )
    }

export default PolynomialFunction;
