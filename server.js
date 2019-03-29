const express = require('express')
const app = express()
const port = 3000
const fs = require('fs');
require('custom-env').env('project');
app.get('/api/setenv', (req, res) =>{
    fs.readFile('data.json',(err,data)=>{
        if (err){
            console.log(err);
        }
        let config = JSON.parse(data);
        if (req.query.data){
            if( typeof config[req.query.data.toLowerCase()] != 'undefined'){
                fs.writeFileSync(process.env.ENV_FILE,config[req.query.data.toLowerCase()]);
                res.send({'status':'success'});
            }
            else{
                res.send({'status':"failure"});
            }
        }
    })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))