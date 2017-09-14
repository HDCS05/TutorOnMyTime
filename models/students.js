module.exports = function(sequelize, DataTypes) {
  var Students = sequelize.define("students", {
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
    	type:DataTypes.STRING,
    	allowNull: false,
    	validate: {
    		len:[1] 
    	}
    },
  });
  return Students
};