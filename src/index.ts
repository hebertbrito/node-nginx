import express from 'express'

const app = express()
const port = process.env.PORT || 3080
app.get("/api", async (req, resp) => {
    resp.json("server1")
})

app.listen(port, ()=>{
    console.log("listening on port " + port)
})