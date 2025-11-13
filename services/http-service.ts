export class HttpService {
  constructor(private baseUrl: string) { }

  async get<T>(endpoint: string): Promise<T> {
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`);

      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json() as T;

      return data;
    } catch (error) {
      console.error('Error en la petición:', error);
      throw error;
    }
  }

  async getById<T>(endpoint: string, id: number | string): Promise<T> {
    return this.get<T>(`${endpoint}/${id}`);
  }

  async post<T>(endpoint: string, body: T): Promise<T> {
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }

      return await response.json() as T;
    } catch (error) {
      console.error('Error en POST:', error);
      throw error;
    }
  }

  async patch<T>(endpoint: string, id: number, body: Partial<T>): Promise<T> {
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }

      return await response.json() as T;
    } catch (error) {
      console.error('Error en PATCH:', error);
      throw error;
    }
  }
}