import React from 'react';
import './progress.css'

export default class Progress extends React.Component{

         render(){

                 return(

                         <div>
                            <progress max="100" value="0" onClick={(value)=>{
                                    if (value<=100,value++){
                                            console.log(value)
                                            return 111
                                    }
                            }} > 111</progress>


                         </div>





                 )

         }

}