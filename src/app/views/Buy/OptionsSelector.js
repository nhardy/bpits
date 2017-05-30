// @flow
/* eslint-disable react/prop-types */

import React, { Component } from 'react';

import field from 'app/components/Form/field';
import styles from './slide.styl';


type Props = {
  complete?: (wait?: Promise<void>) => void,
  description: string,
};

type State = {
  value: ?string,
};

@field()
export default class DeliveryDetails extends Component<void, Props, State> {
  state = {
    value: null,
  };

  // @public
  getValue = () => this.state.value;

  // @public
  checkValidity = () => !!this.state.value;

  select = (value: string) => {
    this.setState({ value });
    this.props.complete && this.props.complete();
  };

  render() {
    const { description } = this.props;
    return (
      <div className={styles.root}>
        <h3>Options</h3>
        <p>{description}</p>
        <button type="button" onClick={() => this.select('value')}>
          Value
        </button>
      </div>
    );
  }
}
