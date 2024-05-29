import axios from "axios";

class TypeScriptSDK {
  private readonly apiKey: string;
  private readonly campaignId: string;
  private readonly baseUrl: string;

  constructor(apiKey: string, campaignId: string) {
    this.apiKey = apiKey;
    this.campaignId = campaignId;
    this.baseUrl = "https://absinthe-next-assignment.vercel.app";
  }

  private getHeaders() {
    return {
      "Content-Type": "application/json",
      "api-key": this.apiKey,
      "campaign-id": this.campaignId,
    };
  }

  async distribute(
    eventName: string,
    pointsData: { points: number; address: string }
  ) {
    const url = `${this.baseUrl}/api/distributePoints`;
    const data = { eventName, pointsData };
    try {
      const response = await axios.post(url, data, {
        headers: this.getHeaders(),
      });
    } catch (err) {
      throw new Error(`Error distributing points: ${err}`);
    }
  }
  async getPoints(address: string) {
    const url = `${this.baseUrl}/api/getPoints`;
    const params = { address };
    try {
      const response = await axios.get(url, {
        params,
        headers: this.getHeaders(),
      });
      return response.data;
    } catch (err) {
      throw new Error(`Error getting points: ${err}`);
    }
  }
  async getPointsByEvent(address: string, eventName: string) {
    const url = `${this.baseUrl}/api/getPoints`;
    const params = { address, eventName };
    try {
      const response = await axios.get(url, {
        params,
        headers: this.getHeaders(),
      });
    } catch (err) {
      throw new Error(`Error getting points: ${err}`);
    }
  }
}

export default TypeScriptSDK;
