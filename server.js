const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// CORS ayarları
app.use(cors());

// Müzik dosyalarını yüklemek için diskStorage kullanma
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/music'); // Dosyaların yükleneceği dizini 'public/music' olarak belirtin
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

// Müzik dosyalarını yükleme
const upload = multer({ storage: storage }).single('musicFile');

// Ana sayfa için GET endpoint'i
app.get('/', (req, res) => {
    res.send('Ana sayfa');
});

// Müzik dosyası yükleme endpoint'i
app.post('/upload', (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            return res.status(500).send({ error: 'Dosya yükleme hatası.' });
        }
        res.status(200).send('Dosya yüklendi.');
    });
});

// Sunucu başlatma
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
