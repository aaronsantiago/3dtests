function WorkContainer({children}) {
  return (
    <div className="w-full relative">
      <div style={{height: "calc(100%)"}} className="absolute w-full">
        <div
          style={{height: "15vh"}}
          className="z-10 bg-transparent sticky top-0 snap-start w-screen text-3xl align-middle flex place-items-center text-center"
        >
          <svg
            class="knockout-text-container relative"
            width="100%"
            height="100%"
          >
            <rect
              class="knockout-text-bg"
              width="100%"
              height="100%"
              fill="rgb(254, 242, 242)"
              x="0"
              y="0"
              fill-opacity="1"
              mask="url(#knockout-text3)"
            />

            <mask id="knockout-text3">
              <rect width="100%" height="100.1%" fill="#fff" x="0" y="0" />
              <text
                className="font-sans"
                style={{fontSize: "10vmin", fontWeight: "900"}}
                x="50%"
                y="50%"
                fill="#000"
                text-anchor="middle"
              >
                <tspan x="50%" dy=".3em">
                  work:
                </tspan>
                {/* <div className="w-full animate-bounce absolute bottom-0 text-color-gray-200 text-center">
            <FontAwesomeIcon
              icon={faArrowDown}
              color="rgb(254, 242, 242)"
              size="lg"
            />
          </div> */}
              </text>
            </mask>
          </svg>
        </div>
      </div>
      <div className="relative top-0">{children}</div>
    </div>
  );
}

export default WorkContainer;
