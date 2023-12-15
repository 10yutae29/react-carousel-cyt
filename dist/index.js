function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);

function Carosel(_ref) {
  var _ref$imgs = _ref.imgs,
    imgs = _ref$imgs === void 0 ? [] : _ref$imgs,
    _ref$imgRatio = _ref.imgRatio,
    imgRatio = _ref$imgRatio === void 0 ? '1/1' : _ref$imgRatio,
    _ref$imgWidth = _ref.imgWidth,
    imgWidth = _ref$imgWidth === void 0 ? '90%' : _ref$imgWidth,
    _ref$imgObjectFit = _ref.imgObjectFit,
    imgObjectFit = _ref$imgObjectFit === void 0 ? 'contain' : _ref$imgObjectFit,
    _ref$imgBorder = _ref.imgBorder,
    imgBorder = _ref$imgBorder === void 0 ? '' : _ref$imgBorder,
    _ref$imgRadius = _ref.imgRadius,
    imgRadius = _ref$imgRadius === void 0 ? '' : _ref$imgRadius,
    _ref$isDot = _ref.isDot,
    isDot = _ref$isDot === void 0 ? true : _ref$isDot,
    _ref$dotColor = _ref.dotColor,
    dotColor = _ref$dotColor === void 0 ? 'black' : _ref$dotColor,
    _ref$dotColorSelected = _ref.dotColorSelected,
    dotColorSelected = _ref$dotColorSelected === void 0 ? '#ff8e0d' : _ref$dotColorSelected,
    _ref$dotSize = _ref.dotSize,
    dotSize = _ref$dotSize === void 0 ? '1.5rem' : _ref$dotSize,
    _ref$gap = _ref.gap,
    gap = _ref$gap === void 0 ? '0.5rem' : _ref$gap,
    _ref$isArrow = _ref.isArrow,
    isArrow = _ref$isArrow === void 0 ? true : _ref$isArrow,
    _ref$arrowColor = _ref.arrowColor,
    arrowColor = _ref$arrowColor === void 0 ? '#ff8e0d' : _ref$arrowColor,
    _ref$arrowDisabledCol = _ref.arrowDisabledColor,
    arrowDisabledColor = _ref$arrowDisabledCol === void 0 ? 'grey' : _ref$arrowDisabledCol,
    _ref$arrowSize = _ref.arrowSize,
    arrowSize = _ref$arrowSize === void 0 ? '1.5rem' : _ref$arrowSize,
    descriptions = _ref.descriptions,
    _ref$descriptionSize = _ref.descriptionSize,
    descriptionSize = _ref$descriptionSize === void 0 ? '1.5rem' : _ref$descriptionSize,
    _ref$descriptionColor = _ref.descriptionColor,
    descriptionColor = _ref$descriptionColor === void 0 ? '#ff8e0d' : _ref$descriptionColor;
  if (imgs.length === 0) {
    return /*#__PURE__*/React__default.createElement("p", null, "imgs property is empty");
  }
  var containerRef = React.useRef();
  var _useState = React.useState(0),
    dragStart = _useState[0],
    setDragStart = _useState[1];
  var _useState2 = React.useState(0),
    idx = _useState2[0],
    setIdx = _useState2[1];
  var handleDrag = function handleDrag(e) {
    if (e.pageX > 0) {
      containerRef.current.style.transform = "translate(" + (e.pageX - dragStart) + "px)";
      containerRef.current.moved = e.pageX - dragStart;
    }
  };
  var onDragEnd = function onDragEnd(e) {
    containerRef.current.style.transition = 'transform 0.5s';
    var width = containerRef.current.offsetWidth;
    var start = idx * width;
    var passOffset = width / 10;
    if (containerRef.current.moved < -start - passOffset && idx < imgs.length - 1) {
      var newIdx = idx + 1;
      containerRef.current.style.transform = "translate(" + -newIdx * width + "px)";
      containerRef.current.moved = -newIdx * width;
      setIdx(newIdx);
    } else if (containerRef.current.moved > -start + passOffset && idx > 0) {
      var _newIdx = idx - 1;
      containerRef.current.style.transform = "translate(" + -_newIdx * width + "px)";
      containerRef.current.moved = -_newIdx * width;
      setIdx(_newIdx);
    } else {
      containerRef.current.style.transform = "translate(" + -idx * width + "px)";
      containerRef.current.moved = -idx * width;
    }
  };
  var onDragStart = function onDragStart(e) {
    containerRef.current.style.transition = 'none';
    var moved = containerRef.current.moved === undefined ? 0 : containerRef.current.moved;
    setDragStart(e.clientX - moved);
    if (e.dataTransfer) {
      var img = new Image();
      img.src = '/';
      e.dataTransfer.setDragImage(img, 0, 0);
    }
  };
  var onDotClick = function onDotClick(index) {
    containerRef.current.style.transition = 'transform 0.5s';
    var width = containerRef.current.offsetWidth;
    containerRef.current.style.transform = "translate(" + -index * width + "px)";
    containerRef.current.moved = -index * width;
    setIdx(index);
  };
  var onRightClick = function onRightClick() {
    if (idx < imgs.length - 1) {
      containerRef.current.style.transition = 'transform 0.5s';
      var width = containerRef.current.offsetWidth;
      var newIdx = idx + 1;
      containerRef.current.style.transform = "translate(" + -newIdx * width + "px)";
      containerRef.current.moved = -newIdx * width;
      setIdx(newIdx);
    }
  };
  var onLeftClick = function onLeftClick() {
    if (idx > 0) {
      containerRef.current.style.transition = 'transform 0.5s';
      var width = containerRef.current.offsetWidth;
      var newIdx = idx - 1;
      containerRef.current.style.transform = "translate(" + -newIdx * width + "px)";
      containerRef.current.moved = -newIdx * width;
      setIdx(newIdx);
    }
  };
  return /*#__PURE__*/React__default.createElement("div", {
    style: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: gap
    }
  }, /*#__PURE__*/React__default.createElement("div", {
    style: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '8px'
    }
  }, isArrow && /*#__PURE__*/React__default.createElement("div", {
    style: {
      color: idx === 0 ? arrowDisabledColor : arrowColor,
      cursor: 'pointer',
      fontSize: arrowSize
    },
    onClick: onLeftClick
  }, "\u25C0"), /*#__PURE__*/React__default.createElement("div", {
    style: {
      overflow: 'hidden',
      flex: '1 1 0%'
    }
  }, /*#__PURE__*/React__default.createElement("div", {
    ref: containerRef,
    onDrag: handleDrag,
    onDragStart: onDragStart,
    onDragEnd: onDragEnd,
    onTouchStart: function onTouchStart(e) {
      return onDragStart(e.touches[0]);
    },
    onTouchMove: function onTouchMove(e) {
      return handleDrag(e.touches[0]);
    },
    onTouchEnd: function onTouchEnd(e) {
      return onDragEnd();
    },
    style: {
      width: '100%',
      display: 'flex',
      cursor: 'pointer'
    },
    draggable: true
  }, imgs.map(function (img, index) {
    return /*#__PURE__*/React__default.createElement("div", {
      key: img + index * 6132341,
      style: {
        width: '100%',
        flexShrink: 0,
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React__default.createElement("div", {
      style: {
        width: imgWidth,
        overflow: 'hidden',
        border: imgBorder,
        borderRadius: imgRadius
      }
    }, /*#__PURE__*/React__default.createElement("img", {
      draggable: false,
      style: {
        aspectRatio: imgRatio,
        width: '100%',
        objectFit: imgObjectFit
      },
      src: img,
      alt: ""
    })));
  }))), isArrow && /*#__PURE__*/React__default.createElement("div", {
    style: {
      color: idx === imgs.length - 1 ? arrowDisabledColor : arrowColor,
      cursor: 'pointer',
      fontSize: arrowSize
    },
    onClick: onRightClick
  }, "\u25B6")), isDot && /*#__PURE__*/React__default.createElement("div", {
    className: "flex w-full justify-center",
    style: {
      display: 'flex',
      width: '100%',
      justifyContent: 'center',
      gap: '2px',
      fontSize: dotSize,
      color: dotColor
    }
  }, imgs === null || imgs === void 0 ? void 0 : imgs.map(function (img, index) {
    return /*#__PURE__*/React__default.createElement("div", {
      key: img + index * 3321,
      style: {
        color: index === idx && dotColorSelected,
        cursor: 'pointer',
        textAlign: 'center'
      },
      onClick: function onClick() {
        return onDotClick(index);
      }
    }, "\u2022");
  })), descriptions && /*#__PURE__*/React__default.createElement("p", {
    style: {
      fontSize: descriptionSize,
      color: descriptionColor,
      margin: 0
    }
  }, descriptions[idx]));
}

module.exports = Carosel;
//# sourceMappingURL=index.js.map
