//import from library 
import React, { Component } from 'react'
import { BLUE_1, GREEN_1, GRAY_1, BLUE_0, GREEN_2, WHITE, INDIGO_0, BLUE_2, YELLOW_1, GRAY_2, GRAY_3, RED_2, RED_1, YELLOW_2 } from './../utils/palette'
import HeaderListComponent from './common/header_list.component'


import { connect } from 'react-redux'
import * as action from './../redux/action/user.action'

import LabeledSelectedInputComponent from './input/labeled_selected_input.component'
export const MAIN_COLORS = [

    BLUE_1, YELLOW_1, RED_1, GREEN_1
]

export const BACKGROUND_COLORS = [
    GRAY_2, GRAY_3, RED_2, GREEN_2, YELLOW_2, INDIGO_0, GREEN_1, BLUE_2, GRAY_1
]

export const STENO_KEYBOARD_COLORS = [
    BLUE_1, YELLOW_1, INDIGO_0, GREEN_1, RED_1, BLUE_0, RED_2
]

export const NORMAL_KEYBOARD_COLORS = [
    GRAY_2, GRAY_3, RED_2, GREEN_2
]

class SettingCustomizeComponent extends Component {


    render() {
        const profile = this.props.profile;
        return (
            <div style={styles.container}>

                <HeaderListComponent title='Tùy biến' height={40} />

                <div style={styles.body}>

                    <div style={styles.row1}>
                        <div style={styles.row1_col1}>

                            <div style={styles.field_container}>
                                <LabeledSelectedInputComponent
                                    onChange={(value) => { }}
                                    label='Màu chủ đạo'
                                    domain={MAIN_COLORS}
                                    value={MAIN_COLORS[0]} />
                            </div>
                            <div style={styles.field_container}>
                                <LabeledSelectedInputComponent
                                    onChange={(value) => this.props.chooseBackgroundColor({ color: value })}
                                    label='Màu nền'
                                    domain={BACKGROUND_COLORS}
                                    value={BACKGROUND_COLORS[0]} />
                            </div>
                        </div>

                        <div style={styles.row1_col2}>

                            <div style={styles.field_container}>
                                <LabeledSelectedInputComponent
                                    onChange={(value) => this.props.chooseStenoColor({ color: value })}
                                    label='Màu bàn phím tốc ký'
                                    domain={STENO_KEYBOARD_COLORS}
                                    value={STENO_KEYBOARD_COLORS[0]} />
                            </div>

                            <div style={styles.field_container}>
                                <LabeledSelectedInputComponent
                                    // onChange={(value)=>this.props.updateInputs('business_area',value)} 
                                    label='Màu bàn phím thường'
                                    onChange={(value) => this.props.chooseKeyboardColor({ color: value })}
                                    domain={NORMAL_KEYBOARD_COLORS}
                                    value={NORMAL_KEYBOARD_COLORS[0]} />
                            </div>


                        </div>


                    </div>

                </div>


            </div>


        )
    }
}

const styles = {
    container: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: WHITE,
        borderRadius: 8,
        boxShadow: '3px 5px 3px 3px #707070'
    },
    body: {
        flex: 1,
        padding: 50,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    row1: {
        display: 'flex',
        flexDirection: 'row'
    },
    row1_col1: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column'
    },
    field_container: {
        width: '70%',
        marginBottom: 20
    },
    row1_col2: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        alignItems: 'center'
    },
    row2: {
        marginTop: 40
    }
}

const mapStateToProps = state => ({
    user_infor: state.user_infor,
});

export default connect(mapStateToProps, action)(SettingCustomizeComponent)
