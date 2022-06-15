import React, { useState, useEffect } from 'react';

export default function ReactProgress({
  fillColor, bgColor, w, h,    // more on the styling side of the component 
  totalFrameCount, currentFrame         // to compute the width of the progress fill div in the progress bar component
}) {
  const [progressFillWidthRef, setProgressWidthFill] = useState('0%');
  useEffect(() => {
    setProgressWidthFill(
      currentFrame 
        ? `${totalFrameCount*(currentFrame/100)*1000}%` 
        : `0%`
    )
  }, [currentFrame, progressFillWidthRef]);

  return (
    <React.Fragment>
      {/* start: progress bar animation section wrapper */}
      <div className="progress-bar-animation-section-wrapper bg-white transition-all"
        style={{
          width: w ? w : '100%',
          height: h ? h : 'auto',
          backgroundColor: bgColor ? bgColor : 'white'
        }}
      >
          <div className="p-1 bg-purple-500 transition-all" 
              style={{
                  width: progressFillWidthRef,
                  backgroundColor: fillColor ? fillColor : 'blue'
              }}
          />
      </div>
      {/* end: progress bar animation section wrapper */}
    </React.Fragment>
  )
}