import express from 'express'

const app = express()

app.get('/', (req: any, res: any) => {
    res.send('lol')
})

app.listen(1001, () => console.log('back is on 1001'))