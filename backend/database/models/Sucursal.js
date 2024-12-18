module.exports = (sequelize, DataTypes) => {
    const Sucursal = sequelize.define("Sucursal", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      direccion: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      telefono: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    }, {
      tableName: "sucursales",
      timestamps: false,
    });
  
    return Sucursal;
  };
  