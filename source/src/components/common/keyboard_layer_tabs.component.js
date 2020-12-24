//import from library 
import React, { Component } from 'react'
import { TEXT_SIZES } from '../../utils/constants';
import { BLACK, BLUE_1, GRAY_4, WHITE } from '../../utils/palette';
const taskTabItems = [
    {
        label: 'Khó'
    },
    {
        label: 'Thường'
    },
    {
        label: 'Dễ'
    }
]

class TabBar extends Component {
    render() {
        const item = this.props.item;
        const is_focused = this.props.is_focused
        return (
            <div
                onClick={this.props.onClick}
                style={{
                    ...styles.item_container,
                    backgroundColor: is_focused ? WHITE : GRAY_4
                }}>
                <text style={{ ...styles.item_label, color: is_focused ? BLUE_1 : BLACK }}>
                    {item.label}
                </text>
            </div>
        )
    }
}
export default class KeyboardLayerTabsComponent extends Component {
    render() {
        const layer_index = this.props.layer_index;
        return (
            <div style={styles.container}>
                {
                    taskTabItems.map((item, index) =>
                        <TabBar
                            key={'' + index}
                            item={item}
                            is_focused={index === layer_index}
                            onClick={() => this.props.onChangeLayer(index)} />
                    )
                }
            </div>

        )
    }
}

const styles = {
    item_container: {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    item_label: {
        fontSize: TEXT_SIZES.NORMAL
    },
    container: {
        width: '100%',
        height: 30,
        display: 'flex',
        flexDirection: 'row'
    }
}
