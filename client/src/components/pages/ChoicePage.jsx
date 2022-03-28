// import React, { useState, useEffect, Link } from 'react';
// import './ChoicePage.css';

// const ChoicePage = () => {
//   const [choiceState, setChoiceState] = useState([]);

//   useEffect(() => {
//     let choiceState = [
//       //dummyData
//       { id: 1, community: 'Coding' },
//       { id: 2, community: 'Machine Learning' },
//       { id: 3, community: 'Web Development' },
//       { id: 4, community: 'Electronics' },
//       { id: 5, community: 'Music' },
//       { id: 6, community: 'Fine Arts' },
//       { id: 7, community: 'Debating' },
//       { id: 8, community: 'Metaverse' },
//     ];

//     setChoiceState(
//       choiceState.map((c) => {
//         return {
//           select: false, // checkbox bool
//           id: c.id,
//           community: c.community,
//         };
//       })
//     );
//   }, []);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     choiceState.map((c) => {
//       if (c.select === true) {
//         // call backend from here for fetching user's communities
//         console.log(c.community); // state with (select === true) are user's choice for community
//       }
//     });
//   };

//   return (
//     <div>
//       <h1 className='heading-cb'>
//         Browse top growing communities. Find the communities of your interests!
//       </h1>

//       <form className='form-cb'>
//         {choiceState.map((c, i) => (
//           <div className='inputGroup'>
//             <input
//               id={c.id}
//               onChange={(event) => {
//                 let checked = event.target.checked;
//                 setChoiceState(
//                   choiceState.map((choice) => {
//                     if (c.id === choice.id) {
//                       choice.select = checked;
//                     }
//                     return choice;
//                   })
//                 );
//               }}
//               type='checkbox'
//               checked={c.select}
//             ></input>
//             <label for={c.id}>{c.community}</label>
//           </div>
//         ))}
//       </form>
//       <div className='button' onClick={handleSubmit}>
//         <span className='btn-span'>
//           <a href=''></a>
//         </span>
//       </div>
//     </div>
//   );
// };

// export default ChoicePage;

import React,{Component} from 'react'
import './ChoicePage.css';

class ChoicePage extends Component{
    constructor(props){
        super(props)
        this.state={
          choiceState: [
            { select: false, id: 1, community: 'Coding' },
              { select: false, id: 2, community: 'Machine Learning' },
              { select: false, id: 3, community: 'Web Development' },
              { select: false, id: 4, community: 'Electronics' },
              { select: false, id: 5, community: 'Music' },
              { select: false, id: 6, community: 'Fine Arts' },
              { select: false, id: 7, community: 'Debating' },
              { select: false, id: 8, community: 'Metaverse' },
          ],
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit = (e) => {
          e.preventDefault();
          this.state.choiceState.map((c) => {
            if (c.select === true) {
              // call backend from here for fetching user's communities
              console.log(c.community); // state with (select === true) are user's choice for community
            }
          });
          this.props.history.push("/forum");
        };

    
    render(){
        return(
            <div>
              <h1 className='heading-cb'>
                Browse top growing communities. Find the communities of your interests!
              </h1>

              <form className='form-cb'>
                {this.state.choiceState.map((c, i) => (
                  <div className='inputGroup'>
                    <input
                      id={c.id}
                      onChange={(event) => {
                        let checked = event.target.checked;
                        this.setState(
                          this.state.choiceState.map((choice) => {
                            if (c.id === choice.id) {
                              choice.select = checked;
                            }
                            return choice;
                          })
                        );
                      }}
                      type='checkbox'
                      checked={c.select}
                    ></input>
                    <label for={c.id}>{c.community}</label>
                  </div>
                ))}
              </form>

              <div className='button' onClick={this.handleSubmit}>
                <span className='btn-span'>
                  <a href=''></a>
                </span>
              </div>
            </div>
        )

    }

}
export default ChoicePage;

