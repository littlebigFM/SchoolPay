export const classService = {
  getClasses: async () => {
    await new Promise((resolve) => setTimeout(resolve, 300));

    return [
      {
        label: "JSS 1A",
        value: "46055fc3-73ae-4c6f-9d8f-cedbcf170344",
      },
      {
        label: "JSS 2B",
        value: "0a4e2d45-73bb-4f3a-9d9d-d5f1a1f1b234",
      },
      {
        label: "SS 3A",
        value: "ab9f1b4c-1d34-4f82-a95f-ded8e82d1234",
      },
    ];
  },
};
