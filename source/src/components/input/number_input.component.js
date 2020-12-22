//import from library 
import React, {Component} from 'react'
import { TEXT_SIZES } from '../../utils/constants'
import { BLACK, BLUE_1, WHITE } from '../../utils/palette'
import { Range } from 'react-range';

export default class NumberInputComponent extends Component {

    constructor(props){
        super(props);
        let value=this.props.value!==undefined?this.props.value:''
        this.state={
            value:value
        };
        // this.props.onChange(value)
    }
    render(){
        const value=this.state.value;

        const domain=this.props.domain;
        const unit=this.props.unit!==undefined?this.props.unit:'$';
        const label=this.props.label;
        const step=this.props.step!==undefined?this.props.step:1
        return (
            <div style={styles.container}>
                <text style={styles.label}>
                    {label}
                </text>
                
                <div style={styles.value_container}>
                
                    <text style={styles.value}>
                            {
                                value+ ' '+unit
                            }

                    </text>

                </div>
                {/* <div style={{marginTop:15,width:'80%',height:5,backgroundColor: '#392583'}}> */}
                    <Range
                        step={step}   
                        min={domain[0]}      
                        max={domain[1]}
                        values={value}
                        onChange={(values) => {
                            this.setState({value:values});

                            if(this.props.onChange)
                            this.props.onChange(values)
                        }}
                        renderTrack={({ props, children }) => (
                                <div
                                    {...props}
                                    style={{
                                        ...props.style,...styles.track }}>
                                    {children}
                                </div>
                        )}
                        renderThumb={({ props }) => (
                                <div
                                    {...props}
                                    style={{
                                        ...props.style,
                                        ...styles.thumb}}/>
                        )}
                    />
                {/* </div> */}
            </div>
        )
    }
}


const styles={
    container:{
        display:'flex',
        width: '100%',
        flexDirection: 'column'
    },
    label:{
        fontSize:TEXT_SIZES.NORMAL,
        color:BLACK,
        marginBottom:10
    },
    value_container:{
        width: '100%',
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        marginBottom:20
    },
    value:{
        fontSize:TEXT_SIZES.SMALL,
        color:WHITE,
        padding: 7,
        backgroundColor:BLACK,
        borderRadius:5
    },
    track:{
        height: 5, 
        width: '100%',
        backgroundColor: BLUE_1
    },
    thumb:{
        height: 24,
        width:24,
        borderRadius:12,
        backgroundColor: BLUE_1 
    }
}
