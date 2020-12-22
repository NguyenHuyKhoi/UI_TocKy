//import from library 
import React, {Component} from 'react'
import { TEXT_SIZES } from '../../utils/constants'
import { BLACK } from '../../utils/palette'

import { convertFullDateToOnlyDay } from '../../utils/helper'

export default class LabeledInputComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            value:''
        };
       // this.props.onChange(value);
    }

    // componentDidMount=()=>{
    //     this.props.onChange(this.state.value)
    // }
    
    
    render(){
        const value=this.props.value;

        const inline=this.props.inline!==undefined?this.props.inline:false;
        const label=this.props.label!==undefined?this.props.label:''
      
        return (

            <div style={{...styles.container,
                    flexDirection: inline?'row':'column'}}>

                <div style={{flex:1}}>
            
                    <text style={{...styles.label}}>
                        {label}
                    </text>
                </div>
              
                <div style={{flex:3}}>
                <input 
                    onChange={e=>{
                        this.setState({value:e.target.value});

                        if(this.props.onChange)
                        this.props.onChange(e.target.value)
                    }}
                    value={value}
                    style={{
                        ...styles.input,
                        fontSize: TEXT_SIZES.NORMAL,
                        marginTop:inline?0:15,
                        marginLeft:inline?15:0,
                        border:'default',
                        outline:'default'
                    }}
                    />
                </div>
            
            </div>
        )
    }
}

const styles={
    container:{
        display:'flex',
        width: '100%'
    },
    label:{
        color:BLACK,fontSize: TEXT_SIZES.NORMAL
    },
    input:{
        width:'100%',
    }
}
