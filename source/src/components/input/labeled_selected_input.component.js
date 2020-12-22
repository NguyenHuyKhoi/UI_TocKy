//import from library 
import React, {Component} from 'react';
import {TEXT_SIZES} from '../../utils/constants';
import {BLACK} from '../../utils/palette';
import Select from 'react-select';

export default class LabeledSelectedInputComponent extends Component {
  constructor(props) {
    super(props);
    let value = this.props.value !== undefined ? this.props.value : '';
    this.state = {
      value: value
    };
  }

  render() {

    const value = this.state.value;
    const label = this.props.label !== undefined ? this.props.label : '';
    const hide_label = this.props.hide_label !== undefined ? this.props.hide_label : false;


    let domain = this.props.domain.map(item => {
      return {value: item, label: item};
    });

    let option = {value: value, label: value};


    console.log('domain_select', domain);

    return (

      <div style={styles.container}>
        {
          hide_label ?
            null
            :
            <text style={styles.label}>
              {label}
            </text>

        }

        <div style={{...styles.body, marginTop: hide_label ? 0 : 15}}>
          <Select
            style={{...styles.select}}
            value={option}
            onChange={(option) => {
              this.setState({value: option.value});
              console.log('selected_input', option.value);

              if(this.props.onChange)
              this.props.onChange(option.value);
            }}
            options={domain}
          />
        </div>


      </div>
    );
  }
}

const styles = {
  container: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column'
  },
  label: {
    fontSize: TEXT_SIZES.NORMAL,
    color: BLACK
  },
  body: {
    width: '100%',
    height: 30,
    fontSize: TEXT_SIZES.NORMAL
  },
  select: {
    fontSize: TEXT_SIZES.SMALL
  }
};



