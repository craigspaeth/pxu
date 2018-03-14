import { columns, type, layout, margins, colors } from '../lib/styles'
import Textarea from 'react-textarea-autosize'
import request from 'superagent'
import _ from 'lodash'

const inputStyle = `
  display: block;
  ${type.helveticaM};
  border: 0;
  border-bottom: 2px solid ${colors.gray6};
  padding: 10px 0px;
  width: 100%;
  margin-bottom: ${margins.xs}px;
  margin-top: 5px;
  outline: none;
  transition: border-color 0.3s;
`

export default class extends React.Component {
  constructor () {
    super()
    this.state = { missing: [] }
  }

  onSubmit = async e => {
    e.preventDefault()
    const from = this.refs.email.value
    const text = this.textarea.value
    const name = this.refs.name.value
    const missing = []
    if (!from) missing.push('email')
    if (!text) missing.push('message')
    if (missing.length) return this.setState({ missing })
    await request.post('/mail', {
      subject: `Pixel Unicorns: You got mail${name ? ` from: ${name}` : ''}!`,
      from,
      text
    })
  }

  clearMissing = name => e => {
    this.setState({ missing: _.without(this.state.missing, name) })
  }

  render () {
    return (
      <div className='container'>
        <div className='right'>
          <h5>Let's work together</h5>
          <p>
            Looking for some unicorn designer/developers for your next project? Let’s talk and see if we’d make a good ft.
          </p>
          <form onSubmit={this.onSubmit}>
            <label>
              Name
              <input ref='name' />
            </label>
            <label
              className={_.includes(this.state.missing, 'email') ? 'error' : ''}
            >
              Email*
              <input
                type='email'
                ref='email'
                onKeyDown={this.clearMissing('email')}
              />
            </label>
            <label
              className={
                'contact-form-textarea ' +
                  (_.includes(this.state.missing, 'message') ? 'error' : '')
              }
            >
              Message*
              <Textarea
                inputRef={ref => (this.textarea = ref)}
                onKeyDown={this.clearMissing('message')}
              />
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
          .contact-form-textarea textarea:focus, .contact-form-textarea textarea:active {
            border-color: ${colors.blue1};
          }
          label.error.contact-form-textarea textarea {
            border-bottom-color: ${colors.red1};
          }
        `}
        </style>
        <style jsx>{`
          .container {
            min-height: 70vh;
            max-width: 50vw;
            margin-bottom: ${margins.xl}px;
          }
          .right {
            ${columns(4)}
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
            color: ${colors.gray4};
            display: inline-block;
            margin-top: ${margins.s}px;
            width: 100% !important;
          }
          label.error {
            color: ${colors.red1};
          }
          }
          label.error input {
            border-bottom-color: ${colors.red1};
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
          input:focus, input:active {
            border-color: ${colors.blue1};
          }
          @media screen and (max-width: 750px) {
            .right {
              width: 100%;
              max-width: none;
              margin-left: 0;
            }
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
  }
}
