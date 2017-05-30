// @flow

import React from 'react';
import { Helmet } from 'react-helmet';

import config from 'app/config';
import { makeTitle } from 'app/lib/social';
import SpecialLayout from 'app/layouts/Special';
import profileImg from 'app/assets/images/profile.jpg';
import profileImg2x from 'app/assets/images/profile-2x.jpg';
import profileImg3x from 'app/assets/images/profile-3x.jpg';
import styles from './styles.styl';


const TITLE = 'Home';
const DESCRIPTION = [
  'The website of Sydney-based student and developer, Nathan Hardy.',
  'I work on world-class web applications and services used by millions of Australians.',
].join(' ');

const HomeView = () => (
  <SpecialLayout className={styles.root}>
    <Helmet>
      <title>{TITLE}</title>
      <meta name="description" content={DESCRIPTION} />
      <meta property="og:title" content={makeTitle(TITLE)} />
      <meta property="og:description" content={DESCRIPTION} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content={config.twitter.handle} />
      <meta name="twitter:title" content={makeTitle(TITLE)} />
      <meta name="twitter:description" content={DESCRIPTION} />
    </Helmet>
    <h1>About Us</h1>
    <img className={styles.profile} src={profileImg} srcSet={`${profileImg2x} 2x, ${profileImg3x} 3x`} alt="Profile" />
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      {' '}
      Quisque sed aliquet magna.
      {' '}
      Vestibulum pellentesque tortor velit, at congue tellus mattis ut.
      {' '}
      Cras cursus, orci et ornare consectetur, ligula sapien aliquam leo, ac hendrerit dui est sed quam.
      {' '}
      Donec at efficitur lacus.
      {' '}
      In lobortis tempor orci vel vehicula.
      {' '}
      Quisque ut lorem quam.
      {' '}
      Phasellus porta erat in lacinia consectetur.
      {' '}
      Mauris urna mi, efficitur ut ullamcorper quis, tempor ac ex.
      {' '}
      Etiam enim neque, bibendum ut purus a, congue mattis urna.
      {' '}
      Pellentesque ex lacus, gravida ut pulvinar sit amet, suscipit id elit.
      {' '}
      Cras facilisis nunc nec tristique viverra.
      {' '}
      Aenean gravida est et egestas sodales.
      {' '}
      In enim massa, lobortis eu ultrices id, sagittis eu elit.
    </p>
    <p>
      Quisque suscipit nulla id fermentum maximus.
      {' '}
      Quisque ut ligula velit.
      {' '}
      In nec odio sem.
      {' '}
      Pellentesque arcu dui, finibus quis mollis ut, finibus elementum nisl.
      {' '}
      Suspendisse porta urna et sapien gravida, at malesuada nulla finibus.
      {' '}
      Nunc ex elit, commodo eget mollis auctor, consectetur id massa.
      {' '}
      Duis volutpat est enim.
      {' '}
      Vivamus lobortis pellentesque justo lobortis malesuada.
      {' '}
      Duis in nisl pellentesque, luctus arcu a, pharetra risus.
      {' '}
      Vestibulum vel mattis nibh.
      {' '}
      Pellentesque eleifend mollis augue, in malesuada leo lobortis quis.
      {' '}
      Suspendisse vel felis consequat, placerat ipsum ac, condimentum erat.
      {' '}
      Vivamus ante eros, elementum et porta in, placerat fermentum dolor.
      {' '}
      Nam libero metus, auctor non sem sed, tempus dapibus eros.
    </p>
    <p>
      Suspendisse tincidunt vel diam sed ultricies.
      {' '}
      Sed tincidunt lacinia velit at vulputate.
      {' '}
      Nam pharetra malesuada vestibulum.
      {' '}
      Pellentesque semper justo eget rhoncus consectetur.
      {' '}
      Quisque pretium, ex eget lobortis viverra, quam sapien aliquet sapien, eget dictum lectus neque vitae leo.
      {' '}
      Pellentesque rhoncus cursus aliquam.
      {' '}
      Maecenas cursus facilisis dictum.
    </p>
    <p>
      Duis sed congue ligula.
      {' '}
      Praesent eget augue non quam pretium aliquam.
      {' '}
      Nulla facilisi.
      {' '}
      Etiam eu blandit eros.
      {' '}
      Nam lorem tortor, bibendum sed lacus nec, porttitor dictum elit.
      {' '}
      Nam justo mi, blandit quis faucibus sed, tincidunt at massa.
      {' '}
      Aenean vel commodo mauris.
      {' '}
      Ut neque magna, fermentum non dignissim nec, fringilla suscipit nulla.
      {' '}
      Aliquam eget erat vehicula nunc mollis porttitor.
      {' '}
      Maecenas viverra urna lacus, sed lacinia sapien tempor non.
      {' '}
      Sed non egestas magna, vitae posuere est.
      {' '}
      Pellentesque sapien tellus, fringilla vitae ipsum at, pretium faucibus velit.
      {' '}
      Donec sit amet imperdiet neque.
      {' '}
      Fusce dapibus sapien id orci tempor maximus.
    </p>
    <p>
      Praesent pretium sem ut velit tristique, a egestas quam semper.
      {' '}
      Pellentesque pulvinar scelerisque tristique.
      {' '}
      Ut mi metus, aliquet a enim fermentum, tristique dapibus sem.
      {' '}
      Donec sed ex est.
      {' '}
      Cras maximus, odio vitae fringilla mollis, nisl ante feugiat ex, a tincidunt augue nisl id lectus.
      {' '}
      Sed vel est et turpis pretium pulvinar eget eu sapien.
      {' '}
      Suspendisse dapibus, ex sit amet viverra tristique, enim mi cursus enim, in volutpat purus elit vel eros.
      {' '}
      Suspendisse velit sapien, malesuada quis dapibus vel, molestie vel augue.
      {' '}
      Etiam varius ullamcorper libero, sit amet iaculis ante mollis eget.
      {' '}
      Aliquam erat volutpat.
      {' '}
      Ut maximus enim a imperdiet vulputate.
      {' '}
      Proin semper condimentum est nec interdum.
      {' '}
      Donec id vestibulum nulla.
    </p>
  </SpecialLayout>
);

export default HomeView;
