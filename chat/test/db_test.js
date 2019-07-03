const assert = require('assert');
//import mongoose model 
const chatRh = require('../mongdb/chatMongoose');


//Describe test
describe('saving records', (done) =>{
it('saves a record to the database', () => {
const chat = new chatRh({name:'Ole',
 messages: '',
 time : { type : Date, default: Date.now() },
role: 'Producer'
})

chat.save().then(()=> {
    assert(chat.isNew === false)
    //telles to mocha the test is done 
    done();
});
});


});