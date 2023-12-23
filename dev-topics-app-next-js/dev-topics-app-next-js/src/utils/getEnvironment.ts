export function getEnvironment(component: string) {
  const isBrowser = () => typeof window !== `undefined`;

  if (isBrowser()) {
    console.log(`
    -------------------------------------------------------
       ${component} | environment | browser | client
    -------------------------------------------------------
    `);
  } else {
    console.log(`
    -------------------------------------------------------
       ${component} | environment |  Node.js | server
    -------------------------------------------------------
    `);
  }
}
