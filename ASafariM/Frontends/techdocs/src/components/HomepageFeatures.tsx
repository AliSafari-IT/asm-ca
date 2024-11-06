import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const featureList = [
  {
    title: 'Programming Topics',
    Svg: require('../../static/img/coding.svg').default,
    description: (
      <div className="cardHomePageFeature">
        <a href="docs/category/topics">Topics</a> section is where the main concepts and codes are presented.
      </div>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('../../static/img/wm.svg').default,
    description: (
      <div className="cardHomePageFeature">
        <a href="/blog">Blog</a> section lets you focus on the goals and the route to gain progress in coding area.
      </div>
    ),
  },
  {
    title: 'Harness the Power of Coding',
    Svg: require('../../static/img/didit.svg').default,
    description: (
      <div className="cardHomePageFeature">
        <p>
            Create, innovate, and build with your own hands to shape the future.
        </p>
        <p className="quoteHomePageFeature">
            "Everybody in this country should learn how to program a computer, because it teaches you how to think."
        </p>
        <p className="authorHomePageFeature">
            -Steve Jobs
        </p>
    </div>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
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
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {featureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
