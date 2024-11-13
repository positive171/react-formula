import './HeronsFormula.css';
import { useState } from 'react';

function HeronsFormula() {

  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);
  const [s, setS] = useState(0);
  const [result, setResult] = useState("Press Calulate");

  const s = (a + b + c) / 2;
  const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  document.getElementById('heronResult').value = !isNaN(area) ? area.toFixed(2) + " units²" : "Invalid input";

  function heronsFormula(e) {
    e.preventDefault();
    const discriminat = b * b - 4 * a * c;

    if (discriminat > 0) {
      setRoots(`x1 = ${(-b + Math.sqrt(discriminat)) / (2 * a)}, x2 = ${(-b - Math.sqrt(discriminat)) / (2 * a)}`);
    } else if (discriminat == 0) {
      setRoots(`x1 = x2 = ${(-b + Math.sqrt(discriminat)) / (2 * a)}`);
    } else {
      setRoots("No Real Roots!");
    }
  }

  return (

    <div class="formula">
      <section>

        <h2>Heron's Formula</h2>
        <label>Side a: <input type="number" id="sideA" value={a} onChange={(event) => { setA(event.target.value) }} required ></label>
        <label>Side b: <input type="number" id="sideB" value={a} onChange={(event) => { setA(event.target.value) }} required ></label>
        <label>Side c: <input type="number" id="sideC" value={a} onChange={(event) => { setA(event.target.value) }} required ></label>
        <label>Area (result): <input type="text" id="heronResult" disabled value={roots} readOnly></label>
        <button id="button1">Calculate</button>

      </section>
    </div>

  )
}

export default HeronsFormula;