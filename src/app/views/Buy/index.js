// @flow
/* eslint-disable react/prop-types */

import React, { Component } from 'react';

import DefaultLayout from 'app/layouts/Default';
import Breakout from 'app/components/Breakout';
import Slider from 'app/components/Slider';
import SlidingStages from 'app/components/SlidingStages';
import form from 'app/components/Form/form';
import watch1Img from 'app/assets/images/watch1.jpg';
import watch2Img from 'app/assets/images/watch2.jpg';
import watch3Img from 'app/assets/images/watch3.jpg';
import OptionSelector from './OptionsSelector';
import EngravingSelection from './EngravingSelection';
import DeliveryDetails from './DeliveryDetails';
import PaymentOptions from './PaymentOptions';
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
        title: 'Finish',
        description: 'Choosing a finish for your watch is an important part of what makes a watch yours, and tells you a lot about the wearer.',
        options: [
          {
            name: 'Metallic',
            value: 'metal',
          },
          {
            name: 'Leather',
            value: 'leather',
          },
          {
            name: 'Synthetic',
            value: 'synth',
          },
        ],
      },
      {
        title: 'Colour',
        description: 'Choosing a watch colour really personalises your choice.\n' +
          'If you want to emanate professionalism, there are a range of blacks.\n' +
          'And... if you really want to stand out, there are options.',
        options: [
          {
            name: 'Matte Black',
            value: 'matte-black',
          },
          {
            name: 'Jet Black',
            value: 'jet-black',
          },
          {
            name: 'Silver',
            value: 'silver',
          },
          {
            name: 'Azure',
            value: 'azure',
          },
          {
            name: 'Red',
            value: 'red',
          },
        ],
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

  onSubmit = (e: Event) => {
    e.preventDefault();
  }

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
          <form onSubmit={this.onSubmit}>
            <SlidingStages>
              {options.map(option => (
                <OptionSelector {...option} />
              ))}
              <EngravingSelection />
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
