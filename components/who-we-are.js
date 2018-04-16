import {
  columns,
  layout,
  columnList,
  colors,
  type,
  margins
} from '../lib/styles'
import copy from '../lib/copy.json'
import Blurb from './blurb'

export default () => {
  return (
    <div className='wrapper'>
      <div className='inner'>
        <div className='blurb-container'>
          <Blurb
            icon='/static/people-icon.svg'
            header={copy.peopleSection.h}
            paragraph={copy.peopleSection.p}
          />
        </div>
        <ul>
          <li>
            <div className='img' />
            <h6>Rachel Pigott</h6>
            <p>{copy.peopleSection.rachel}</p>
          </li>
          <li>
            <div className='img' />
            <h6>Craig Spaeth</h6>
            <p>{copy.peopleSection.craig}</p>
          </li>
          <li>
            <div className='img' />
            <h6>Our Network</h6>
            <p>{copy.peopleSection.network}</p>
          </li>
        </ul>
      </div>
      <style jsx>{`
        .wrapper {
          ${layout.desktop}
          display: flex;
          justify-content: flex-end;
          margin: ${margins.xxl}px auto;
        }
        .blurb-container {
          ${columns(4)}
        }
        .inner {
          ${columns(9)}
          width: 100%;
        }
        ul {
          ${columnList(9, 3)}
        }
        li {
          margin-top: ${margins.l}px;
        }
        .img {
          width: 100%;
          padding-top: 100%;
          background: ${colors.gray6};
          border-radius: 100%;
        }
        h6 {
          ${type.sourceCodeLabelM}
          margin-top: ${margins.m}px;
        }
        li p {
          ${type.sourceCodeCaptionM}
          margin-top: ${margins.xs}px;
        }
        @media screen and (max-width: 700px) {
          ul {
            ${columnList(2, 1)}
          }
        }
        @media screen and (max-width: 480px) {
          ul {
            ${columnList(1, 1)}
          }
          .wrapper {
            ${layout.mobile}
            margin: ${margins.l}px 0;
          }
        }
      `}</style>
    </div>
  )
}
