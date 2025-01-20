export class PubSubManager {
  private static instance: PubSubManager;

  private constructor() {}

  public static getInstance(): PubSubManager {
    if (!PubSubManager.instance) {
      PubSubManager.instance = new PubSubManager();
    }
    return PubSubManager.instance;
  }

  addUsertoStock(userId: string, stockTicker: string) {}

  removeUserFromStock(userId: string, stockTicker: string) {}
  forwardMessageToUser(userid: string, stockTicker: string, price: string) {}
}
