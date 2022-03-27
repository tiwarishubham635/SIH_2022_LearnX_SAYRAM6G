import React from 'react';

function OpportunityCard(props){
    return(
        <div className='Opportunities-Content'>
            <div className='Opportunity-Content-heading'>
            <h2>{props.item.name}</h2>
            </div>
            <br/>
            <br/>
            <div className="Opportunity-Content-elements">
                
                <iframe width="300" height="200" src={props.item.video} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <p>{props.item.description}<a href={props.item.link}>{props.item.link}</a></p>
            </div>
        </div>
    )
}

export default OpportunityCard;