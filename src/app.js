const path = require('path')
const express = require('express');
const hbs = require('hbs');
const app = express();
const port =process.env.PORT || 8000;
//public static path
const staticpath = path.join(__dirname,"../public");
const temppath = path.join(__dirname,"../templates/views");
const partialpath = path.join(__dirname,"../templates/partials");

app.set('view engine','hbs');
app.set('views',temppath);
hbs.registerPartials(partialpath);
app.use(express.static(staticpath));

app.get("/",(req,res)=>{
    res.render('index');
})
app.get('/about',(req,res)=>{
    res.render('about');
})

app.get('/weather',(req,res)=>{
    res.render('weather');
})
app.get('*',(req,res)=>{
    res.render('404err');
})

app.listen(port,()=>{
    console.log(`Server started at Port no. ${port}`);
});