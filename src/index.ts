import express from 'express'

const app = express()
const port = process.env.PORT || 5000
app.get("/api", async (req, resp) => {
    resp.send("<h1>some html</h1>")
})

app.listen(port, ()=>{
    console.log("listening on port " + port)
})