const models = require("../models");

class ArtworkController {
  static browse = async (req, res) => {
    try {
      const artworks = await models.artwork.findAll(req.query);
      if (artworks[0]) {
        const pictureDigital = await Promise.all(
          artworks.map((artwork) =>
            models.picture.find(artwork.picture_idpicture_digital)
          )
        );
        artworks.forEach((artwork, index) => {
          artworks[index] = { ...artwork, ...pictureDigital[index] };
        });
      }
      res.status(200).json(artworks);
    } catch (err) {
      console.error(err);
      res.status(500).send("error");
    }
  };
}

module.exports = ArtworkController;
