import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

const TOPICS = [
  {emoji: '🔍', title: 'ADT & Searching',       to: '/docs/abstract-data-types-and-searching/abstract-data-types', desc: 'Abstract Data Types, Linear & Binary Search'},
  {emoji: '🔗', title: 'Linked List',            to: '/docs/linked-list/introduction',                               desc: 'Singly Linked List — Insert, Delete, Search'},
  {emoji: '📚', title: 'Stack',                  to: '/docs/stack/stack-operations',                                 desc: 'Push/Pop, Recursion, Expression Conversions'},
  {emoji: '🚶', title: 'Queue',                  to: '/docs/queue/queue-operations',                                 desc: 'Enqueue, Dequeue, Pseudocodes'},
  {emoji: '🫧', title: 'Elementary Sorting',     to: '/docs/elementary-sorting/bubble-sort',                         desc: 'Bubble, Selection & Insertion Sort'},
  {emoji: '⚡', title: 'Advanced Sorting',       to: '/docs/advanced-sorting/merge-sort',                            desc: 'Merge Sort & Quick Sort'},
  {emoji: '🌲', title: 'Binary Tree',            to: '/docs/binary-tree/properties-and-types',                       desc: 'Properties, Types & Traversals'},
  {emoji: '🔎', title: 'Binary Search Tree',     to: '/docs/binary-search-tree/operations',                          desc: 'Insert, Search, Delete & Issues'},
  {emoji: '⚖️', title: 'AVL Tree',               to: '/docs/avl-tree/introduction',                                  desc: 'Balance Factor & Rotations'},
  {emoji: '🕸️', title: 'Graph',                  to: '/docs/graph/representation',                                   desc: 'DFS, BFS & Dijkstra\'s Shortest Path'},
];

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/intro">
            Start Studying →
          </Link>
          <Link className="button button--outline button--secondary button--lg" to="/original-notes">
            📄 Original Notes
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <HomepageHeader />
      <main>
        <section className={styles.topicsSection}>
          <div className="container">
            <h2 className={styles.sectionTitle}>10 Exam Topics</h2>
            <div className={styles.topicsGrid}>
              {TOPICS.map(({emoji, title, to, desc}) => (
                <Link key={to} to={to} className={styles.topicCard}>
                  <span className={styles.topicEmoji}>{emoji}</span>
                  <strong className={styles.topicTitle}>{title}</strong>
                  <span className={styles.topicDesc}>{desc}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
