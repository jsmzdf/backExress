const express = require('express')
const app = express();
const puerto = 3000;

//motor de pantillas
//app.set("view engine", "ejs");
//app.set("views", __dirname + "/views");
app.use(express.static(__dirname + "/public"))

app.get('/', (req, res) => {
    res.render('respuesta')
});

app.get('/serv', (req, res) => {
    res.render("index", { titulo: "titulo dim" })
});
app.use((req, res, next) => {
    res.status(404).sendFile(__dirname + "/public/404.html")
})


app.listen(puerto, () => {
    console.log("servidor fun puerto: " + puerto);
})