import { columns, type, layout, margins, colors } from '../lib/styles'
import TextareaAutosize from 'react-autosize-textarea'

const inputStyle = `
  display: block;
  ${type.helveticaM};
  border: 0;
  border-bottom: 2px solid ${colors.gray6};
  padding: 20px 0px;
  width: 100%;
  margin-bottom: ${margins.xs}px; 
  margin-top: 5px;
  outline: none;
  transition: border-color 0.3s;
  height: 30px;
`

export default () => (
  <div className='container'>
    <div className='right'>
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
        <label className='contact-form-textarea'>
          Message
          <TextareaAutosize />
        </label>
        <button type='submit'>Submit</button>
      </form>
    </div>
    <style jsx global>
      {`
      .contact-form-textarea textarea {
        width: 100% !important;
        ${inputStyle}
      }
      .contact-form-textarea:focus textarea {
        border-color: ${colors.blue1};
      }
    `}
    </style>
    <style jsx>{`
      .container {
        position: relative;
        min-height: 70vh;
        max-width: 50vw;
        ${layout.desktop}
        margin-bottom: ${margins.xl}px;
      }
      .right {
        ${columns(5)}
        margin-left: 50%;
      }
      h5 {
        ${type.nimbusS}
        font-weight: bold;
        color: ${colors.blue1};
      }
      p {
        ${type.metaSerifM}
      }
      label {
        ${type.sourceCodeLabelM}
        display: inline-block;
        margin-top: ${margins.s}px;
        width: 100% !important;
      }
      button {
        background: ${colors.gray1};
        color: white;
        width: 100%;
        padding: 10px;
        ${type.helveticaL}
        font-weight: bold;
        outline: none;
        transition: background-color 0.3s ease-in-out;
        margin-top: ${margins.m}px;
        cursor: pointer;
      }
      button:hover, button:focus {
        background-color: ${colors.blue1};
      }
      form {
        margin-top: ${margins.m}px;
      }
      input {
        ${inputStyle}
      }
      input:focus {
        border-color: ${colors.blue1};
      }
      label:focus {
        color: ${colors.blue1};
      }
      @media screen and (max-width: 480px) {
        .container {
          ${layout.mobile}
        }
        .right {
          position: relative;
          right: 0;
        }
      }
    `}</style>
  </div>
)
