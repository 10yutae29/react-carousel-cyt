import React from 'react'
import { useRef, useState } from 'react'
/**
 *
 * @prop {imgs}  img url array | [string] | ["url","url","url"...]
 * @prop {imgRatio} img aspectRatio | string | "1/2" or "16/9" ...
 * @prop {imgWidth} img width | string | "24px" or "50%" or "12rem" ...
 * @prop {imgObjectFit} img objectFit | string | "cover" or "contain" ...
 * @prop {imgBorder} img border | string | "solid black 2px" ...
 * @prop {imgRadius} img borderRadius | string | "2px" or "0.5rem" ...
 * @prop {isDot} dot btn boolean | boolean | true or false
 * @prop {dotColor} dot base color | string | "red" or "#ff8e0d"...
 * @prop {dotColorSelected} dot selected color | string | "red" or "#ff8e0d"...
 * @prop {dotSize} dot size | string | "12px" or "1rem" ...
 * @prop {gap} gap between imgs, dots and description | string | "12px" or "1rem" ...
 * @prop {isArrow} arrow btn boolean | boolean | true or false
 * @prop {arrowColor} arrow color | string | "red" or "#ff8e0d"...
 * @prop {arrowDisabledColor} arrow disabled color | string | "grey" or "#000000"
 * @prop {arrowSize} arrow size | string | "12px" or "1rem" ...
 * @prop {descriptions} descriptions array(same length with imgs array) for imgs | [string] | ["img1 ~~", "img2 ~~", "img3 ~~"]
 * @prop {descriptionSize} descriptions size | string |  "12px" or "1rem" ...
 * @prop {descriptionColor} descriptions color | string | "red" or #ff8e0d...
 * @returns
 */
export default function Carosel({
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
    return <p>imgs property is empty</p>
  }
  const containerRef = useRef()
  const [dragStart, setDragStart] = useState(0)
  const [idx, setIdx] = useState(0)
  const handleDrag = (e) => {
    if (e.pageX > 0) {
      containerRef.current.style.transform = `translate(${
        e.pageX - dragStart
      }px)`
      containerRef.current.moved = e.pageX - dragStart
    }
  }
  const onDragEnd = (e) => {
    containerRef.current.style.transition = 'transform 0.5s'
    const width = containerRef.current.offsetWidth
    const start = idx * width
    const passOffset = width / 10
    if (
      containerRef.current.moved < -start - passOffset &&
      idx < imgs.length - 1
    ) {
      const newIdx = idx + 1
      containerRef.current.style.transform = `translate(${-newIdx * width}px)`
      containerRef.current.moved = -newIdx * width
      setIdx(newIdx)
    } else if (containerRef.current.moved > -start + passOffset && idx > 0) {
      const newIdx = idx - 1
      containerRef.current.style.transform = `translate(${-newIdx * width}px)`
      containerRef.current.moved = -newIdx * width
      setIdx(newIdx)
    } else {
      containerRef.current.style.transform = `translate(${-idx * width}px)`
      containerRef.current.moved = -idx * width
    }
  }
  const onDragStart = (e) => {
    containerRef.current.style.transition = 'none'

    const moved =
      containerRef.current.moved === undefined ? 0 : containerRef.current.moved
    setDragStart(e.clientX - moved)
    if (e.dataTransfer) {
      var img = new Image()
      img.src = '/'
      e.dataTransfer.setDragImage(img, 0, 0)
    }
  }

  const onDotClick = (index) => {
    containerRef.current.style.transition = 'transform 0.5s'
    const width = containerRef.current.offsetWidth

    containerRef.current.style.transform = `translate(${-index * width}px)`
    containerRef.current.moved = -index * width
    setIdx(index)
  }

  const onRightClick = () => {
    if (idx < imgs.length - 1) {
      containerRef.current.style.transition = 'transform 0.5s'
      const width = containerRef.current.offsetWidth
      const newIdx = idx + 1
      containerRef.current.style.transform = `translate(${-newIdx * width}px)`
      containerRef.current.moved = -newIdx * width
      setIdx(newIdx)
    }
  }

  const onLeftClick = () => {
    if (idx > 0) {
      containerRef.current.style.transition = 'transform 0.5s'
      const width = containerRef.current.offsetWidth
      const newIdx = idx - 1
      containerRef.current.style.transform = `translate(${-newIdx * width}px)`
      containerRef.current.moved = -newIdx * width
      setIdx(newIdx)
    }
  }

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: gap
      }}
    >
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '8px'
        }}
      >
        {isArrow && (
          <div
            style={{
              color: idx === 0 ? arrowDisabledColor : arrowColor,
              cursor: 'pointer',
              fontSize: arrowSize
            }}
            onClick={onLeftClick}
          >
            ◀
          </div>
        )}
        <div style={{ overflow: 'hidden', flex: '1 1 0%' }}>
          <div
            ref={containerRef}
            onDrag={handleDrag}
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
            onTouchStart={(e) => onDragStart(e.touches[0])}
            onTouchMove={(e) => handleDrag(e.touches[0])}
            onTouchEnd={(e) => onDragEnd(e.touches[0])}
            style={{ width: '100%', display: 'flex', cursor: 'pointer' }}
            draggable
          >
            {imgs.map((img, index) => {
              return (
                <div
                  key={img + index * 6132341}
                  style={{
                    width: '100%',
                    flexShrink: 0,
                    overflow: 'hidden',
                    display: 'flex',
                    justifyContent: 'center'
                  }}
                >
                  <div
                    style={{
                      width: imgWidth,
                      overflow: 'hidden',
                      border: imgBorder,
                      borderRadius: imgRadius
                    }}
                  >
                    <img
                      draggable={false}
                      style={{
                        aspectRatio: imgRatio,
                        width: '100%',
                        objectFit: imgObjectFit
                      }}
                      src={img}
                      alt=''
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        {isArrow && (
          <div
            style={{
              color: idx === imgs.length - 1 ? arrowDisabledColor : arrowColor,
              cursor: 'pointer',
              fontSize: arrowSize
            }}
            onClick={onRightClick}
          >
            ▶
          </div>
        )}
      </div>
      {isDot && (
        <div
          className='flex w-full justify-center'
          style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'center',
            gap: '2px',
            fontSize: dotSize,
            color: dotColor
          }}
        >
          {imgs?.map((img, index) => (
            <div
              key={img + index * 3321}
              style={{
                color: index === idx && dotColorSelected,
                cursor: 'pointer',

                textAlign: 'center'
              }}
              onClick={() => onDotClick(index)}
            >
              •
            </div>
          ))}
        </div>
      )}
      {descriptions && (
        <p
          style={{
            fontSize: descriptionSize,
            color: descriptionColor,
            margin: 0
          }}
        >
          {descriptions[idx]}
        </p>
      )}
    </div>
  )
}
