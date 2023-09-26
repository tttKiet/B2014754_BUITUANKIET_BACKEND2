import ApiError from "../api-error.js";
import ContactService from "../services/contact.service.js";
import MongoDB from "../utils/mongodb.util.js";

class ContactController {
  async create(req, res, next) {
    const { name } = req.body;
    if (!name) return next(new ApiError(400, "Name cannot be empty"));

    try {
      const contactService = new ContactService(MongoDB.client);
      const document = await contactService.create(req.body);
      res.send(document);
    } catch (error) {
      return next(
        new ApiError(500, "An error occurred while creating the contact")
      );
    }
  }
  async findAll(req, res, next) {
    let documents = [];

    try {
      const contactService = new ContactService(MongoDB.client);
      const { name } = req.query;

      if (name) documents = await contactService.findByName(name);
      else documents = await contactService.find({});

      return res.send(documents);
    } catch (error) {
      return next(
        new ApiError(500, "An error occurred while retrieving contacts")
      );
    }
  }

  async findOne(req, res, next) {
    try {
      const contactService = new ContactService(MongoDB.client);
      const document = await contactService.findById(req.params.id);

      if (!document) return next(new ApiError(404, "Contact not found"));

      return res.send(document);
    } catch (error) {
      return next(
        new ApiError(500, `Error retrieving contact with id = ${req.params.id}`)
      );
    }
  }

  async update(req, res, next) {
    if (Object.keys(req.body).length === 0)
      return next(new ApiError(400, "Data to update can not be empty"));

    try {
      const contactService = new ContactService(MongoDB.client);
      const document = await contactService.update(req.params.id, req.body);

      if (!document) return next(new ApiError(404, "Contact not found"));

      return res.send({ message: "Contact was updated successfully" });
    } catch (error) {
      return next(
        new ApiError(500, `Error retrieving contact with id = ${req.params.id}`)
      );
    }
  }

  async delete(req, res, next) {
    try {
      const contactService = new ContactService(MongoDB.client);
      const document = await contactService.delete(req.params.id);

      if (!document) return next(new ApiError(404, "Contact not found"));

      return res.send({ message: "Contact was deleted successfully" });
    } catch (error) {
      return next(
        new ApiError(500, `Could not delete contact with id = ${req.params.id}`)
      );
    }
  }

  async deleteAll(req, res, next) {
    try {
      const contactService = new ContactService(MongoDB.client);
      const deleteCount = await contactService.deleteAll();

      return res.send({
        message: `${deleteCount} contacts were deleted successfully`,
      });
    } catch (error) {
      return next(
        new ApiError(500, `An error occurred while remove all contacts`)
      );
    }
  }

  async findAllFavorite(req, res, next) {
    try {
      const contactService = new ContactService(MongoDB.client);
      const documents = await contactService.findFavorite();

      return res.send(documents);
    } catch (error) {
      return next(
        new ApiError(
          500,
          `An error occurred while retrieving favorite contacts`
        )
      );
    }
  }
}

export default new ContactController();
