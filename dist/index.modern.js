import React, { useRef, useState } from 'react';

function Carousel({
  width = '100%',
  imgs = [],
  imgRatio = '1/1',
  imgWidth = '90%',
  imgObjectFit = 'contain',
  imgBorder = '',
  imgRadius = '',
  isDot = true,
  dotColor = 'black',
  dotColorSelected = '#ff8e0d',
  dotSize = '1.5rem',
  gap = '0.5rem',
  isArrow = true,
  arrowColor = '#ff8e0d',
  arrowDisabledColor = 'grey',
  arrowSize = '1.5rem',
  descriptions,
  descriptionSize = '1.5rem',
  descriptionColor = '#ff8e0d'
}) {
  if (imgs.length === 0) {
    return /*#__PURE__*/React.createElement("p", null, "imgs property is empty");
  }
  const containerRef = useRef();
  const [dragStart, setDragStart] = useState(0);
  const [idx, setIdx] = useState(0);
  const handleDrag = e => {
    if (e.pageX > 0) {
      containerRef.current.style.transform = `translate(${e.pageX - dragStart}px)`;
      containerRef.current.moved = e.pageX - dragStart;
    }
  };
  const onDragEnd = e => {
    containerRef.current.style.transition = 'transform 0.5s';
    const width = containerRef.current.offsetWidth;
    const start = idx * width;
    const passOffset = width / 10;
    if (containerRef.current.moved < -start - passOffset && idx < imgs.length - 1) {
      const newIdx = idx + 1;
      containerRef.current.style.transform = `translate(${-newIdx * width}px)`;
      containerRef.current.moved = -newIdx * width;
      setIdx(newIdx);
    } else if (containerRef.current.moved > -start + passOffset && idx > 0) {
      const newIdx = idx - 1;
      containerRef.current.style.transform = `translate(${-newIdx * width}px)`;
      containerRef.current.moved = -newIdx * width;
      setIdx(newIdx);
    } else {
      containerRef.current.style.transform = `translate(${-idx * width}px)`;
      containerRef.current.moved = -idx * width;
    }
  };
  const onDragStart = e => {
    containerRef.current.style.transition = 'none';
    const moved = containerRef.current.moved === undefined ? 0 : containerRef.current.moved;
    setDragStart(e.clientX - moved);
    if (e.dataTransfer) {
      var img = new Image();
      img.src = '/';
      e.dataTransfer.setDragImage(img, 0, 0);
    }
  };
  const onDotClick = index => {
    containerRef.current.style.transition = 'transform 0.5s';
    const width = containerRef.current.offsetWidth;
    containerRef.current.style.transform = `translate(${-index * width}px)`;
    containerRef.current.moved = -index * width;
    setIdx(index);
  };
  const onRightClick = () => {
    if (idx < imgs.length - 1) {
      containerRef.current.style.transition = 'transform 0.5s';
      const width = containerRef.current.offsetWidth;
      const newIdx = idx + 1;
      containerRef.current.style.transform = `translate(${-newIdx * width}px)`;
      containerRef.current.moved = -newIdx * width;
      setIdx(newIdx);
    }
  };
  const onLeftClick = () => {
    if (idx > 0) {
      containerRef.current.style.transition = 'transform 0.5s';
      const width = containerRef.current.offsetWidth;
      const newIdx = idx - 1;
      containerRef.current.style.transform = `translate(${-newIdx * width}px)`;
      containerRef.current.moved = -newIdx * width;
      setIdx(newIdx);
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: width,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: gap
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '8px'
    }
  }, isArrow && /*#__PURE__*/React.createElement("div", {
    style: {
      color: idx === 0 ? arrowDisabledColor : arrowColor,
      cursor: 'pointer',
      fontSize: arrowSize
    },
    onClick: onLeftClick
  }, "\u25C0"), /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: 'hidden',
      flex: '1 1 0%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: containerRef,
    onDrag: handleDrag,
    onDragStart: onDragStart,
    onDragEnd: onDragEnd,
    onTouchStart: e => onDragStart(e.touches[0]),
    onTouchMove: e => handleDrag(e.touches[0]),
    onTouchEnd: e => onDragEnd(),
    style: {
      width: '100%',
      display: 'flex',
      cursor: 'pointer'
    },
    draggable: true
  }, imgs.map((img, index) => {
    return /*#__PURE__*/React.createElement("div", {
      key: img + index * 6132341,
      style: {
        width: '100%',
        flexShrink: 0,
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: imgWidth,
        overflow: 'hidden',
        border: imgBorder,
        borderRadius: imgRadius
      }
    }, /*#__PURE__*/React.createElement("img", {
      draggable: false,
      style: {
        aspectRatio: imgRatio,
        width: '100%',
        objectFit: imgObjectFit
      },
      src: img,
      alt: ""
    })));
  }))), isArrow && /*#__PURE__*/React.createElement("div", {
    style: {
      color: idx === imgs.length - 1 ? arrowDisabledColor : arrowColor,
      cursor: 'pointer',
      fontSize: arrowSize
    },
    onClick: onRightClick
  }, "\u25B6")), isDot && /*#__PURE__*/React.createElement("div", {
    className: "flex w-full justify-center",
    style: {
      display: 'flex',
      width: '100%',
      justifyContent: 'center',
      gap: '2px',
      fontSize: dotSize,
      color: dotColor
    }
  }, imgs === null || imgs === void 0 ? void 0 : imgs.map((img, index) => /*#__PURE__*/React.createElement("div", {
    key: img + index * 3321,
    style: {
      color: index === idx && dotColorSelected,
      cursor: 'pointer',
      textAlign: 'center'
    },
    onClick: () => onDotClick(index)
  }, "\u2022"))), descriptions && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: descriptionSize,
      color: descriptionColor,
      margin: 0
    }
  }, descriptions[idx]));
}

export default Carousel;
//# sourceMappingURL=index.modern.js.map
