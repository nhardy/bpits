import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import { debounce } from 'lodash-es';
import cx from 'classnames';

import { smoothScrollTo } from 'app/lib/scroll';
import throttle from 'app/lib/throttle';
import NewSiteHeader from 'app/components/NewSiteHeader';
import Drawer from 'app/components/Drawer';
import Overlay from 'app/components/Overlay';
import Parallax from 'app/components/Parallax';
import SiteFooter from 'app/components/SiteFooter';

import styles from './styles.styl';


export default class SpecialLayout extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  componentDidMount() {
    this.prevScrollY = Math.max(0, window.scrollY);
    this.isAnimating = false;
    this.onResize();
    window.addEventListener('scroll', this.onScroll);
    window.addEventListener('resize', this.onResize);
    this.detachOverlay = this._overlay.addListener(() => {
      this._checkbox.checked = false;
    });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
    window.removeEventListener('resize', this.onResize);
    this.detachOverlay && this.detachOverlay();
    this.onResize.cancel();
    this.onScroll.cancel();
    this.scroll.cancel();
  }

  onResize = throttle(() => {
    this.snapHeight = window.innerHeight - findDOMNode(this._header).clientHeight;
    if (window.scrollY > 0 && window.scrollY < this.snapHeight) {
      this.scroll(window.scrollY < this.snapHeight / 2 ? 0 : this.snapHeight);
    }
  });

  onScroll = throttle(() => {
    if (!this.isAnimating) {
      const direction = Math.sign(window.scrollY - this.prevScrollY);
      switch (direction) {
        case -1:
          if (window.scrollY < this.snapHeight) {
            this.scroll(0);
          } else if (window.scrollY < window.innerHeight * 1.1) {
            this.scroll(this.snapHeight);
          }
          break;
        case 1:
          if (window.scrollY < this.snapHeight) {
            this.scroll(this.snapHeight);
          }
          break;
        default:
      }
    }
    this.prevScrollY = Math.max(0, window.scrollY);
  });

  scroll = debounce((scrollY) => {
    if (!this.isAnimating) {
      this.isAnimating = true;
      smoothScrollTo(scrollY, () => {
        this.isAnimating = false;
      });
    }
  }, 150);

  render() {
    return (
      <div className={styles.root}>
        <NewSiteHeader ref={ref => (this._header = ref)} />
        <input ref={ref => (this._checkbox = ref)} className={styles.checkbox} id="drawer" type="checkbox" />
        <Drawer className={styles.drawer} />
        <Overlay ref={ref => (this._overlay = ref)} className={styles.overlay} />
        <Parallax>
          <span className={styles.greeting}>Hi, I&apos;m Nathan&nbsp;Hardy</span>
          <span className={styles.credit}>
            Photography by <a href="https://facebook.com/IsobelleDwyerArtwork" target="_blank" rel="noopener noreferrer">Isobelle Dwyer</a>
          </span>
        </Parallax>
        <main className={cx(styles.main, this.props.className)}>
          {this.props.children}
        </main>
        <SiteFooter />
      </div>
    );
  }
}