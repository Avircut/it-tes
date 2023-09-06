import { useState, useEffect } from 'react';

export enum Sizes {
  mm= '320px',
  sm= '480px',
  md= '640px',
  lg= '820px',
  xl= '1024px',
  xxl= '1366px',
}

function isMatch(media:Sizes) {
  const query = `(min-width: ${media})`;
  return window.matchMedia(query).matches;
}

function findClosest(queries: Sizes[]) {
  for (let i = queries.length - 1; i >= 0; i -= 1) {
    if (isMatch(queries[i])) {
      return queries[i];
    }
  }
  return '640px';
}
export const useClosestMedia = () => {
  const [closest, setClosest] = useState('640px');

  useEffect(() => {
    const listener = () => setClosest(findClosest(Object.values(Sizes)));
    listener();
    window.addEventListener('resize', listener);
    return () => window.removeEventListener('resize', listener); // Cleanup
  }, []);

  return closest;
};
