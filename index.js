const express = require('express')
var bodyParser = require('body-parser')

const app = express()
const port = 3000

app.use(bodyParser.json())


let data = [
    {
        id:1,
        name: 'baju',
        stock: 50,
        price : 4000,
    },
    {
        id:2,
        name: 'celana',
        stock: 20,
        price : 6000
    }
]

const Middle = function(req, res, next){
  console.log('log middleware')
  next()
}

const Login = function(req,res,next){
    const {name,pass} = req.body
    if(name == 'ean' && pass == 'ean'){
        console.log('berhasil login')
        next()
    } else {
        res.json({message: 'login salah'})
    }
}

// app.use(Middle)

app.post('/products',Login,(req,res)=>{
    res.json(data)
})

// app.get('/products',Middle,(req,res)=>{
//     res.json(data)
// })

app.post('/products',(req,res)=>{
    data = [...data,req.body]
    res.json({status:200, message: `berhasil memasukan data`,data : data})
})

app.put('/products/:id',(req,res)=>{
    let {id,name,stock,price} = req.body
    let newItem = {id,name,stock,price}
    let newData = data.map(item => {
        if(item.id == req.params.id){
            console.log('newItem ',newItem)
            return req.body
        } else {
            return item
        }
    })
    data = [...newData]
    res.json({status: 200, message: 'berhasil mengubah data', data: data})
})

app.delete('/products/:id',(req,res)=>{
    let id = req.params.id
    let newData = []
    data.forEach(item=>{
       if(item.id != id){
        newData =  [...newData,item]
       }
    })
    data = [...newData]
    res.json({status:200, message: `berhasil menghapus data ke ${id}`, data: data})
})


app.get('/:name', (req, res) => {
    let name =  req.params.name
  res.json({status:200,message:'success',data: `Hello ${name}`})
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})