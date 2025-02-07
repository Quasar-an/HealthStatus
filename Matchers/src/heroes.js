export const sortHeroesByHealth = (heroes) => {
    if (!Array.isArray(heroes)) {
      throw new TypeError('Input must be an array');
    }
  
    return [...heroes].sort((a, b) => b.health - a.health);
  };