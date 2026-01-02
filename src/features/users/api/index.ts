// Stub API functions for users/locations feature
// TODO: Implement actual API calls when backend is ready

export const fetchLocationsList = async (_params?: {
  page?: number;
  limit?: number;
}): Promise<{
  data: unknown[];
  total: number;
  options?: {
    pagination?: {
      total: number;
      totalPages: number;
    };
  };
}> => {
  return Promise.resolve({
    data: [],
    total: 0,
    options: {
      pagination: {
        total: 0,
        totalPages: 0,
      },
    },
  });
};

export const createLocation = async (
  _data: unknown,
): Promise<{ message: string }> => {
  return Promise.resolve({ message: 'Location created successfully' });
};

export const updateLocation = async (
  _id: number,
  _data: unknown,
): Promise<{ message: string }> => {
  return Promise.resolve({ message: 'Location updated successfully' });
};

export const deleteLocation = async (
  _id: number,
): Promise<{ message: string; data: { deleted: boolean } }> => {
  return Promise.resolve({
    message: 'Location deleted successfully',
    data: { deleted: true },
  });
};

export const viewLocation = async (_id: number): Promise<unknown> => {
  return Promise.resolve({});
};
