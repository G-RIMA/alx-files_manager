const db = require('../utils/db');
const redis = require('../utils/redis');

class AppController {
  static async getStatus(req, res) {
    const redisStatus = await redis.isAlive();
    const dbStatus = await db.isAlive();
    const status = { redis: redisStatus, db: dbStatus };
    res.status(200).json(status);
  }

  static async getStats(req, res) {
    const usersCount = await db.nbUsers();
    const filesCount = await db.nbFiles();
    const stats = { users: usersCount, files: filesCount };
    res.status(200).json(stats);
  }
}

module.exports = AppController;
