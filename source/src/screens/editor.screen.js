//import from library 
import React, { Component } from 'react'

import { BODY } from '../utils/constants'
import { BLUE_1, BLUE_0, GRAY_6, GREEN_1, RED_1, WHITE, YELLOW_1 } from '../utils/palette'
import HeaderListComponent from '../components/common/header_list.component'
import ButtonComponent from '../components/common/button.component'
import { connect } from 'react-redux'
import * as action from './../redux/action/user.action'
import HeaderBarComponent from '../components/common/header_bar.component'
import TextareaInputComponent from '../components/input/textarea_input.component'
import DictionaryModal from '../components/modal/dictionary.modal'


class EditorScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show_modal: false,
            value: '',
            typeType: false

        }
    }

    openModal = () => {
        this.setState({
            show_modal: true
        })
    }

    closeModal = () => {
        this.setState({
            show_modal: false
        })
    }



    render() {
        return (

            <div style={{ ...styles.container, backgroundColor: this.props.user_infor.background_color }}>

                <DictionaryModal
                    is_open={this.state.show_modal}
                    clickCancel={this.closeModal}

                    clickOk={() => {
                        alert('Đã lưu lại tìm kiếm này!!!')
                        this.closeModal();
                    }} />

                <HeaderBarComponent />

                <div style={styles.body}>
                    <div style={{ flex: 1 }} />
                    <div style={styles.content_body}>

                        <HeaderListComponent title='Soạn thảo' />

                        <div style={{
                            flexDirection: 'row', height: '80%', display: 'flex',
                            backgroundColor: WHITE, padding: 20,
                            boxShadow: '5px 5px 5px 5px #707070'
                        }}>
                            <div style={{ width: '90%', height: '100%' }}>
                                <TextareaInputComponent
                                    value={this.state.value}
                                    onChange={(value) => this.setState({ value })} />
                            </div>
                            <div style={{
                                width: '20%', height: '100%', display: 'flex',
                                flexDirection: 'column', alignItems: 'center'
                            }}>

                                <div style={{ width: '80%', marginTop: 20 }}>
                                    <ButtonComponent
                                        onClick={() => alert('Đã sao chép đoạn văn bản.')}
                                        label='Sao chép' />
                                </div>

                                <div style={{ width: '80%', marginTop: 20 }}>
                                    <ButtonComponent
                                        onClick={() => alert('Đã lưu nháp vào tài khoản của bạn.')}
                                        label='Lưu nháp' color={YELLOW_1} />
                                </div>

                                <div style={{ width: '80%', marginTop: 20 }}>
                                    <ButtonComponent
                                        onClick={this.openModal}
                                        label='Tra từ' color={GREEN_1} />
                                </div>

                                <div style={{ width: '80%', marginTop: 20 }}>
                                    <ButtonComponent
                                        onClick={() => {
                                            if (this.state.value === '') {
                                                alert("Bạn đã nhập gì đâu mà đòi xóa ?")
                                            }
                                            else {
                                                this.setState({
                                                    value: ''
                                                })
                                                alert('Hãy cẩn thận hơn để tránh lãng phí thời gian của bạn!')
                                            }
                                        }}
                                        label='Xóa hết' color={RED_1} />
                                </div>

                                <div style={{ width: '80%', marginTop: 20 }}>
                                    <ButtonComponent
                                        onClick={() => {
                                            this.setState({
                                                typeType: !this.state.typeType
                                            })
                                        }}
                                        label={this.state.typeType ? "Tốc ký" : "Thường"} color={BLUE_0} />
                                </div>

                            </div>
                        </div>

                    </div>
                    <div style={{ flex: 1 }} />


                </div>





            </div>

        )
    }
}

const styles = {
    container: {
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: GRAY_6
    },
    content_body: {
        flex: BODY.FLEX,
        display: 'flex',
        height: '75vh',
        flexDirection: 'column'
    },
    body: {
        width: '100vw',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        paddingTop: BODY.PADDING_TOP
    }
}


const mapStateToProps = state => ({
    user_infor: state.user_infor,
});

export default connect(mapStateToProps, action)(EditorScreen)