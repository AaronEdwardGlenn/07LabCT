# 07LabCT

NOTES 12-10-19

Representational State Transfer (REST)

cacheable - given the same rquest, you're always gonna get the same kind of response. so you can cache the response. 
unifrom interface - routes always look the same /<resource>... so for dogs, /api/v1/dogs (resource always pluralized). /api/v1/cats
layered syste - we have different peices of the app that does different things. Express erver is the middle layer, (we are focusing on this in career track) Then we have the clinet side (user) and then the database. 

POST when we want to create a new resource

GET a list a resource (read all)

GET an individual resource (read one)

PUT update in whole

PATCh update in part

DELETE delete one .. deletes a resource by ID

PUT EX::::
{
    name: 'spot' 
    age: 5
    weight: '20 lbs
}

{ name: 'rover }

now that object will only contain name:rover, it replaces the rest of the elements in teh origional object. 

:::::::

PATCH EX::::::::
{
    name: 'spot' 
    age: 5
    weight: '20 lbs
}

{ name: 'rover' }

===
{
    name: 'rover', 
    age: 5,
    weight: '20 lbs
}

*** only updating what is in the patch field, unlike put


install all the dependences after setting up shit with npm i -y and npm i -d (dependences go ehre mongoose, dotenv, jest, etc. )

Change ur scripts in package JSON to match what ur tests need. 

Create Server.js
REquire (dotenv)

.env

MongoDB_URI=mongodb://localhost:27017/paperintentory

create lib/utils/connect.js

in connect.js -- add code that has connection message. (we made this in a previous lab and are just coppy pasting it. this is what i mean by that. just add the code with the conection messages that have the :) connected and :( not connected. )

Server.js

require(/lib/utils/connect) and invoke (). now we can connect to the server node server.js

now create app.js
const express - require (express 
const app = express()

module.export = app. 

##Server.js 

const app - require 9app. 

app.listen (7890, () => 
console.log(app started)

##app.js 

app.use (express.json()) <---this is the middleware

---make models directory models/paper.js

##Paper.js

cosnt mongoose = require(mongoose 
const  schema = new mongoose.Schema({
    type: {
        type: string, 
        required: true
    }
    color: {
        type: string, 
        required: true
    }
    Qualtity: {
        type: number, 
        requrie: true
    }
})

module.exports = mongoose.model('paper', Schema); 

--- maek tests directory __tests__/app.test.js

##app.test.js

const request = require('supertest'); 
cosnt app = require('...app.js;)

describe('paper routes, () => {
    it('can create paper', () => {
        return(request(app)
        .post(./api/v1/paper')
        .send({
            type: '.."
            color '...
            quant 54
        })
        .then (res=> {
            expect(res.body).toEqual({
                id: expect.any(string)
                 type: '.."
                color '...
                quant 54
                __v: 0
            })
        })
    });
});
module.exports = mongoose.model('paper', Schema); 

##app.js

cont Paper = require('./models/paper)

ap.post ('/api/v1/paper, (req, res) ={
    Paper
    .create(req.body)
    .then(paper = res.send(paper))
}
require('dotenv).config()
require('./lib/utils/connect)(); 

##app.test.js
const mongoose = require mongose; 


beforeEach (() => {
    return mongo.connection.dropDatabase()
; })

afterAll(() => {
    return mongo.conection.close()
}

const Ppaer = require paper (at top)

(next test)

it('gets paper by id' async() => {
    const paper = await Paper.create({
        name: 'notecard'
        color: 'rd;
        quantity: 20
    })

    return request(app)
    .get(  `api/v1/paper /${paper._id})
    .then( res => {
        expecgt(res.body).toEqual({
            id: paper._id.toString(); 
            name: 'notecard'
        color: 'rd;
        quantity: 20
        __v: 0
        })
    })
})

###app.js (make route for the test)

app.get('api/vi/paper/:id), (req, res) => {
    Ppaer
    .findById(req.params.id)
    .then(paper => res.send(paper));

### app.test.js (make gets a list of paper)


it('gets a list of paper', async() => {
    const paper = await Paper.create([
        {
            type: 'notecards, 
            color: 'red'
            quant: 20
        },
         {
            type: 'othercard, 
            color: 'red'
            quant: 20
        },
         {
            type: 'other other card, 
            color: 'red'
            quant: 20
        },
    ]);
    return request(app)
    .get('api/v1/paper)
    .then res => {
        paper.forEarch (paper => {
            expect(res.body).toContainEqual({
                _id: paper._id.toString()
                type: paper.type
                color: paper.color
                quantity: paper. quant 
                __v: 0
            })


        })
    }
}

## app.js 

app.get('api/v1/paper', (req, res) => {
    Paper
    .find() 
    .then(paper => res.send(papers))
})

## app.test.js

it('updates a paper by id', async() => {
    const paper = await Paper.create({
        type: notecard;, 
        color: red, 
        quant: 10
    })

    return request(app)
    .patch(/.api/v1/paper/${paper._id})
    .send({quant: 19})
    .then(res => {
        expect(res.body).toEqual({
            id: expect.any(string)
                 type: notecard
                color red
                quant 19
                __v: 0
        })
    })
})

### app.js

app.patch('./api/v1/paper/:1d, (req, res) => {
    Ppaer
    .findByIdandUpdate(req.paparms.id, req.body, {new: true})
    .then(paper => res.send(paper))
})

### app.test.js 

it('deletes a paper by id', async () => {
    const paper = await Paper.create({
                 type: '.."
                color '...
                quant 54
                __v: 0
    })
    return request(app)
    .delecte(api/v1/paper ${paper._id})
    .then(res => {
        expect(res.body).toEqual({
            id: expect.any(string)
                 type: '.."
                color '...
                quant 54
                __v: 0
        })
    })
}

## app.js 

app.dleelte ('api/v1/ paper: id, (req, res) => {
    Ppaer 
    .findbyIdandDelete(req.params.id)
    .then(paper = res.send(paper))
})

_____

make a routes folder in lib and make paper js in routes

## paper.js (routes)

const { router } = requre(express)

coppy all the methods and delete "app"

module.exports = Router()
.post ....
.get ...
.get('api/v1/paper', (req, res) => {
    Paper
    .find() 
    .then(paper => res.send(papers))
})
..etc

## app.js

delete methods

add app.use(require('/routes/paper))

still have moduel.exports = app

## paper.js (routes)

*** you can delete path  if you add app.use('/api/v1/paper', requre('./routes/paper') in ##app.js)

***** cahnge app.test.js to paper.test.js to just test waht is in routes/paper.js

## package.JSON "scripts" :{
    test: .... this is changed
}


## Paper.js 

our paper should also have a size

const sizeSchema = new mongoose.Schema({
    hight: {
        type: number
        requred: true
    }
    width: {
        type: number 
        required: true
    }
})

now we can apply this schema in our other schema. 


like this :::::

 type: {
        type: string, 
        required: true
    }
    color: {
        type: string, 
        required: true
    }
    size: sizeSchema or [sizeSchema]if it's an array
    Qualtity: {
        type: number, 
        requrie: true
    }
    :::::::::

## now paper.test.js --let's see what it's like to offer an array of sizes that [sizeSchema] requires. 

** after quant in it('can create paper)
size: [
    {height: 3, width, 3}, 
    {height: 3, width, 6}
]
** tests will still fal at this poitn eucase thare are new random ids taht area created for all sub docuemnts. 

to fix this : 

 {_id: expect.any(String, height: 3, width, 3}, 


 __ now still in ## paper.test.js

 beforeEach( async() => {
     paper = await Paper.create() 

     add paper schema here: ytpe, color, etc but no weight. 
 }

 ** now we must go through the tests to delete the creation of each paper. and in the return we add the size in each expect. 

*said again:::
 delete creation of each paper.create in each test, and add size to each expect in each test. 
 ::

