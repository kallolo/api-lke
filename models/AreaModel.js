module.exports = (sequelize, Sequelize) => {
    const AreaModel = sequelize.define('area',{
        'areaId' :{
            type : Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            field: 'areaId'
        },
        'areaName' :{
            type : Sequelize.STRING,
            field: 'areaName'
        },
        'areaNo' :{
            type : Sequelize.STRING,
            field: 'areaNo'
        },
        'areaBobot' :{
            type : Sequelize.NUMBER,
            field: 'areaBobot'
        },
        'utamaId' :{
            type : Sequelize.INTEGER,
            field: 'utamaId'
        },
    },{
        //prevent sequelize transform table name into plural
        freezeTableName: true,
        timestamps: true
    });

    AreaModel.associate = function(models) {
        AreaModel.belongsTo(models.UtamaModel,{
            foreignKey : 'utamaId'
        });
        AreaModel.hasMany(models.SubAreaModel,{
            foreignKey :'areaId',
            as :'subArea'
        });
    };

    return AreaModel;
}