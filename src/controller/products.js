const ModelProduct = require("./../model/products");

const ProductController = {
  update: (req, res, next) => {
    ModelProduct.updateData(req.params.id, req.body)
      .then((result) =>
        res.send({
          status: 200,
          message: `berhasil memasukan data`,
          data: result,
        })
      )
      .catch((err) => res.send({ message: "error", err }));
  },
  delete: (req, res, next) => {
    ModelProduct.deleteData(req.params.id)
      .then((result) =>
        res.send({ status: 200, message: `berhasil menghapus data` })
      )
      .catch((err) => res.send({ message: "error", err }));
  },
  getProduct: (req, res, next) => {
    ModelProduct.selectData()
      .then((result) => res.send({ result: result.rows }))
      .catch((err) => res.send({ message: "error", err }));
  },
  insert: (req, res, next) => {
    ModelProduct.insertData(req.body)
      .then((result) =>
        res.send({ status: 200, message: `berhasil memasukan data` })
      )
      .catch((err) => res.send({ message: "error", err }));
  },
};

exports.ProductController = ProductController;
