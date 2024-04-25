import React, { useState } from 'react'
import './PageNormal.css'

const input = `
{^Header 1^} = h2
Hey im teddy and im writing a paragraph.Coolthings.

Cooltgihina.

{Header 2} = h3
Paragraph 2 line 1.
Paragraph 2 line 2.

Paragraph 3.

`;
const infobox = [


];
//asidhashdhaohdlkh  
//{History} 
//hkjagkdgkajsgdj
//jdkljsahdjhakjd
const subsections = [


];
let numofobjects = 0;
const readInput = (input1) => {
  //  let sections = [];
 
    let currentHeader = "";
    let currentParagraph;
    let headerflag = true;
    let inHeader = false;
    let currentText = "";
    for (let i = 0; i < input.length; i++){
        const char = input1[i];
        if(!inHeader){
            if (char === "{"){
             inHeader = true;
             subsections.push(
                <p>
                    {currentText}
                </p>
             );
             
            currentHeader = "";
             currentText = "";
            }else if(i + 1 < input1.length && char === '\n'){
                subsections.push(
                    <p>
                    {currentText}
                    </p>
                );
                subsections.push(
                    <br/>
                    //Someone shrink this god damn br
                );
                currentText = "";
            }else{

                currentText += char;
            }
        }else{
            //reset header
            if (char === "^"){ //{ followed by ^}
                headerflag = false;
                
            } else if (char === "}"){
                inHeader = false;
                if(!(currentHeader.trim() === "")){
                    if(!headerflag){
                        headerflag = true;
                        subsections.push(
                            <h2 key={numofobjects}> 
                            {currentHeader}
                            </h2>
                         )
                    }else{
                        subsections.push(              //add to subsections array
                            <h3 key={numofobjects}>  
                            {currentHeader}
                            </h3>
                        )
                    }
                }
            } else {
                currentHeader += char;             //add char to header if not { or }
            }    
        }
    }
    return subsections
};
const result = readInput(input);
console.log(result);


function PageNormal() {
    return (
    <div className='All'>
        <div className='content'>
            <button >
                Click Me
            </button>
        {subsections.map((element, index) => (
        <React.Fragment key={index}>
          {element}
        </React.Fragment>
      ))}
        </div>
    </div>
  )
}

export default PageNormal
