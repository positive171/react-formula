import { useState } from 'react';
import './Formula.css';

function HeronsFormula(props) {
    const [show, setShow] = useState(true);
    const a = parseFloat(document.getElementById('sideA').value);
    const b = parseFloat(document.getElementById('sideB').value);
    const c = parseFloat(document.getElementById('sideC').value);
    const s = (a + b + c) / 2;
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    document.getElementById('heronResult').value = !isNaN(area) ? area.toFixed(2) + " units²" : "Invalid input";

  return (
    <div></div>
  )
}

export default HeronsFormula