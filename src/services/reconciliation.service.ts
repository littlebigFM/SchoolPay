export const reconciliationService = {
  getReconciliations: async () => {
    await new Promise((resolve) => setTimeout(resolve, 300));

    return [];
  },
};
