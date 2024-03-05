import "./App.css";
import Button from "./component/button";
import { useState } from "react";
function Square({ value ,ubahIsi}) {
  
  return <button onClick={ubahIsi}  className="square">{value}</button>;
}
function Board() {
  const [isNext,setNext]=useState(true)
  const [isi,setisi]=useState(Array(9).fill(null))
  function ubahIsi(i){
    if (isi[i] || CalculationWinner(isi)) {
      return;
    }
    if(isi[i]){
      return 
    }
    const nextArray=isi.slice()
    if(isNext){
      nextArray[i]='x'
    }else{
      nextArray[i]='O'
    }
    setisi(nextArray)
    setNext(!isNext)
    
  }
  function CalculationWinner(isi){
    const cond=[[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6],[0,3,6],[1,4,7],[2,5,8]]
    for(let i=0;i<cond.length;i++){
      const [a,b,c]=cond[i]
      if(isi[a]&&isi[a]===isi[b]&&isi[a]===isi[c]){
        return  isi[a]
      }
    }
    return false
  }
  let status;
  if(CalculationWinner(isi) ){
    status=`The Winner is `+CalculationWinner(isi)
  }else{
    status=`Next Player `+ (isNext? "x":"O")
  }
  return (
    <>
      <div class="">{status}</div>
      <div className="row">
        <Square value={isi[0]} ubahIsi={()=>ubahIsi(0)}/>
        <Square value={isi[1]} ubahIsi={()=>ubahIsi(1)}/>
        <Square value={isi[2]} ubahIsi={()=>ubahIsi(2)}/>
        <Square value={isi[3]} ubahIsi={()=>ubahIsi(3)}/>
        <Square value={isi[4]}ubahIsi={()=>ubahIsi(4)}/>
        <Square value={isi[5]}ubahIsi={()=>ubahIsi(5)}/>
        <Square value={isi[6]}ubahIsi={()=>ubahIsi(6)}/>
        <Square value={isi[7]}ubahIsi={()=>ubahIsi(7)}/>
        <Square value={isi[8]}ubahIsi={()=>ubahIsi(8)}/>
      </div>
    </>
  );
}


export default Board;
