import React, { useState, useEffect, useCallback } from 'react';
import Layout from '@theme/Layout';
import styles from './original-notes.module.css';

const TOTAL_PAGES = 37;

function pad(n: number): string {
  return String(n).padStart(3, '0');
}

export default function OriginalNotes(): JSX.Element {
  const [current, setCurrent] = useState(1);

  const prev = useCallback(() => setCurrent(p => Math.max(1, p - 1)), []);
  const next = useCallback(() => setCurrent(p => Math.min(TOTAL_PAGES, p + 1)), []);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [prev, next]);

  const src = `/img/pages/page_${pad(current)}.png`;

  return (
    <Layout
      title="Original Notes"
      description="Handwritten class notes scanned from DSA lectures"
    >
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h1 className={styles.title}>Original Handwritten Notes</h1>
          <p className={styles.subtitle}>
            Scanned from DSA lecture notebooks &nbsp;·&nbsp; Use ← → arrow keys to navigate
          </p>
        </div>

        <div className={styles.viewer}>
          <button
            className={`${styles.navBtn} ${styles.navLeft}`}
            onClick={prev}
            disabled={current === 1}
            aria-label="Previous page"
          >
            &#8592;
          </button>

          <div className={styles.imageWrap}>
            <img
              key={current}
              src={src}
              alt={`Lecture notes page ${current}`}
              className={styles.pageImg}
            />
          </div>

          <button
            className={`${styles.navBtn} ${styles.navRight}`}
            onClick={next}
            disabled={current === TOTAL_PAGES}
            aria-label="Next page"
          >
            &#8594;
          </button>
        </div>

        <div className={styles.footer}>
          <button
            className={styles.pageBtn}
            onClick={prev}
            disabled={current === 1}
          >
            ← Prev
          </button>

          <div className={styles.pageIndicator}>
            <span className={styles.pageNum}>{current}</span>
            <span className={styles.pageSep}>/</span>
            <span className={styles.pageTotal}>{TOTAL_PAGES}</span>
          </div>

          <button
            className={styles.pageBtn}
            onClick={next}
            disabled={current === TOTAL_PAGES}
          >
            Next →
          </button>
        </div>

        <div className={styles.thumbStrip}>
          {Array.from({ length: TOTAL_PAGES }, (_, i) => i + 1).map(n => (
            <button
              key={n}
              className={`${styles.thumb} ${n === current ? styles.thumbActive : ''}`}
              onClick={() => setCurrent(n)}
              aria-label={`Go to page ${n}`}
            >
              {n}
            </button>
          ))}
        </div>
      </div>
    </Layout>
  );
}
