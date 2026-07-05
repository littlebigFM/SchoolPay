export const reportService = {
  getReports: async () => {
    await new Promise((resolve) => setTimeout(resolve, 300));

    return [];
  },
};
