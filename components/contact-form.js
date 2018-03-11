import { columns, type, layout, margins, colors } from '../lib/styles'

export default () => (
  <div className='container'>
    <div className='left'>
      <h5>Let's work together</h5>
      <p>
        Looking for some unicorn designer/developers for your next project? Let’s talk and see if we’d make a good ft.
      </p>
      <form>
        <label>
          Name
          <input />
        </label>
        <label>
          Email
          <input />
        </label>
        <label>
          Message
          <div className='contenteditable' />
        </label>
        <button type='submit'>Submit</button>
      </form>
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
      label {
        ${type.sourceCodeLabelM}
      }
      input, .contenteditable {
        display: block;
        ${type.helveticaM};
        border: 0;
        border-bottom: 2px solid ${colors.gray6};
        padding: 7px 0s;
        width: 100%;
        margin-bottom: ${margins.xs}px; 
        margin-top: 5px;
        outline: none;
        transition: border-color 0.3s;
        height: 15px;
      }
      input:focus, .contenteditable:focus {
        border-color: ${colors.blue1};
      }
      button {
        background: ${colors.gray1};
        color: white;
        width: 100%;
        padding: 10px;
        ${type.helveticaL}
        font-weight: bold;
      }
      form {
        margin-top: ${margins.m}px;
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
