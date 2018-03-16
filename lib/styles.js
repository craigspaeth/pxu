import _ from 'lodash'

export const margins = {
  xxs: 5,
  xs: 13,
  s: 20,
  m: 30,
  l: 55,
  xl: 90,
  xxl: 145,
  xxxl: 235
}

export const colors = {
  blue1: '#3232FA',
  blue5: '#E6E6FF',
  fushia1: '#D52EA8',
  green1: '#42E896',
  red1: '#F55026',
  gray1: '#151515',
  gray2: '#353535',
  gray3: '#555555',
  gray4: '#999999',
  gray5: '#C3C3C3',
  gray6: '#E7E7E7',
  gray7: '#F3F3F3'
}

const columnSize = 98
export const gutterSize = margins.m
const maxGridWidth = 1250
export const navHeight = 76
export const footerHeight = 112

export const layout = {
  desktop: `
    max-width: ${maxGridWidth + margins.l * 2}px;
    padding: 0 ${margins.l}px;
    margin: auto;
  `,
  mobile: `
    padding: 0 ${margins.s}px;
  `
}

export const columnList = (columnNum, columnSpan) =>
  `
  display: grid;
  grid-template-columns: ${_.times(columnNum / columnSpan, () => `1fr`).join(' ')};
  grid-column-gap: ${gutterSize}px;
  `

export const columns = num =>
  `
    max-width: ${num * columnSize + (num - 1) * gutterSize}px;
  `

const helveticaFontFamily = `Helvetica Neue, Helvetica, Nimbus Sans, Arial, sans-serif;`
const nimbusFontFamily = `Nimbus, Arial, sans-serif;`
const soureCodeFontFamily = `Source Code, mono;`
const metaFontFamily = `Meta, serif;`

export const type = {
  helveticaXL: `
    font-family: ${helveticaFontFamily};
    font-size: 21px;
    line-height: 30px
  `,
  helveticaL: `
    font-family: ${helveticaFontFamily};
    font-size: 17px;
  `,
  helveticaM: `
    font-family: ${helveticaFontFamily};
    font-size: 15px;
  `,
  helveticaM: `
    font-family: ${helveticaFontFamily};
    font-size: 15px;
  `,
  nimbusM: `
    font-family: ${nimbusFontFamily};
    font-size: 55px;
    line-height: 58px;
  `,
  nimbusS: `
    font-family: ${nimbusFontFamily};
    font-size: 34px;
    line-height: 40px;
  `,
  sourceCodeLabelL: `
    font-family: ${soureCodeFontFamily};
    font-size: 17px;
    text-transform: uppercase;
    letter-spacing: 3px;
    font-weight: bold;
  `,
  sourceCodeLabelM: `
    font-family: ${soureCodeFontFamily};
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: bold;
  `,
  sourceCodeCaptionL: `
    font-family: ${soureCodeFontFamily};
    font-size: 16px;
    line-height: 27px;
  `,
  sourceCodeCaptionM: `
    font-family: ${soureCodeFontFamily};
    font-size: 13px;
    line-height: 18px;
  `,
  metaSerifL: `
      font-family: ${metaFontFamily};
      font-size: 24px;
      line-height: 32px;
  `,
  metaSerifM: `
      font-family: ${metaFontFamily};
      font-size: 20px;
      line-height: 27px;
  `,
  metaSerifS: `
      font-family: ${metaFontFamily};
      font-size: 17px;
      line-height: 27px;
  `
}
