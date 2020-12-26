const  { Kafka } = require('kafkajs');

var producer = {
    produce: function(req, res, next) {
        res.writeHead(200, {
            'Content-Type': 'text/event-stream',
            'Cache-Control': 'no-cache',
            'Connection': 'keep-alive',
			'Access-Control-Allow-Origin': '*'
        });

        var username = req.params.username;
        var email = req.params.email;
        var dname = req.params.dname;
        var dmake = req.params.dmake;
        var dsn = req.params.dsn;
        var dstatus = req.params.dstatus;
        var dlocation = req.params.dlocation;

      //  res.send("You entered " + req.params.username + ", " + req.params.email);
        var msgToBeProduced = "{\"name\":\""+username+"\",\"email\": \""+email+"\",\"dname\": \""+dname+"\",\"dmake\": \""+dmake+"\",\"dsn\": \""+dsn+"\",\"dstatus\": \""+dstatus+"\",\"dlocation\": \""+dlocation+"\"}";

      //  res.send("Your msg " + msgToBeProduced);
        const kafka = new Kafka({
            clientId: 'my-app',
            brokers: ['localhost:9092']
        })

        const producer = kafka.producer()
        const consumer = kafka.consumer({ groupId: 'test-group' })  

        const run = async (msgToBeProduced) => {
            // Producing
            await producer.connect()
            await producer.send({
              topic: 'test1',
              messages: [
                { value: msgToBeProduced },
              ],
            })
        }
        
        run(msgToBeProduced).catch(console.error)

       // res.send("Your msg " + msgToBeProduced);
    }
};

module.exports = producer;
