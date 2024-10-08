// Exporting the WeakMap instance
export const weakMap = new WeakMap();

// Exporting the queryAPI function
function queryAPI(endpoint) {
  let called = 0;
  if (weakMap.get(endpoint)) called = weakMap.get(endpoint);
  weakMap.set(endpoint, called + 1);
  if (called + 1 >= 5) throw new Error('Endpoint load is high');
}

export default queryAPI;
