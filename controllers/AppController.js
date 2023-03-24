const { checkRedis, checkDb } = require('../utils');

const AppController = {
  getStatus: (req, res) => {
    const redisStatus = checkRedis() ? 'alive' : 'dead';
    const dbStatus = checkDb() ? 'alive' : 'dead';
    res.status(200).json({ redis: redisStatus, db: dbStatus });
  },

  getStats: async (req, res) => {
    try {
      const usersCount = await User.countDocuments({});
      const filesCount = await File.countDocuments({});
      res.status(200).json({ users: usersCount, files: filesCount });
    } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
    }
  }
};

module.exports = AppController;

