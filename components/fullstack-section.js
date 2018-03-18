import {
  columns,
  margins,
  type,
  columnList,
  colors,
  layout,
  gutterSize
} from '../lib/styles'
import _ from 'lodash'
import Blurb from './blurb'

const codeBlocks = [
  {
    code: `
defmodule Griffin.Model.Validations do
  defp model_to_field(model, crud_op) do
    {singular, plural} = Griffin.Model.Module.namespaces(model)

    field_name =
      case crud_op do
        :create -> "create_#{singular}"
        :read -> singular
        :update -> "update_#{singular}"
        :delete -> "delete_#{singular}"
        :list -> plural
      end

    type_name =
      if crud_op == :list do
        "list_of(:#{singular})"
      else
        ":#{singular}"
      end

    """
    field :#{field_name}, #{type_name} do
      #{model_to_args(model, crud_op)}
      resolve fn (args, _) ->
        model = #{inspect(model)}
        {:ok, Griffin.Model.Module.resolve(model, :#{crud_op}, args).res}
      end
    end
    """
  end

  def valid?(data, dsl, crud_op) do
    new_dsl = Griffin.Model.DSL.for_crud_op(dsl, crud_op)
    valid?(data, new_dsl)
  end

  @doc """
  Returns true/false if there are any error tuples returned from \`&errors/2\`
  """
  def valid?(data, dsl) do
    Enum.empty?(errors(data, dsl))
  end

  @doc """
  Pulls the error tuples out of &results/2
  """
  def errors(data, dsl) do
    Enum.filter(results(data, dsl), fn {status, _} -> status == :error end)
  end
end
    `,
    src: '/static/stack-logos/elixir.png'
  },
  {
    code: `
const express = require('express')
const next = require('next')
const sgMail = require('@sendgrid/mail')
const bodyParser = require('body-parser')

const { PORT, SENDGRID_KEY, NODE_ENV } = process.env
const port = Number(PORT) || 3000
const dev = NODE_ENV !== 'production'
const nextApp = next({ dev })
const handle = nextApp.getRequestHandler()
sgMail.setApiKey(SENDGRID_KEY)

const main = async () => {
  await nextApp.prepare()
  const expressApp = express()

  expressApp.use(bodyParser.json())

  expressApp.post('/mail', (req, res) => {
    sgMail.send({ ...req.body, to: 'craigspaeth@gmail.com' })
    res.send({ success: true })
  })

  expressApp.get('*', (req, res) => {
    handle(req, res)
  })

  expressApp.listen(port, err => {
    if (err) throw err
    console.log(\`> Ready on \${port}\`)
  })
}

main().catch(console.error.bind(console))
    `,
    src: '/static/stack-logos/node.png'
  },
  {
    code: `
class PostsController < ApplicationController
  before_action :set_event, only: [:new, :create, :thank_you]

  # GET /posts/new
  def new
    @post = Post.new name: params[:name], email: params[:email]
  end

  # POST /posts
  # POST /posts.json
  def create
    _, total_count = Poster.create_post!(
      post_params.merge event_id: @event.id
    )
    respond_to do |format|
      format.html {
        redirect_to thank_post_url(@event, total_count: total_count)
      }
    end
  rescue StandardError => e
    logger.warn(e.message)
    respond_to do |format|
      # Add some locals that simple form expects (+ errors)
      @post = Post.new
      @error = e.message
      format.html { render :new }
    end
  end

  def thank_you
    @total_count = (params[:total_count] || 0).to_i
  end
end
      `,
    src: '/static/stack-logos/rails.png'
  },
  {
    code: `
export default class extends React.Component {
  render () {
    return (
      <div>
        <Meta />
        <Nav />
        <Hero />
        <Header
          eyebrow='What we do'
          copy='We build functional digital products'
        />
        <MoreSection />
        <Header
          eyebrow='Who we are'
          copy='We’re an agile team of design-gineers'
        />
        <WeveWorkedWith />
        <ContactForm />
        <Footer />
        <style jsx>
          {
            div {
              height: 1000px;
            }
          }
        </style>
      </div>
    )
  }
}
    `,
    src: '/static/stack-logos/react.png'
  },
  {
    code: `
using UnityEngine;
using System.Collections;

[System.Serializable]
public class DataClass {
    public int myInt;
    public float myFloat;
}

public class DemoScript : MonoBehaviour {

    public Light myLight;
    public DataClass[] myClass;

    void Awake () {
        int myVar = AddTwo(9,2);
        Debug.Log(myVar);
    }

    void Update () {
        if (Input.GetKeyDown ("space")) {
            MyFunction ();
        }

        rigidbody.velocity = 10.0f;
    }

    void MyFunction () {
        myLight.enabled = !myLight.enabled;
    }

    string AddTwo (int var1, int var2) {
        int returnValue = var1 + var2;
        return returnValue;
    }
}
    `,
    src: '/static/stack-logos/unity.png'
  },
  {
    code: `
SELECT d.datname,
  CASE WHEN c.has_database_privilege(d.datname, 'CONNECT')
    THEN c.pg_size_pretty(c.pg_database_size(d.datname))
    ELSE 'No Access'
  END AS SIZE
FROM c.pg_database d
ORDER BY
  CASE WHEN c.has_database_privilege(d.datname, 'CONNECT')
    THEN c.pg_database_size(d.datname)
    ELSE NULL
END;

db.orders.mapReduce(function() {
  for (var idx = 0; idx < this.items.length; idx++) {
      var key = this.items[idx].sku;
      var value = {
                    count: 1,
                    qty: this.items[idx].qty
                  };
      emit(key, value);
  }
},
function(keySKU, countObjVals) {
  reducedVal = { count: 0, qty: 0 };

  for (var idx = 0; idx < countObjVals.length; idx++) {
      reducedVal.count += countObjVals[idx].count;
      reducedVal.qty += countObjVals[idx].qty;
  }

  return reducedVal;
},
  {
    out: { merge: "map_reduce_example" },
    query: { ord_date:
               { $gt: new Date('01/01/2012') }
           },
    finalize: finalizeFunction2
  }
)
    `,
    src: '/static/stack-logos/database.png'
  }
]
const initChars = 0

export default class extends React.Component {
  constructor () {
    super()
    this.state = { charsComplete: initChars, codeBlockIndex: 0 }
    setInterval(() => {
      this.setState({
        charsComplete: this.state.charsComplete + _.random(0, 5)
      })
    }, _.random(5, 25))
    setInterval(() => {
      if (this.state.codeBlockIndex + 1 >= codeBlocks.length) {
        this.setState({ codeBlockIndex: 0, charsComplete: initChars })
      } else {
        this.setState({
          codeBlockIndex: this.state.codeBlockIndex + 1,
          charsComplete: initChars
        })
      }
    }, 5000)
  }

  render () {
    return (
      <div className='wrapper'>
        <div className='code'>
          <code className='numerals'>
            {_.times(100, i => <li>{i}</li>)}
          </code>
          <code className='inner-code'>
            {codeBlocks[this.state.codeBlockIndex].code
              .split('\n')
              .slice(1)
              .join('\n')
              .split('')
              .slice(0, this.state.charsComplete)
              .join('')}
          </code>
        </div>
        <div className='inner'>
          <div className='left'>
            <ul>
              {codeBlocks.map(block => (
                <li style={{ backgroundImage: `url(${block.src})` }} />
              ))}
            </ul>
          </div>
          <div className='right'>
            <Blurb
              icon='/static/fullstack-icon.svg'
              header='Full-stack development'
              paragraph='We have experience in a variety of front-end and back-end technologies. Our team has been responsible for maintaining reliable codebases over many years and launching numerous apps and websites from scratch. Whether you’re looking to set up new data pipelines or implement a stunning use of new 3D technologies we’ll have a solution.'
            />
          </div>
        </div>
        <style jsx>
          {`
        .wrapper {
          background: #27274A;
          margin: 0 auto ${margins.xxl}px auto;
          padding-top: ${margins.xl}px;
          padding-bottom: ${margins.xl}px;
          color: white;
          position: relative;
        }
        .code {
          position: absolute;
          z-index: 0;
          list-style: none;
          line-height: 22px;
          top: 0;
          ${type.sourceCodeCaptionM}
          color: #9797D6;
          overflow: hidden;
          height: 100%;
          width: 100%;
          display: flex;
          user-select: none;
        }
        .code:after {
          content: '.';
          color: transparent;
          width: 100%;
          left: 0;
          position: absolute;
          height: 100%;
          background: linear-gradient(to left, #27274A, rgba(39, 39, 74, 0));
        }
        .code:before {
          content: '.';
          color: transparent;
          background: linear-gradient(to top, #27274A, rgba(39, 39, 74, 0));
          position: absolute;
          height: 15%;
          width: 100%;
          left: 0;
          bottom: 0;
        }
        .code .numerals {
          border-right: 1px solid #454588;
        }
        .code code {
          padding: ${margins.xs}px;
          white-space: pre;
        }
        .inner {
          ${layout.desktop}
          display: flex;
          align-items: center;
          z-index: 1;
          position: relative;
        }
        .left, .right {
          flex-grow: 1;
        }
        .right {
          ${columns(4)}
          margin-left: ${gutterSize}px;
        }
        .left {
          min-width: 50%;
        }
        .left ul {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          grid-template-rows: 1fr 1fr;
          grid-column-gap: ${margins.xs}px;
          grid-row-gap: ${margins.xs}px;
        }
        .left li {
          background: #151538 no-repeat center center;
          background-blend-mode: lighten;
          height: 100px;
          padding-top: 100%;
          transition: background-color 0.5s ease-in-out;
        }
        .left li:nth-child(${1 + this.state.codeBlockIndex}) {
          background-color: #1c1c5f;
          border-color: #1c1c5f;
        }
        .left li:nth-child(1n+4) {
          grid-row-start: 2;
        }
        @media screen and (max-width: 1100px) {
          .left li {
            background-size: contain;
            border: 7px solid #151538;
          }
        }
        @media screen and (max-width: 1000px) {
          .code:after {
            background: linear-gradient(to left, #27274A, #27274A, rgba(39, 39, 74, 0));
          }
        }
        @media screen and (max-width: 900px) {
          .left {
            min-width: 35%;
          }
          .left ul {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr 1fr 1fr;
          }
          .left li:nth-child(1n+3) {
            grid-row-start: 2;
          }
          .left li:nth-child(1n+5) {
            grid-row-start: 3;
          }
        }
        @media screen and (max-width: 700px) {
          .inner {
            display: block;
          }
          .right {
            max-width: none;
          }
          .left ul {
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-rows: 1fr 1fr;
          }
          .left li:nth-child(3n) {
            grid-row-start: 1;
          }
          .left li:nth-child(1n+4) {
            grid-row-start: 2;
          }
          .left, .right {
            width: 100%;
            padding: 0;
            margin: ${margins.l}px 0 0 0;
          }
          .code:before {
            height: 160%;
          }
          .code:after {
            display: none;
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
}
