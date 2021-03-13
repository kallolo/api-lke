module.exports = (sequelize, Sequelize) => {
    const JawabanModel = sequelize.define('jawaban',{
        'jawabanIndex' :{
            type : Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            field: 'jawabanIndex'
        },
        'jawabanId' :{
            type: Sequelize.UUID,
            primaryKey: true,
            field: 'jawabanId',
            defaultValue: Sequelize.UUIDV4
        },
        'pertanyaanId' :{
            type : Sequelize.STRING,
            field: 'pertanyaanId'
        },
        'tahun' :{
            type : Sequelize.STRING,
            field: 'tahun'
        },
        'jawaban' :{
            type : Sequelize.STRING,
            field: 'jawaban'
        },
        'jawabanNilai' :{
            type : Sequelize.NUMBER,
            field: 'jawabanNilai'
        },
        'tindakLanjut' :{
            type : Sequelize.STRING,
            field: 'tindakLanjut'
        },
        'keterangan' :{
            type : Sequelize.STRING,
            field: 'keterangan'
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

    JawabanModel.associate = function(models) {
        JawabanModel.belongsTo(models.PertanyaanModel,{
            foreignKey : 'pertanyaanId'
        });
        JawabanModel.hasMany(models.BuktiModel,{
            foreignKey :'jawabanId',
            as :'bukti'
        });
    };

    return JawabanModel;
}