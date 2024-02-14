// eslint-disable-next-line import/no-unresolved
import ENTITYTYPE from '../types';

export default class ApiController {
  static async createEntity(entity: ENTITYTYPE) {
    const queryParams = new URLSearchParams({ entity });
    const serverURL = `http://localhost:3000/api/create/?${queryParams}`;

    const response = await fetch(serverURL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Fetch Error!. Status: ${response.status}`);
    }

    const result = await response.json();

    return result[entity];
  }
}
