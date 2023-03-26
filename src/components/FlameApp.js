import React, { useState } from 'react'

const FlameApp = () => {

    const [nameF , setNameF] = useState('');
    const [nameS , setNameS] = useState('');
    const [result , setResult] = useState('');


    const calRelation = ()=>{
        if(nameF === '' || nameS === ''){
            setResult('Please Enter Valid input');
            return;
        }
    }

    let remaninfNameF = nameF;
    let remaninfNameS = nameS;

    for(let i=0;i<nameF.length;i++){
        if(nameS.includes(nameF.charAt(i))){
            remaninfNameF = remaninfNameF.replace(nameF.charAt(i), '');
            remaninfNameS = remaninfNameS.replace(nameF.charAt(i), '');
        }
    }
    const totlLeng = remaninfNameF.length + remaninfNameS.length;
    const flame = ['Siblings', 'Friends', 'Love', 'Affection', 'Marriage', 'Enemy'];

    setResult(flame[totlLeng%6]);

    const clearInputPart =()=>{
        setNameF('');
        setNameS('');
        setResult('')
    };

  return (
    <div>
        <input type="text" value={nameF} onChange={(e)=> setNameF(e.target.value)}  data-testid="input1" />
        <input type="text" value={nameS} onChange={(e)=> setNameS(e.target.value)}  data-testid="input2" />

        <button onClick={calRelation} data-testid="calculate_relationship">Calculate Relationship Future</button>
        <button onClick={clearInputPart}>Clear</button>
        <h3 data-testid="answer">{result}</h3>
    </div>
  )
}

export default FlameApp