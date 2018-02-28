'use strict';
module.exports = (sequelize, DataTypes) => {
  var Menu = sequelize.define('Menu', {
    MenuType: DataTypes.STRING,
    Name: {
      type: DataTypes.STRING,
      validate: {
        isUnique(values, cb) {
        // console.log('-----',values);
          Menu.findAll().then(arrMenu => {
            for (let i = 0; i < arrMenu.length; i++) {
              if (values == arrMenu[i].Name) {
                cb('Nama menu sudah terdaftar');
              } else {
                cb();
              }
            }
          })
        }
      }
    },
    Price: {
      type: DataTypes.INTEGER,
      validate: {
        isNumeric: {
          args: [[true]],
          msg: 'Price need to be input with numbers'
        }
      }
    } 
  }, {
    hooks: {
      beforeCreate: () => {
        console.log('test');
      }
    }
  });
  Menu.associate = function(models) {
    // associations can be defined here
  };
  return Menu;
};