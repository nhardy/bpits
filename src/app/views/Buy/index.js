// @flow
/* eslint-disable react/prop-types */

import React, { Component } from 'react';

import DefaultLayout from 'app/layouts/Default';
import Breakout from 'app/components/Breakout';
import Slider from 'app/components/Slider';
import SlidingStages from 'app/components/SlidingStages';
import form from 'app/components/Form/form';
import OptionSelector from './OptionsSelector';
import DeliveryDetails from './DeliveryDetails';
import PaymentOptions from './PaymentOptions';
import watch1Img from 'app/assets/images/watch1.jpg';
import watch2Img from 'app/assets/images/watch2.jpg';
import watch3Img from 'app/assets/images/watch3.jpg';
import styles from './styles.styl';
import slideStyles from './slide.styl';


type DefaultProps = {
  options: any[],
};

type Props = {
  options: any[],
};

type State = {
  images: Array<{
    src: string,
    alt: string,
  }>,
};

@form()
export default class BuyView extends Component<DefaultProps, Props, State> {
  static defaultProps = {
    options: [
      {
        description: 'Stuff',
      },
    ],
  };
  state = {
    images: [
      {
        src: watch1Img,
        alt: '',
      },
      {
        src: watch2Img,
        alt: '',
      },
      {
        src: watch3Img,
        alt: '',
      },
    ],
  };

  render() {
    const { options } = this.props;
    const { images } = this.state;

    return (
      <DefaultLayout>
        <div className={styles.root}>
          <Breakout>
            <Slider autoplay>
              {images.map(({ src, alt }) => (
                <img key={src} className={styles.slide} src={src} alt={alt} />
              ))}
            </Slider>
          </Breakout>
          <form>
            <SlidingStages>
              {options.map(({ description }) => (
                <OptionSelector description={description} />
              ))}
              <DeliveryDetails />
              <PaymentOptions />
              <div className={slideStyles.root}>
                <h3>Thank-you for your purchase</h3>
                <p>Expected Delivery Date: 10<sup>th</sup> June.</p>
              </div>
            </SlidingStages>
          </form>
        </div>
      </DefaultLayout>
    );
  }
}
