module.exports = (sequelize, Sequelize) => {
    const UtamaModel = sequelize.define('utama',{
        'utamaId' :{
            type : Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            field: 'utamaId'
        },
        'utamaName' :{
            type : Sequelize.STRING,
            field: 'utamaName'
        },
        'utamaBobot' :{
            type : Sequelize.NUMBER,
            field: 'utamaBobot'
        },
    },{
        //prevent sequelize transform table name into plural
        freezeTableName: true,
        timestamps: true
    });

    UtamaModel.associate = function (models){
        UtamaModel.hasMany(models.AreaModel,{
            foreignKey :'utamaId',
            as :'area'
        });
    }

    return UtamaModel;
}