const User = require('../models/User');


module.exports = {
  async index(req, res) {
    const users = await User.findAll();

    return res.send(users);
  },

  async indexId(req, res) {
    const users = await User.findAll({
      where: {
        id: req.params.id
      }
    });
    return res.send(users);
  },

  async login(req, res) {
    const { email, password } = req.body;
    
    const users = await User.findAll({
      attributes: ['id'],
      where: {
        email: email,
        password: password
      }
    });
    
    if(users[0]){
      return res.status(200).send({isAuth: true, id: users[0].dataValues.id});
    }else{
      return res.status(401).send({isAuth: false});
    }
    
  },



  async store(req, res) {
    const { name, email, password } = req.body;

    const user = await User.create({ name, email, password });

    return res.send(user);
  }

};