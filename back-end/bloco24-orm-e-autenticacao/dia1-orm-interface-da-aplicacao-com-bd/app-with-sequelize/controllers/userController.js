const express = require('express');
const { User } = require('../models');

const router = express.Router();

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findByPk(id);

    return res.status(200).json(user);
  } catch(err) {
    console.error(err);
    return res.status(500).json({ message: 'Erro no servidor!' });
  }
})

router.get('/', async (req, res) => {
  try {
    const users = await User.findAll();
    if (users.length === 0) {
      return res.status(400).json({ message: 'Nenhum usuário encontrado!' });
    }
    
    return res.status(200).json(users);
  } catch(err) {
    console.error(err);
    return res.status(500).json({ message: 'Erro no servidor!' });
  }
});

router.post('/', async (req, res) => {
  try {
    const { fullName, email } = req.body;

    const newUser = await User.create({ fullName, email });
    console.log(newUser);

    return res.status(201).json(newUser);
  } catch(err) {
    console.error(err);
    return res.status(500).json({ message: 'Erro no servidor!' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { fullName, email } = req.body;
    const { id } = req.params;

    const [updateUser] = await User.update(
      { fullName, email },
      { where: { id } }
    )

    console.log(updateUser); // confira o que é retornado quando o user com o id é ou não encontrado - 0/1;

    if(!updateUser) return res.status(404).json({ message: 'Usuário não encontrado' });

    return res.status(200).json({ message: 'Usuário atualizado com sucesso!' });
  } catch (e) {
    console.error(e.message);
    res.status(500).json({ message: 'Erro no servidor!' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleteUser = await User.destroy(
      { where: { id } }
    );
  
    console.log(deleteUser); // 0/1
    if (!deleteUser) {
      return res.status(404).json({ message: 'Usuário não encontrado!' });
    }

    return res.status(200).json({ message: 'Usuário excluído com sucesso!' });
  } catch(err) {
    console.error(err);
    return res.status(500).json({ message: 'Erro no servidor!' })
  }
  
})

module.exports = router;