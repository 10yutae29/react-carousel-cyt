# react-carousel-cyt

> Customizable React Carousel Component

[![NPM](https://img.shields.io/npm/v/react-carousel-cyt.svg)](https://www.npmjs.com/package/react-carousel-cyt) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-carousel-cyt
```

## Usage

```jsx
import React from 'react'
import Carosel from 'react-carousel-cyt'

const App = () => {
  return (
    <div style={{ width: '100vw' }}>
      <Carosel
        // imgs attribute is essential
        imgs={['favicon.ico', 'favicon.ico', 'favicon.ico', 'favicon.ico']}
        imgRatio={'2/1'}
      />
    </div>
  )
}
```

props

```jsx
/**
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
 */
```

default value

```js
function Carousel({
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
  // logics
  return 'Carousel Component'
}
```

## License

MIT © [10yutae29](https://github.com/10yutae29)
