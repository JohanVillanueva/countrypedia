import { useEffect, useState } from 'react';

const usePageBottom = (bottomOffSet = 10) => {
  const [bottom, setBottom] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);

  const handleScroll = () => {
    const isBottom = window.innerHeight + window.scrollY
    >= document.body.scrollHeight - bottomOffSet;
    const isScrollDown = prevScrollY < window.scrollY;

    setPrevScrollY(window.scrollY);
    setBottom(isBottom && isScrollDown);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return bottom;
};

export default usePageBottom;
