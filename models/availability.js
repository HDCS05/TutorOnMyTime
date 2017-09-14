module.exports = function(sequelize, DataTypes) {
  var Availability = sequelize.define("availability", {
    
    option1: {
      type: DataTypes.STRING,
      allowNull: false
      },
      option2: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: false
      },
      option3: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: false
      }
      

//     },
  

// {
//     classMethods: {
//       associate: function(models) {
//         Availability.belongsTo(models.Tutor, {
//             onDelete: "CASCADE",
//             hooks: true,
//             foreignKey: {
//               allowNull: true
//             }
//         })
//       }

//   }

   
})
  return Availability;
  
};