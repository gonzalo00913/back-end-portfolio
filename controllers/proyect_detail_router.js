const details = require('../api')
const detailRoutes = require('express').Router()

detailRoutes.get('/:id', async (req, res) => {
    const id = req.params.id;
    try {
      const detail = await details.find(project => project.id === parseInt(id));
      if (detail) {
        res.json(detail);
      } else {
        res.status(404).json({ message: 'Proyecto no encontrado' });
      }
    } catch (error) {
      console.log("error", error);
      res.status(500).json({ message: 'Error interno del servidor' });
    }
  });

module.exports = detailRoutes

