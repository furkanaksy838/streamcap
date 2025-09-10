const cds = require('@sap/cds');
const { SELECT } = cds.ql;
const { once } = require('node:events');

cds.on('bootstrap', app => {
  
  app.get('/OrdersStream', async (req, res) => {
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.setHeader('Transfer-Encoding', 'chunked');
    await SELECT.from('my.Orders').pipeline(res);
  });
});

module.exports = cds.server;
