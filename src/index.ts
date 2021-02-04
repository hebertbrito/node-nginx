import express from 'express'

const app = express()
const port = process.env.PORT
app.get("/api", async (req, resp) => {
    resp.send(`<h1>some html ${port}</h1>`)
})

app.listen(port, ()=>{
    console.log("listening on port " + port)
})