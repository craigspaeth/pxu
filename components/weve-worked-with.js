import {
  columns,
  margins,
  type,
  columnList,
  colors,
  layout,
  gutterSize
} from '../lib/styles'
import Blurb from './blurb'

export default () => {
  return (
    <div className='wrapper'>
      <div className='inner'>
        <div className='blurb'>
          <Blurb
            icon='/static/weve-worked-with-icon.svg'
            header='Tech startups to healthcare giants'
            paragraph='We’ve worked with a wide range of companies in a variety of industries including technology, liquor, fashion, real estate, healthcare, and more. We love solving problems from all sorts of backgrounds and embrace a new challenge.'
          />
        </div>
        <div className='logos'>
          <div
            className='logo'
            style={{ backgroundImage: 'url(/static/logos/merck.png)' }}
          />
          <div
            className='logo'
            style={{ backgroundImage: 'url(/static/logos/verizon.png)' }}
          />
          <div
            className='logo'
            style={{ backgroundImage: 'url(/static/logos/sonos.png)' }}
          />
          <div
            className='logo'
            style={{ backgroundImage: 'url(/static/logos/abinbev.png)' }}
          />
          {/* <div
            className='logo'
            style={{ backgroundImage: 'url(/static/logos/artsy.png)' }}
          /> */}
          <div
            className='logo'
            style={{ backgroundImage: 'url(/static/logos/campari.png)' }}
          />
          <div
            className='logo contain'
            style={{ backgroundImage: 'url(/static/logos/squarespace.png)' }}
          />
        </div>
      </div>
      <style jsx>
        {`
        .wrapper {
          background: ${colors.gray7};
          margin: ${margins.xxl}px auto;
          padding: ${margins.xxl}px 0;
        }
        .inner {
          ${layout.desktop}
          display: flex;
          align-items: center;
        }
        .blurb {
          ${columns(4)}
        }
        .logos {
          ${columnList(6, 2)}
          margin-left: ${gutterSize}px;
          grid-column-gap: ${margins.xs}px;
          text-align: center;
          flex-grow: 1;
        }
        .logo {
          display: inline-block;
          background: white no-repeat center center;
          background-blend-mode: multiply;
          width: 100%;
          height: 100px;
          margin-bottom: ${margins.xs}px;
          padding-top: 100%;
          position: relative;
          opacity: 0.8;
        }
        .logo.contain {
          background-size: 90%;
        }
        @media screen and (max-width: 950px) {
          .logos {
            ${columnList(6, 2)}
          }
        }
        }
        @media screen and (max-width: 650px) {
          .logos {
            ${columnList(2, 1)}
          }
        }
        @media screen and (max-width: 480px) {
          .wrapper {
            margin: ${margins.l}px auto;
            padding-top: ${margins.l}px;
            padding-bottom: ${margins.l}px;
          }
          .logo {
            background-size: 80% contain;
          }
          .inner {
            ${layout.mobile}
          }
        }
        `}
      </style>
    </div>
  )
}
