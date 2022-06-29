const express = require('express')
const app = express()

app.set('view engine', 'ejs')

//port to listen on
app.listen(3000)

//routes
app.get('/', (req, res) => {
  res.render('index')
})

app.get('/about', (req, res) => {
  res.render('about')
})

app.get('/contact', (req, res) => {
  const blogs = [
    {
      title: 'Contact',
      description: 'contact number:'
    },
    {
      title: 'Contact',
      description: 'contact number:'
    },
    {
      title: 'Contact',
      description: 'contact number:'
    },
    {
      title: 'Contact',
      description: 'contact number:'
    }
  ]

  res.render('contact', { blogs })
})

// catch 404 and forward to error handler

app.use((req, res) => {
  res.render('404')
})
