// @flow
/* eslint-disable react/prop-types */

import React, { Component } from 'react';

import timeout from 'app/lib/timeout';
import FontAwesome from 'app/components/FontAwesome';
import styles from './slide.styl';


type Props = {
  complete?: (wait?: Promise<void>) => void,
};


export default class DeliveryDetails extends Component<void, Props, void> {
  pay = (e: MouseEvent) => {
    e.preventDefault();
    const { complete } = this.props;
    complete && complete(timeout(3000));
  }

  render() {
    return (
      <div className={styles.root}>
        <h3>Payment Options</h3>
        <p>We support a variety of payment options outlined below:</p>
        <a className={styles.payment} href="https://www.paypal.com/" onClick={this.pay}><FontAwesome className="fa-3x fa-credit-card" /></a>
        <a className={styles.payment} href="https://www.paypal.com/" onClick={this.pay}><FontAwesome className="fa-3x fa-cc-paypal" /></a>
        <a className={styles.payment} href="https://wallet.google.com/" onClick={this.pay}><FontAwesome className="fa-3x fa-google-wallet" /></a>
      </div>
    );
  }
}
