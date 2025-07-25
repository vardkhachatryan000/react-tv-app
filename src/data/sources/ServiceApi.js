import data from "../../mock/data.json";

export const serviceApi = {
  async fetchAll() { 
    // Simulating a network request with a delay
    // With real data, this would be replaced with an actual API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(data);
      }, 500);
    });
  },
};
