import React from 'react';
import Technical from './1.jpg'
import NonTechnical from './2.jpg'
import Misc from './3.jpg'

class SocietyMain extends React.Component{
    constructor()
    {
        super();
        this.state = {};
    }
    
    render()
    {
        return (
            <main>
                <div className='Society-Heading'>
                    <hr />
                    <h2>Societies</h2>
                    <hr />
                </div>
                
                <div className='Context'>
                    <div className='Society-Content'>
                        <img src={Technical} alt="Technical societies" class="img"/>
                        <img src={NonTechnical} alt="Non-Technical societies" class="img"/>
                        <img src={Misc} alt="Literary societies" class="img"/>
                    </div>
                </div>
            </main>
        )
    }
}

export default SocietyMain;