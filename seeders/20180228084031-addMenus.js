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
   let arrInput = fs.readFileSync('./menu.csv','utf8').trim().split('\n'); // returns array of string

   let arrObjInput = [];
   for (let i = 0; i < arrInput.length; i++) {
     let objInput = {};
     objInput['MenuType'] = arrInput[i].split(',')[1]
     objInput['Name'] = arrInput[i].split(',')[2]
     objInput['Price'] = arrInput[i].split(',')[3]
     objInput['createdAt'] = new Date();
     objInput['updatedAt'] = new Date();
     arrObjInput.push(objInput)
   }

   return queryInterface.bulkInsert('Menus', arrObjInput, {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */

    return queryInterface.bulkDelete('Menus', null, {});


  }
};
