// @flow
/* eslint-disable react/prop-types */

import React, { Component } from 'react';

import field from 'app/components/Form/field';
import styles from './slide.styl';


type Props = {
  complete?: (wait?: Promise<void>) => void,
  title: string,
  description: string,
  options: Array<{
    name: string,
    value: string,
  }>
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
    const { title, description, options } = this.props;
    return (
      <div className={styles.root}>
        <h3>{title}</h3>
        <p>{description}</p>
        {options.map(({ name, value }) => (
          <button className={styles.button} type="button" onClick={() => this.select(value)}>
            {name}
          </button>
        ))}
      </div>
    );
  }
}
