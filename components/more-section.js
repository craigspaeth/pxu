import { columns, margins, type, columnList, layout } from '../lib/styles'
import Blurb from './blurb'

export default () => {
  return (
    <div className='wrapper'>
      <div className='inner'>
        <Blurb
          icon='/static/more-icon.svg'
          header='Branding, marketing & more'
          paragraph='While our focus is digital products, we have capabilities to execute across the spectrum. We’ve worked in film post-production, built video games, designed brand identities, managed marketing campaigns, and more. If your product needs multi-disciplinary execution, chances one of us or someone in our network can deliver.'
        />
        <div className='items'>
          <dl>
            <dt>Branding</dt>
            <dd>Foo bar</dd>
            <dd>Foo bar</dd>
            <dd>Foo bar</dd>
          </dl>
          <dl>
            <dt>Marketing</dt>
            <dd>Foo bar</dd>
          </dl>
          <dl>
            <dt>Media</dt>
            <dd>Foo bar</dd>
          </dl>
          <dl>
            <dt>Others</dt>
            <dd>Foo bar</dd>
          </dl>
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
