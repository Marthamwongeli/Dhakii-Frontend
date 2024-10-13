

// import { Mother as MotherType } from './types'; 

// const baseURL = '/api/mother/';

// export const fetchMotherById = async (id: number): Promise<MotherType> => {
//   try {
//     const response = await fetch(`${baseURL}${id}`, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     if (!response.ok) {
//       throw new Error(`Failed to fetch mother. Status: ${response.status} - ${response.statusText}`);
//     }

//     const motherData = await response.json() as MotherType;
//     console.log('Fetched mother data:', motherData);
//     return motherData;
//   } catch (error: any) {
//     console.error('Error fetching mother data:', error.message || error);
//     throw error;
//   }
// };
import { Mother as MotherType } from './types'; 

const baseURL = '/api/mother/';

export const fetchMotherById = async (id: number): Promise<MotherType> => {
  try {
    const response = await fetch(`${baseURL}${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch mother. Status: ${response.status} - ${response.statusText}`);
    }

    const motherData = await response.json() as MotherType;
    console.log('Fetched mother data:', motherData);
    return motherData;
  } catch (error) {
    // Ensure the error is of type Error
    const message = error instanceof Error ? error.message : String(error);
    console.error('Error fetching mother data:', message);
    throw new Error(message); // Optional: Rethrow as a new Error
  }
};

