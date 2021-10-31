import React, { useRef } from 'react'
import useScrollLocation from "../stores/ScrollLocation"
import { useEffect } from 'react';

export default function ScrollIndex({ scrollIndex, children, ...props }) {
  let setScrollIndex = useScrollLocation(state => state.setScroll);
  let myDiv = useRef();
  let prevScroll = {top: 0, bottom: 0};
  const scrollHandler = () => {
    let pt = prevScroll.top;
    let pb = prevScroll.bottom;
    let ct = myDiv.current.getBoundingClientRect().top;
    let cb = myDiv.current.getBoundingClientRect().bottom;
    if (pt > 40 && ct <= 40) {
      setScrollIndex(scrollIndex);
    }

    if (pb <= 0 && cb > 0) {
      setScrollIndex(scrollIndex);
    }
    prevScroll.top = ct;
    prevScroll.bottom = cb;
    requestAnimationFrame(scrollHandler);
  }

  useEffect(() => {
    requestAnimationFrame(scrollHandler);
  }, []);
  return <div ref={myDiv} {...props}> {children} </div>
}
