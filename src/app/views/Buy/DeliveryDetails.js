// @flow
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-for */

import React, { Component } from 'react';

import Email from 'app/components/Form/Email';
import Text from 'app/components/Form/Text';
import styles from './slide.styl';


type Props = {
  complete?: (wait?: Promise<void>) => void,
};

export default class DeliveryDetails extends Component<void, Props, void> {
  next = () => {
    this.props.complete && this.props.complete();
  };

  render() {
    return (
      <div className={styles.root}>
        <h3>Delivery Details</h3>
        <label>
          <span>E-mail</span>
          <Email name="email" required />
        </label>
        <label>
          <span>Full Name</span>
          <Text name="fullName" required />
        </label>
        <label>
          <span>Address Line 1</span>
          <Text name="address1" required />
        </label>
        <label>
          <span>Address Line 2</span>
          <Text name="address2" />
        </label>
        <button type="button" onClick={this.next}>
          Next
        </button>
      </div>
    );
  }
}
