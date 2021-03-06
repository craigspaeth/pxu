import {
  columns,
  margins,
  type,
  columnList,
  colors,
  layout,
  gutterSize
} from '../lib/styles'
import copy from '../lib/copy'
import Blurb from './blurb'

export default () => {
  return (
    <div className='wrapper'>
      <div className='inner'>
        <div className='blurb'>
          <Blurb
            icon='/static/weve-worked-with-icon.svg'
            header={copy.clientsSection.h}
            paragraph={copy.clientsSection.p}
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
          grid-row-gap: ${margins.xs}px;
          text-align: center;
          flex-grow: 1;
        }
        .logo {
          display: inline-block;
          background: white no-repeat center center;
          background-blend-mode: multiply;
          width: 100%;
          position: relative;
          opacity: 1;
        }
        .logo:after {
          content: '';
          display: block;
          padding-bottom: 100%;
        }
        .logo.contain {
          background-size: 90%;
        }
        @media screen and (max-width: 1150px) {
          .logos {
            grid-template-columns: 1fr 1fr;
          }
        }
        @media screen and (max-width: 950px) {
          .inner {
            display: block;
          }
          .logos {
            margin: ${margins.l}px 0;
            grid-template-columns: 1fr 1fr 1fr;
          }
          .logo {
            background-size: 80%;
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
          .logos {
            margin: 20px 0 0 0;
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
