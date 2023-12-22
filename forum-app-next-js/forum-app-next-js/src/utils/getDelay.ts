export const getDelay = async (delay: number) =>
  await new Promise((r) => setTimeout(r, delay));
