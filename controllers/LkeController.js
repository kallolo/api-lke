'use strict';
const express = require('express');
const app = express();
const { validationResult } = require('express-validator'); //form validation
const respon = require('../respon');
const { UtamaModel, AreaModel, SubAreaModel, PertanyaanModel, JawabanModel, BuktiModel } =  require('../config/db');
const { Op } = require('sequelize');

exports.formLke = (req, res) => {
    const getTahun = req.params.tahun;
    UtamaModel.findAll({
        include: [
            {
                as: 'area',
                model: AreaModel,
                attributes: ['areaId', 'areaNo', 'areaName', 'areaBobot'],
                include: [
                    {
                        as: 'subArea',
                        model: SubAreaModel,
                        attributes: ['subAreaId', 'subAreaName', 'subAreaNo', 'subAreaBobot'],
                        include: [
                            {
                                as: 'pertanyaan',
                                model: PertanyaanModel,
                                attributes: ['pertanyaanId', 'pertanyaanNo', 'pertanyaanDeskripsi', 'pertanyaanOptions'],
                                include: [
                                    {
                                        as: 'jawaban',
                                        model: JawabanModel,
                                        attributes: ['jawabanId', 'tahun', 'jawaban', 'jawabanNilai', 'keterangan', 'tindakLanjut'],
                                        required: false,
                                        where: { tahun: getTahun },
                                        include: [
                                            {
                                                as: 'bukti',
                                                model: BuktiModel,
                                                attributes: ['buktiDukunganId', 'buktiDukunganFile', 'buktiDukunganDeskripsi'],
                                                required: false,
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },

        ],
    }).then(dataUtama => {

        if (dataUtama.length > 0) {
            var message = `Berhasil Mangambil!`;
            respon.berhasil(dataUtama, message, res)
        } else {
            var message = `Data Checpoint Kosong!`;
            respon.berhasil(null, message, res)
        }

    }).catch(err => console.log(err))
}

exports.postLke = async(req, res) => {
    const fileFoto = req.files;
    if (req.files == undefined) {
        res.status(400).send({
            status: false,
            pesan: `Gambar Masih Kosong, Silahkan Pilih Gambar`,
        });
    }
    // const fileArrayFoto = Object.keys(fileFoto).map(i => fileFoto[i].filename);
   
    const bukti = req.body.fileBukti;
    console.log(fileFoto)
    // console.log(bukti)
    // const test=  bukti.map((data, i) =>{
    //    return data;
    // });
    // test.map((r,i)=>{
    //     console.log(r)
    // })
    // respon.berhasil("ss", "berhasil", res)
}