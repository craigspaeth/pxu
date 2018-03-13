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
    console.log(`> Ready on ${port}`)
  })
}

main().catch(console.error.bind(console))
