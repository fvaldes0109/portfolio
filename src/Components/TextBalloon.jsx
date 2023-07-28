import React, { useRef, useEffect } from 'react';
import '../Styles/Projects.css';

const TextBalloon = ({ text }) => {

  const balloonRef = useRef(null);
	const lastTranslation = useRef(0);

  useEffect(() => {
    const balloonHeight = balloonRef.current.clientHeight;
    const balloonBottom = balloonRef.current.getBoundingClientRect().bottom;
    const parentTop = balloonRef.current.parentElement.getBoundingClientRect().top;
    console.log(balloonBottom, parentTop);
    if (balloonBottom !== parentTop) {
      const extraHeight = balloonBottom - parentTop;
			lastTranslation.current += extraHeight;
      balloonRef.current.style.transform = `translateX(-50%) translateY(-${lastTranslation.current}px)`;
    }
  }, [text]);

  return (
    <>
      <div ref={balloonRef} className="text-balloon">
        {text}
        <div className="triangle"></div>
      </div>
    </>
  );
};

export default TextBalloon;