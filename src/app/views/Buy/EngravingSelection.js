// @flow
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-for */

import React, { Component } from 'react';

import TextArea from 'app/components/Form/TextArea';
import styles from './slide.styl';


type Props = {
  complete?: (wait?: Promise<void>) => void,
};

export default class Engraving extends Component<void, Props, void> {
  next = () => {
    this.props.complete && this.props.complete();
  };

  render() {
    return (
      <div className={styles.root}>
        <h3>Engraving</h3>
        <label>
          <span>Message</span>
          <TextArea name="engraving" />
        </label>
        <button className={styles.button} type="button" onClick={this.next}>
          Next
        </button>
      </div>
    );
  }
}
