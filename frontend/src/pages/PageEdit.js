import React, { useState, useEffect } from 'react'
import './PageEdit.css'



function PageEdit() {
    const [data2, setdata2] = useState('Updated');
    

    return (
    <div className='All'>
        
        <div className='content'>
            <button>hi</button>
            <form>
                <textarea className='editor' rows='100' cols={window.innerWidth / 15} style={{display: (data2 != "Not Updated"? "inline-block" : "none")}} value={data2} onChange={(event) => setdata2(event.target.value)}>
                    Hatton
                </textarea>

            </form>
        </div>
    </div>
  )
}

export default PageEdit
