//import from library 
import React, {Component} from 'react'
import { TEXT_SIZES } from '../../utils/constants'
import { BLACK, GRAY_1, GRAY_2, GRAY_3, WHITE } from '../../utils/palette'


export default  class TextareaInputComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            value:''
        };
    };
    
    render(){
        const value=this.props.value;
        const label=this.props.label!==undefined?this.props.label:'';
        return (
            <div style={styles.container}>
                 <text style={{color:BLACK,fontSize: TEXT_SIZES.NORMAL}}>
                        {label}
                </text>
                <textarea 
                    value={value}
                    onChange={e=>{
                      //  this.setState({value:e.target.value});
                        if(this.props.onChange)
                        this.props.onChange(e.target.value)
                    }}
                    style={styles.textarea}
                        color={GRAY_2}/>
            </div>
        )
    }
}

const styles={
    container:{
        display:'flex',
        width:'100%',
        height:'100%',
        alignSelf:'baseline',
        flexDirection: 'column'
    },
    textarea:{
        flex:1,
        padding:10,
        backgroundColor: WHITE,
        fontSize:TEXT_SIZES.NORMAL,
        borderColor:GRAY_3,
        borderWidth:2,
        borderRadius:10
    }
}

