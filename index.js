const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Look mama ! i can code For you.!!')
})

const users = [
    { id: 1, name: 'sabnur', email: 'sabnur@gmail.com', phone: '01720088781' },
    { id: 2, name: 'sabana', email: 'sabana@gmail.com', phone: '01720088781' },
    { id: 3, name: 'purnima', email: 'purnima@gmail.com', phone: '01720088781' },
    { id: 4, name: 'bobita', email: 'bobita@gmail.com', phone: '01720088781' }
]

app.get('/users', (req, res) => {
    res.send(users)
})

app.get('/user/:id', (req, res) => {
    console.log(req.params)
    const id = parseInt(req.params.id)
    const user = users.find(u => u.id === id)
    res.send(user)
})

app.post('/user', (req, res) => {
    console.log('request', req.body);
    const user = req.body
    user.id = users.length + 1
    users.push(user)
    res.send(user)
})

app.get('/fruits', (req, res) => {
    res.send(['mango', 'apple', 'oranges'])
})

app.listen(port, () => {
    console.log('Listening to port', port)
})