module.exports = (sequelize, Sequelize) => {
    const PertanyaanModel = sequelize.define('pertanyaan',{
        'pertanyaanId' :{
            type : Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            field: 'pertanyaanId'
        },
        'pertanyaanNo' :{
            type : Sequelize.STRING,
            field: 'pertanyaanNo'
        },
        'pertanyaanDeskripsi' :{
            type : Sequelize.STRING,
            field: 'pertanyaanDeskripsi'
        },
        'pertanyaanOptions' :{
            type : Sequelize.STRING,
            field: 'pertanyaanOptions'
        },
        'subAreaId' :{
            type : Sequelize.INTEGER,
            field: 'subAreaId'
        },
    },{
        //prevent sequelize transform table name into plural
        freezeTableName: true,
        timestamps: true
    });

    PertanyaanModel.associate = function(models) {
        PertanyaanModel.belongsTo(models.SubAreaModel,{
            foreignKey : 'subAreaId'
        });
        PertanyaanModel.hasOne(models.JawabanModel,{
            foreignKey :'pertanyaanId',
            as :'jawaban'
        });
    };

    return PertanyaanModel;
}