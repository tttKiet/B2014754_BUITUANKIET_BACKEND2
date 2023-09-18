class ContactController {
  create(req, res, next) {
    res.send({
      message: "create handler",
    });
  }
  findAll(req, res, next) {
    res.send({
      message: "findAll handler",
    });
  }

  findOne(req, res, next) {
    res.send({
      message: "findOne handler",
    });
  }

  update(req, res, next) {
    res.send({
      message: "update handler",
    });
  }

  delete(req, res, next) {
    res.send({
      message: "delete handler",
    });
  }

  deleteAll(req, res, next) {
    res.send({
      message: "deleteAll handler",
    });
  }

  findAllFavorite(req, res, next) {
    res.send({
      message: "findAllFavorite handler",
    });
  }
}

export default new ContactController();
