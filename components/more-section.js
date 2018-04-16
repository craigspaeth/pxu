import { columns, margins, type, columnList, layout } from '../lib/styles'
import copy from '../lib/copy'
import Blurb from './blurb'

export default () => {
  return (
    <div className='wrapper'>
      <div className='inner'>
        <div className='blurb-wrapper'>
          <Blurb
            icon='/static/more-icon.svg'
            header={copy.moreSection.h}
            paragraph={copy.moreSection.p}
          />
        </div>
        <div className='items'>
          {copy.moreSection.ul.map(li => (
            <dl>
              <dt>{li[0]}</dt>
              {li.slice(1).map(c => <dd>{c}</dd>)}
            </dl>
          ))}
        </div>
      </div>
      <style jsx>{`
      .wrapper {
        ${layout.desktop}
        margin: ${margins.xxl}px auto;
      }
      .inner {
        ${columns(8)}
        margin: auto;
      }
      .blurb-wrapper {
        ${columns(4)}
      }
      dt {
        ${type.sourceCodeLabelM}
        margin-bottom: ${margins.xs}px;
        display: inline-block;
      }
      dd {
        margin-bottom: ${margins.xs}px;
      }
      dd:last-child {
        margin-bottom: 0px;
      }
      .items {
        margin-top: ${margins.m}px;
        ${columnList(8, 2)}
        ${type.helveticaM}
      }
      @media screen and (max-width: 480px) {
        .wrapper {
          ${layout.mobile}
          margin: ${margins.l}px auto;
        }
        .items {
          ${columnList(2, 1)}
        }
        dl:nth-child(3), dl:nth-child(4) {
          margin-top: ${margins.m}px;
        }
      }
      `}</style>
    </div>
  )
}
