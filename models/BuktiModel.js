module.exports = (sequelize, Sequelize) => {
    const BuktiModel = sequelize.define('buktiDukungan',{
        'buktiDukunganIndex' :{
            type : Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            field: 'buktiDukunganIndex'
        },
        'buktiDukunganId' :{
            type: Sequelize.UUID,
            primaryKey: true,
            field: 'buktiDukunganId',
            defaultValue: Sequelize.UUIDV4
        },
        'jawabanId' :{
            type : Sequelize.STRING,
            field: 'jawabanId'
        },
        'buktiDukunganFile' :{
            type : Sequelize.STRING,
            field: 'buktiDukunganFile'
        },
        'buktiDukunganDeskripsi' :{
            type : Sequelize.STRING,
            field: 'buktiDukunganDeskripsi'
        },
        'recordStatus' :{
            type : Sequelize.STRING,
            field: 'recordStatus'
        },
    },{
        //prevent sequelize transform table name into plural
        freezeTableName: true,
        timestamps: true
    });

    BuktiModel.associate = function(models) {
        BuktiModel.belongsTo(models.JawabanModel,{
            foreignKey : 'jawabanId'
        });
    };

    return BuktiModel;
}