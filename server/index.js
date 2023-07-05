const express = require('express');
const bodyParser =  require('body-parser')
const mongoose =  require('mongoose');
const cors = require('cors');
const User = require('./model/users');
const PostDriver = require('./model/PostDriver');
const RideReq = require('./model/RideRequest');
const ContactUs = require('./model/Contactus');
const BookRides = require('./model/BookRide');



const app = express();
const port = 4000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors({ origin: true }));
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("we're connected!")
}
);
mongoose.connect('mongodb+srv://admin:admin@cluster0.aq9rwju.mongodb.net/', {useNewUrlParser: true});
const dbo = mongoose.connection;

app.get('/', (req, res) => {
    res.send("Hello World");
}
);
app.post('/driverpost', async (req, res) => {
    let data = await req.body;
    const newPost = new PostDriver(data);
    await newPost.save();
    res.send(newPost);
}
);
app.post('/ridereq', async (req, res) => {
    let data = await req.body;
    console.log("data",data)
    const newPost = new RideReq(data);
    await newPost.save();
    res.send(newPost);
}
);
app.get('/posts', async (req, res) => {
        let data = await PostDriver.find();
        res.send(data);
    }
);
app.get('/rideposts', async (req, res) => {
    let data = await RideReq.find();
    res.send(data);
}
);
app.post('/contact', async (req, res) => {
    let data = await req.body;
    console.log("data",data)
    const newPost = new ContactUs(data);
    await newPost.save();
    res.send(newPost);
}
);
app.put('/book/:id', async (req, res) => {
    console.log("request params===",req.params, {seats: `${req.body.seats}`});
    let result = await PostDriver.findByIdAndUpdate(req.params.id, req.body);
    console.log("result",result);
    res.send(result);
    }
);
app.post('/bookride', async (req, res) => {
    let newBookRide = new BookRides(req.body);
    await newBookRide.save();
    res.send(newBookRide);
    }
);
// app.get('/users', (req, res) => {
//     User.findById(req.params.id, (err, user) => {
//         if (err) throw err;
//         res.send(user);
//     }
//     );
// }
// );
app.post('/users', (req, res) => {
    console.log("users,",req.body)
    const newUser = new User(req.body);
    newUser.save().then((response) => {
        console.log("user",response);
        res.send(response);
    })
    }
);
app.post('/signin', async (req, res) => {
    console.log("users signin,",req.body)
    const newUser = await User.findOne({email: req.body.email})
    if(!!newUser && newUser.password === req.body.password)
    {
        res.send(newUser)
    }
    else {
        res.sendStatus(404)
    }
    }
);
app.put('/users/:id', (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body, (err, user) => {
        if (err) throw err;
        res.send(user);
    }
    );
}
);
app.delete('/users/:id', (req, res) => {
    User.findByIdAndRemove(req.params.id, (err, user) => {
        if (err) throw err;
        res.send(user);
    }
    );
}
);
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
}
);