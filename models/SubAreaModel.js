module.exports = (sequelize, Sequelize) => {
    const SubAreaModel = sequelize.define('subArea',{
        'subAreaId' :{
            type : Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            field: 'subAreaId'
        },
        'subAreaName' :{
            type : Sequelize.STRING,
            field: 'subAreaName'
        },
        'subAreaNo' :{
            type : Sequelize.INTEGER,
            field: 'subAreaNo'
        },
        'subAreaBobot' :{
            type : Sequelize.NUMBER,
            field: 'subAreaBobot'
        },
        'areaId' :{
            type : Sequelize.INTEGER,
            field: 'areaId'
        },
    },{
        //prevent sequelize transform table name into plural
        freezeTableName: true,
        timestamps: true
    });

    SubAreaModel.associate = function(models) {
        SubAreaModel.belongsTo(models.AreaModel,{
            foreignKey : 'areaId'
        });
        SubAreaModel.hasMany(models.PertanyaanModel,{
            foreignKey :'subAreaId',
            as :'pertanyaan'
        });
    };

    return SubAreaModel;
}