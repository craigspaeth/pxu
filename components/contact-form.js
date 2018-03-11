import { columns, type, layout, margins } from '../lib/styles'

export default () => (
  <div className='container'>
    <div className='left'>
      <h5>Let's work together</h5>
      <p>
        Looking for some unicorn designer/developers for your next project? Let’s talk and see if we’d make a good ft.
      </p>
    </div>
    <style jsx>{`
      .container {
        position: relative;
        min-height: 70vh;
        ${layout.desktop}
      }
      .left {
        ${columns(5)}
        position: absolute;
        right: ${margins.l}px;
      }
      h5 {
        ${type.nimbusS}
        font-weight: bold;
      }
      p {
        ${type.metaSerifM}
      }
      @media screen and (max-width: 480px) {
        .container {
          ${layout.mobile}
        }
        .left {
          position: relative;
          right: 0;
        }
      }
    `}</style>
  </div>
)
