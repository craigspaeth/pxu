import Head from 'next/head'
import { colors } from '../lib/styles'

export default () => (
  <div>
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta charSet='utf-8' />
    </Head>
    <style jsx global>{`
      ${reset}
      body {
        font: 16px Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: ${colors.gray2};
      }
      * {
        box-sizing: border-box;
      }
      @font-face {
        font-family: "Nimbus";
        src: url("/static/fonts/nimbus-d-medium.otf");
      }
      @font-face {
        font-family: "Nimbus";
        src: url("/static/fonts/nimbus-d-bold.otf");
        font-weight: bold;
      }
      @font-face {
        font-family: "Source Code";
        src: url("/static/fonts/source-code-regular.ttf");
      }
      @font-face {
        font-family: "Source Code";
        src: url("/static/fonts/source-code-bold.ttf");
        font-weight: bold;
      }
      @font-face {
        font-family: "Meta";
        src: url("/static/fonts/meta-book.otf");
      }
      @font-face {
        font-family: "Meta";
        src: url("/static/fonts/meta-bold.otf");
        font-weight: bold;
      }
      @font-face {
        font-family: "Meta";
        src: url("/static/fonts/meta-book-italic.otf");
        font-style: italic;
      }
      @font-face {
        font-family: "Meta";
        src: url("/static/fonts/meta-bold-italic.otf");
        font-weight: bold;
        font-style: italic;
      }
    `}</style>
  </div>
)

const reset = `
/* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
`
