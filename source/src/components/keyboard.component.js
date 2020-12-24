import react, { Component } from 'react'
import { KEYBOARD_LAYER, STENO_BUTTON_STATE, TEXT_SIZES, THREHOLD_PRESS_WAITING_TIME } from '../utils/constants';
import data from '../utils/keyboard.json'
import { BLUE_1, GRAY_2, GRAY_4, GREEN_1, INDIGO_0, RED_1, WHITE } from '../utils/palette';
import KeyboardEventHandler from 'react-keyboard-event-handler';
const keyboard_data = data.keyboard;

const STENO_BUTTON_COLORS = [GREEN_1, RED_1, BLUE_1, INDIGO_0]

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
            state: STENO_BUTTON_STATE.NORMAL
        }
    }
    render() {
        const button = this.props.button
        const is_steno = button.is_steno;
        const state = this.props.state
        const layer_index = this.props.layer_index
        const default_steno_color = this.props.default_steno_color;
        const default_keyboard_color = this.props.default_keyboard_color
        return (
            <div
                style={{
                    width: 45 * button.flex, height: '100%', borderRadius: 4,
                    display: 'flex', flexDirection: 'column', justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor:
                        !is_steno ?
                            layer_index === 2 ?
                                default_keyboard_color
                                :
                                'rgba(0,0,0,0'
                            :
                            state !== 3 ? STENO_BUTTON_COLORS[state]
                                : default_steno_color
                }}>

                {
                    button.char_2 !== undefined ?
                        <text style={{ fontSize: TEXT_SIZES.SMALL, color: WHITE, marginLeft: is_steno && layer_index == 2 ? 10 : 0 }}>
                            {button.char_2}
                        </text>
                        :
                        null
                }
                {
                    layer_index !== 2 ?
                        null
                        :
                        <text style={{ fontSize: TEXT_SIZES.SMALL, color: WHITE, marginRight: is_steno ? 10 : 0 }}>
                            {button.char_1}
                        </text>

                }


            </div>
        )
    }
}
export default class KeyboardComponent extends Component {

    constructor(props) {
        super(props);
        const steno_buttons = [];
        keyboard_data.rows.map(row =>
            row.map(button => {
                if (button.is_steno) steno_buttons.push(button.char_1)
            }))

        this.state = {
            steno_buttons: steno_buttons,
            enable_group: this.props.group,
            wrong_button: '',
            correct_button: '',
            current_word_index: 0,
            remain_current_word: this.props.steno_words[0]
        };
    };

    nextWord = () => {
        console.log('state_of_keyboard :', this.state.pressed_buttons, this.state.wrong_button)
        let i = this.state.current_word_index;
        if (i === this.props.steno_words.length - 1) {

            this.props.completeLesson();
            return;
        }
        let arr = this.props.steno_words;
        this.setState({
            current_word_index: i + 1,
            remain_current_word: arr[i + 1]
        });
        console.log('Next word :', arr[i + 1])
    }

    convertToSteno = (k) => {
        const normal_btns = ['Q', 'W', 'E', 'R', 'T', 'U', 'I', 'O', ',P', '[', 'A', 'S', 'D', 'F', 'G', 'J', 'K', 'L', ';', ',', 'C', 'V', 'N', 'M']
        const steno_btns = ['S', 'K', 'R', 'N', 'H', '*', 'U', 'J', ',N', 'T', 'T', 'P', 'H', 'N', 'S', 'I', 'Y', 'J', 'G', 'K', 'U', 'O', 'E', 'A']
        for (let i = 0; i < normal_btns.length; i++) {
            if (normal_btns[i] === k) return steno_btns[i]
        };
        return 'Q'
    };

    pressButton = (k) => {

        let keyname = this.convertToSteno(k);
        console.log('remain_word', this.state.remain_current_word, keyname, k);
        if (!this.props.enable) return;
        let remain_word = this.state.remain_current_word + '';
        if (!remain_word.includes(keyname)) {
            this.props.typeWrong();
            this.setState({
                wrong_button: keyname,
                correct_button: ''
            });

            setTimeout(() => {
                this.setState({
                    wrong_button: ''
                })
            }, 200);

            this.nextWord();
        }
        else {
            remain_word = remain_word.replace(keyname, '');
            if (remain_word === '') {
                this.props.typeCorrect();
                this.setState({
                    correct_button: keyname,
                    wrong_button: ''
                })

                setTimeout(() => {
                    this.setState({
                        correct_button: ''
                    })
                }, 200);
                this.nextWord();
            }
            else {
                console.log('Remain word :', remain_word)
                let str = this.state.pressed_buttons;
                str += keyname;
                this.setState({
                    remain_current_word: remain_word,
                    wrong_button: '',
                    correct_button: keyname,
                })

                setTimeout(() => {
                    this.setState({
                        correct_button: ''
                    })
                }, 200);
            }
        }
    }


    isHightlightButton = (btn) => {
        if (!btn.is_steno) return false;
        if (btn.char_2 === undefined) return false;

        if (btn.group !== this.state.enable_group) return false
        let arr = this.props.steno_words;
        let i = this.state.current_word_index;

        if (arr[i])
            if (!arr[i].includes(btn.char_2)) return false;
        return true
    }

    render() {
        const keyboard = keyboard_data;
        const steno_buttons = this.state.steno_buttons;
        const layer_index = this.props.layer_index
        const enable = this.props.enable;


        return (
            <div
                //   onKeyDown={this.handleKeyDown}
                style={{ width: '55vw', height: '100%' }}>
                <KeyboardEventHandler
                    handleKeys={steno_buttons}
                    onKeyEvent={(key, e) => this.pressButton(key)} />
                {
                    keyboard.rows.map(row =>

                        <div style={{
                            width: '100%', height: 45, display: 'flex', flexDirection: 'row', marginTop: 5,
                            justifyContent: 'space-between'
                        }}>
                            {
                                row.map((button, index) => {
                                    const state = button.is_steno ?

                                        button.group !== this.state.enable_group ?
                                            STENO_BUTTON_STATE.NONE
                                            :
                                            this.state.correct_button === button.char_2 ?
                                                STENO_BUTTON_STATE.CORRECT
                                                :
                                                this.state.wrong_button === button.char_2 ?
                                                    STENO_BUTTON_STATE.WRONG
                                                    :
                                                    layer_index > 0 && this.isHightlightButton(button) ?
                                                        STENO_BUTTON_STATE.HIGHLIGHT
                                                        :
                                                        STENO_BUTTON_STATE.NONE
                                        :
                                        null;

                                    console.log('State ', button.char_2, state)
                                    return (
                                        <Button
                                            default_keyboard_color={this.props.default_keyboard_color}
                                            button={button}
                                            key={'' + index}
                                            layer_index={layer_index}
                                            state={state}
                                            default_steno_color={this.props.default_steno_color}
                                        />
                                    )
                                })
                            }
                        </div>
                    )
                }
            </div>
        )
    }
}