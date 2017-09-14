module.exports = function(sequelize, DataTypes) {

  var Tutor = sequelize.define("Tutors", {
      id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
      name: { 
          type: DataTypes.STRING,
          required: true,
          validate: {
          len:[1] 
          }
        },
          email: {
         type:DataTypes.STRING,
      // required: true,
         validate: {
        len:[1] 
      }
     },
      subject: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len:[1]
        }
      },
       
        day: {
          type: DataTypes.STRING
        }
  })







  


  return Tutor;
}

