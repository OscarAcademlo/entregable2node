const express = require ('express')
const app = express()
const userRouter = require('./user/user.router')

//habilita recibir formato json
app.use(express.json())

//verifica funcionamiento del servidor
app.get('/',(req,res)=>{
res.status(200).json({mesagge:'server ok'})
})
app.use("/",userRouter)
app.listen(9000, ()=> {
console.log("server started at port 9000")
})
