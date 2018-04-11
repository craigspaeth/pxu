import {
  columns,
  layout,
  columnList,
  colors,
  type,
  margins
} from '../lib/styles'
import Blurb from './blurb'

export default () => {
  return (
    <div className='wrapper'>
      <div className='inner'>
        <div className='blurb-container'>
          <Blurb
            icon='/static/people-icon.svg'
            header='The people'
            paragraph='Our team has decades of experience designing and building digital products and media. We’ve helped grow startups from several to hundreds of people in size, and elevated local newspapers into global publishing brands.'
          />
        </div>
        <ul>
          <li>
            <div className='img' />
            <h6>Rachel Pigott</h6>
            <p>
              Rachel is a creative who can work and collaborate effectively cross-discipline. Rachel is a hands-on designer in all areas of production––visual, copy, web, and print design—with solid fundamentals in typography, color theory, and composition. Rachel has expertise in all areas of film/video––from pre-production, to production, to post-production.
            </p>
          </li>
          <li>
            <div className='img' />
            <h6>Rachel Pigott</h6>
            <p>
              Do mollit dolore commodo pariatur excepteur sit excepteur incididunt amet nulla ad. Aliqua qui irure sint aliquip nisi excepteur est aliqua do deserunt voluptate sit.
            </p>
          </li>
          <li>
            <div className='img' />
            <h6>Our Network</h6>
            <p>
              Do mollit dolore commodo pariatur excepteur sit excepteur incididunt amet nulla ad. Aliqua qui irure sint aliquip nisi excepteur est aliqua do deserunt voluptate sit.
            </p>
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
