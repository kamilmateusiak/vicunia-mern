const Busboy = require('busboy');
const azure = require('azure-storage');
const fileService = azure.createFileService('kat', 'key');

exports.uploadFile = (req, res, next) => {
  const busboy = new Busboy({ headers: req.headers });

  busboy.on('file', (fieldname, file, filename, encoding, mimetype) => {
    file.on('data', (data) => {
      fileService.createFileFromStream('users', '', filename, file, data.length, (err, result, response) => {
        if (!err) {
          res.status(200).send({ message: 'File uploaded' });
        } else {
          res.statusCode(500).send({ error: err, message: 'File upload error' });
        }
      });
    });
  });
  req.pipe(busboy);
};
