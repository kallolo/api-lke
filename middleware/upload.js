const multer = require('multer');

const imageFilter = (req, file, cb) =>{
    console.log(file)
    if(file.mimetype.startsWith("image")){
        cb(null,true)
    }else{
        cb(`File Hanya Boleh Gambar ${Date.now()}`, false)
    }
};

var storageFoto = multer.diskStorage({
    destination : (req, file, cb) =>{
        cb(null, './uploads/photos');
    },
    filename : (req, file, cb) =>{
        cb(null, `${Date.now()}-checkpoint-${file.originalname}`);
    }
})

var Photos = multer({storage:storageFoto , fileFilter:imageFilter});

module.exports = {
    Photos
};