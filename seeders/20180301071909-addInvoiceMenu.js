'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

   const fs = require('fs');
   let arrInput = fs.readFileSync('./invoicemenu.csv','utf8').trim().split('\n'); // returns array of string

   let arrObjInput = [];
   for (let i = 0; i < arrInput.length; i++) {
     let objInput = {};
     objInput['InvoiceId'] = arrInput[i].split(',')[1]
     objInput['MenuId'] = arrInput[i].split(',')[2]
     objInput['Quantity'] = arrInput[i].split(',')[3]
     objInput['createdAt'] = new Date();
     objInput['updatedAt'] = new Date();
     arrObjInput.push(objInput)
   }

   return queryInterface.bulkInsert('InvoiceMenus', arrObjInput, {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
