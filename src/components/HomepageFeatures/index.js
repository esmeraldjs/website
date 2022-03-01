import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
      Esmerald.js is simple and fast to use! Make your bot and start using it in minutes.
      </>
    ),
  },
  {
    title: 'Faster',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
      We save your memory RAM, and we use the best technology to make your bot faster.
      </>
    ),
  },
  {
    title: 'Open Source',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
      Our code is open source and you can contribute to it!
      </>
    ),
  },
];

function Feature({ title, description}) {
  return (

    <div className={clsx('col col--4')}>
      <div className="text--center">
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <div>
      <h1 align="center">Features</h1>
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
    </div>
  );
}
