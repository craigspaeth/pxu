import {
  columns,
  margins,
  type,
  columnList,
  colors,
  layout
} from '../lib/styles'
import Blurb from './blurb'

export default () => {
  return (
    <div className='wrapper'>
      <div className='inner'>
        <Blurb
          icon='/static/weve-worked-with-icon.svg'
          header='Tech startups to healthcare giants'
          paragraph='We’ve worked with a wide range of companies in a variety of industries including technology, liquor, fashion, real estate, healthcare, and more. We love solving problems from all sorts of backgrounds and embrace a new challenge.'
        />
        <div className='logos'>
          <div
            className='logo'
            style={{ backgroundImage: 'url(/static/logos/abinbev.png)' }}
          />
          <div
            className='logo'
            style={{ backgroundImage: 'url(/static/logos/artsy.png)' }}
          />
          <div
            className='logo'
            style={{ backgroundImage: 'url(/static/logos/campari.png)' }}
          />
          <div
            className='logo contain'
            style={{ backgroundImage: 'url(/static/logos/investforward.png)' }}
          />
          <div
            className='logo'
            style={{ backgroundImage: 'url(/static/logos/istar.png)' }}
          />
          <div
            className='logo'
            style={{ backgroundImage: 'url(/static/logos/merck.png)' }}
          />
          <div
            className='logo'
            style={{ backgroundImage: 'url(/static/logos/observer.png)' }}
          />
          <div
            className='logo'
            style={{ backgroundImage: 'url(/static/logos/sonos.png)' }}
          />
          <div
            className='logo contain'
            style={{ backgroundImage: 'url(/static/logos/squarespace.png)' }}
          />
          <div
            className='logo'
            style={{ backgroundImage: 'url(/static/logos/verizon.png)' }}
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
        }
        .logos {
          ${columnList(10, 2)}
          grid-column-gap: ${margins.xs}px;
          text-align: center;
          margin-top: ${margins.m}px;
        }
        .logo {
          display: inline-block;
          background: ${colors.gray7} no-repeat center center;
          background-blend-mode: multiply;
          width: 100%;
          height: 100px;
          margin-bottom: ${margins.xs}px;
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
