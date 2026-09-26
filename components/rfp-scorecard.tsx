'use client';
import { useState, useId } from 'react';
const criteria=['Price','Scope compliance','References','Quality plan','Insurance and safety','Site review'];
export default function RfpScorecard(){
  const id=useId();
  const [weights,setWeights]=useState([30,25,15,15,10,5]);
  const [scores,setScores]=useState(['','','','','','']);
  const total=weights.reduce((sum,value)=>sum+value,0);
  const complete=scores.every(value=>value!==''&&Number(value)>=0&&Number(value)<=5);
  const score=weights.reduce((sum,weight,i)=>sum+weight*Number(scores[i])/5,0);
  return <section className="download-panel" aria-labelledby={`${id}-title`}><h2 id={`${id}-title`} className="text-2xl">Check your RFP weights</h2><p>Illustrative one-provider scorecard. Enter ratings from 0 to 5. The tool calculates a score only when weights total 100%. Entries stay in this page and are not sent or saved.</p><div className="audit-table-wrap"><table className="audit-table"><thead><tr><th>Criterion</th><th>Weight (%)</th><th>Rating (0-5)</th></tr></thead><tbody>{criteria.map((label,i)=><tr key={label}><th scope="row">{label}</th><td><input className="w-20 bg-background p-2 border rounded" aria-label={`${label} weight percent`} type="number" min="0" max="100" value={weights[i]} onChange={e=>setWeights(weights.map((value,n)=>n===i?Math.min(100,Math.max(0,Number(e.target.value)||0)):value))}/></td><td><input className="w-20 bg-background p-2 border rounded" aria-label={`${label} rating`} type="number" min="0" max="5" step="0.5" value={scores[i]} onChange={e=>setScores(scores.map((value,n)=>n===i?e.target.value:value))}/></td></tr>)}</tbody></table></div><p role="status">Weights: {total}%. {total!==100?'Adjust weights to total 100% before comparing scores.':!complete?'Enter all six ratings between 0 and 5.':`Weighted score: ${score.toFixed(1)} / 100.`}</p><button type="button" className="text-link" onClick={()=>{setWeights([30,25,15,15,10,5]);setScores(['','','','','','']);}}>Reset example</button></section>;
}
