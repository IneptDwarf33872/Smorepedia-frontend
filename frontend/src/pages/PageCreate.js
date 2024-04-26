import React, { useState, useEffect } from 'react'
import './PageCreate.css'

function PageCreate() {
    const [data2, setdata2] = useState(' Updated');

    return (
    <div className='All'>
        
        <div className='content'>
            <button>Hey

            </button>
            <form>
                <textarea className='editor' rows='10' cols={window.innerWidth / 15} style={{display: (data2 != "Not Updated"? "inline-block" : "none")}} value={data2} onChange={(event) => setdata2(event.target.value)}>
                    
                </textarea>
            </form>
        </div>
    </div>
  )
}

export default PageCreate
