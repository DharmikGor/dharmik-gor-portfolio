import { useEffect, useState } from 'react';

/**
 * Tracks which section id is currently active for nav highlighting, based on
 * scroll position rather than direct intersection. The page has untracked
 * sections between the tracked ones, so while scrolling through one of those
 * none of the tracked elements intersect the viewport — an intersection-based
 * observer would just freeze on whatever was last active. Picking the tracked
 * section whose top has most recently crossed a fixed offset always has an
 * answer, regardless of what's in between.
 */
export function useActiveSection(sectionIds: string[]): string {
  const [activeId, setActiveId] = useState<string>(sectionIds[0] ?? '');

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (elements.length === 0) return;

    let ticking = false;

    const computeActive = () => {
      const offset = window.innerHeight * 0.3;
      let next = elements[0].id;
      let bestTop = -Infinity;
      for (const el of elements) {
        const top = el.getBoundingClientRect().top;
        if (top <= offset && top > bestTop) {
          bestTop = top;
          next = el.id;
        }
      }
      setActiveId(next);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(computeActive);
      }
    };

    computeActive();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [sectionIds]);

  return activeId;
}
