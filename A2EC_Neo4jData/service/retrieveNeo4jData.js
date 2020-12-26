const neo4j = require('neo4j-driver');

var retriever = {
    produce: function(req, res, next) {
        const driver = neo4j.driver('neo4j://localhost:7687', neo4j.auth.basic('neo4j', 'a2ec'));
        const session = driver.session();
        
        const result = session.readTransaction((tx) =>
          tx.run('MATCH (p:Person) \
          RETURN p as rec',
          {})
        )
        .then(result => {
          res.send(result);
        })
        .catch(error => {
          throw error;
        })
        .finally(() => {
          session.close();
          driver.close();
        });
    }
};

module.exports = retriever;
