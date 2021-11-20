import React, { useRef } from 'react'
import useScrollLocation from "../utils/ScrollLocation"
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
    // console.log();
    if (pt > document.body.clientHeight/2 && ct <= document.body.clientHeight/2) {
      setScrollIndex(scrollIndex);
    }

    if (pb <= document.body.clientHeight/2 && cb > document.body.clientHeight/2) {
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
