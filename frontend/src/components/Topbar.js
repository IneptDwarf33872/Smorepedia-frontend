import React, {useState} from 'react'
import Logo from '../assets/smorelogo.png'
import './Topbar.css'
import {query} from '../middleware'

const results = [

]
const titles = query('/byprop', {prop: 'title'});
const pages = [];
for(let index in titles){
    pages.push(titles[index]);
}

const curateResults = (soFar) => {
    console.log("Made it" + soFar)
    results.length = 0;
    let count = 0;
    for(let i = 0; i < pages.length; i++){
        if(pages[i].substring(0, soFar.length) === soFar){
            results.push(
                <div key={count}>
                    {pages[i]}
                </div>
            )
            count++;
        }
        if(count === 5){
            break;
        }
    }
}



function Topbar() {
    const [userInBar, setUserInBar] = useState(false);
    const [searchVal, setSearchVal] = useState('')
    const handleInputChange = (event) =>{
        const newValue = event.target.value;
        setSearchVal(newValue);
        if(searchVal.length === 0){
            results.length = 0;
            console.log('len to 0')
        }
        console.log(newValue)
        curateResults(newValue);
    }
    const onBarFocus = () => {
        if(searchVal === ''){
            curateResults('')
        }
        setUserInBar(true)
    }
    const onBarDefocus = () => {
        setUserInBar(false)
    }
  return (
    <div className='Topbar'>
        <div className='left'>
            <img src={Logo} className='logo'/>
            <header className='logofont'>S'morepedia</header>  
        </div>
        <div className='right'> 
            <form className = "search-box">
                <input
                className='search-bar'
                type = "search" 
                placeholder = "Search S'morepedia" 
                onFocus={onBarFocus}
                onBlur={onBarDefocus}
                value={searchVal}
                onChange={handleInputChange}
                />
            </form>
            <div className='results' style={{display: userInBar ? 'flex': 'none'}}>
                {results.map((element, index) => (
                    <React.Fragment key={index}>
                        {element}
                    </React.Fragment>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Topbar
