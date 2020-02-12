import Notification from '../schemas/Notification';
import User from '../models/User';

class NotificationController {
  async index(request, response) {
    const isProvider = await User.findOne({
      where: { id: request.userId, provider: true },
    });

    if (!isProvider) {
      return response
        .status(401)
        .json({ error: 'Only provider can load notification' });
    }

    const notifications = await Notification.find({
      user: request.userId,
    })
      .sort({ createdAt: 'desc' })
      .limit(20);

    return response.json(notifications);
  }
}

export default new NotificationController();
