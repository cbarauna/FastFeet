import Recipient from '../models/Recipient';

class RecipientController {
  async store(req, res) {
    const recipient = await Recipient.create(req.body);

    res.json(recipient);
  }

  async index(req, res) {
    const recipient = await Recipient.findAll();

    res.json(recipient);
  }
}

export default new RecipientController();
