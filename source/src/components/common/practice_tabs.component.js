//import from library 
import React, {Component} from 'react'
import { TEXT_SIZES } from '../../utils/constants';
import { BLACK, BLUE_1, GRAY_4, WHITE } from '../../utils/palette';

import {connect }from 'react-redux'
import * as action from '../../redux/action/user.action'
import {Link} from 'react-router-dom';

const tabs=[
    {
        label:'Phím'
    },
    {
        label:'Âm/quy tắc'
    },
    {
        label:'Từ'
    },
    {
        label:'Câu'
    },
    {
        label:'Văn bản'
    },
]

class TabBar extends Component{
    render(){
        const item=this.props.item;
        const is_focused=this.props.is_focused
        return (
            <Link
                onClick={this.props.onClick}
                style={{...styles.item_container,
                    textDecoration: "none",
                backgroundColor: is_focused?WHITE:GRAY_4}}>
                <text style={{...styles.item_label, color:is_focused?BLUE_1:BLACK}}>
                    {item.label}
                </text>
            </Link>
        )
    }
}
 class PracticeTabsBarComponent extends Component {
    render(){
        const practice_mode=this.props.user_infor.practice_mode;
        return (
            <div style={styles.container}>
                {
                    tabs.map((item,index)=>
                        <TabBar
                            key={''+index} 
                            item={item}
                            is_focused={index===practice_mode}
                            onMouseOver={e=>e.target.style.cursor = "pointer"}
                            onClick={()=>this.props.choosePracticeMode(
                                {
                                    practice_mode:index
                                }
                            )}/>
                    )
                }   
        </div>

        )
    }
}

const styles={
    item_container:{
        display:'flex',
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    item_label:{
        fontSize:TEXT_SIZES.NORMAL
    },
    container:{
        width:'100%',
        height:30,
        display:'flex',
        flexDirection: 'row'
    }
}

const mapStateToProps = state => ({
	user_infor: state.user_infor,
});

export default connect(mapStateToProps,action)(PracticeTabsBarComponent)