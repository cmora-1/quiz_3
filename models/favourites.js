module.exports = function(sequelize, DataTypes) {
  var Favourites = sequelize.define(
  	'Favourites',
      { asignado: {
          type: DataTypes.BOOLEAN,
          defaultValue: false
        }
      }
  );
  return Favourites;
}
