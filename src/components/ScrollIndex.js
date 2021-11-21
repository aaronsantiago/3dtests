import React, { useRef } from 'react'
import useScrollLocation from "../utils/ScrollLocation"
import { useEffect } from 'react';

export default function ScrollIndex({ scrollIndex, children, ...props }) {
  let setScrollIndex = useScrollLocation(state => state.setScroll);
  let myDiv = useRef();
  let prevScroll = {top: 0, bottom: 0};
  let stopScrollHandler = false;
  const scrollHandler = () => {
    if (stopScrollHandler) return;
    let pt = prevScroll.top;
    let pb = prevScroll.bottom;
    let ct = myDiv.current.getBoundingClientRect().top;
    let cb = myDiv.current.getBoundingClientRect().bottom;
    if (pt > window.innerHeight/2 && ct <= window.innerHeight/2) {
      setScrollIndex(scrollIndex);
    }

    if (pb <= window.innerHeight/2 && cb > window.innerHeight/2) {
      setScrollIndex(scrollIndex);
    }
    prevScroll.top = ct;
    prevScroll.bottom = cb;
    requestAnimationFrame(scrollHandler);
  }

  useEffect(() => {
    requestAnimationFrame(scrollHandler);
    return () => {
      stopScrollHandler = true;
    }
  }, []);
  return <div ref={myDiv} {...props}> {children} </div>
}
