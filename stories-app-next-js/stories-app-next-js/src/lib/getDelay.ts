export const getDelay = async (delay: number): Promise<void> => {
  console.log(
    '\x1b[35m',
    `-> developmentConsole: ================================> entered in ${delay} seconds delay`
  );

  return await new Promise((r) =>
    setTimeout(() => {
      console.log(
        '\x1b[35m',
        `-> developmentConsole: ================================> exited from ${delay} seconds delay`
      );
      r();
    }, delay)
  );
};
