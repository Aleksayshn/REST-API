const jimp = require("jimp");
const path = require("path");
const fs = require("fs/promises");

const {setNewAvatar} = require("../../services/userServices/user");

const updateAvatar = async (req, res) => {
  const { _id } = req.user;
  const { path: tmpUpload, originalname } = req.file;

  const image = await jimp.read(tmpUpload);

  image.resize(250, 250);
  await image.writeAsync(tmpUpload);

  const newFileName = `${_id}_${originalname}`;
  const resultUpload = path.join(
    __dirname,
    "../../",
    "public",
    "avatars",
    newFileName
  );
  await fs.rename(tmpUpload, resultUpload);
  const avatarURL = path.join("avatars", newFileName);
  await setNewAvatar(_id, avatarURL);

    res.status(200)
        .json({
        status: "success",
        code: 200,
        data: {
            user: {
                avatarURL
            }
        }
    });
};

module.exports = updateAvatar;