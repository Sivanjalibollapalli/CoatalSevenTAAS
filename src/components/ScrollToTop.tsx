import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop component
 * This component listens to route changes using React-Router's `useLocation` hook
 * and scrolls the viewport to the top of the page whenever the pathname updates.
 *
 * Place <ScrollToTop /> inside <Router> but outside your routes so that it
 * always runs when the location changes.
 */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
}

export default ScrollToTop; 