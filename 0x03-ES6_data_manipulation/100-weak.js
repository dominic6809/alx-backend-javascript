// Exporting the WeakMap instance
const weakMap = new WeakMap();

// Exporting the queryAPI function
function queryAPI(endpoint) {
  // Validate the endpoint structure
  if (typeof endpoint !== 'object' || !endpoint || !endpoint.protocol || !endpoint.name) {
    throw new Error('Invalid endpoint');
  }

  // Create a key object to track calls (using the endpoint object itself)
  const key = endpoint;

  if (!weakMap.has(key)) {
    weakMap.set(key, 0); // Initialize the count to 0
  }

  const count = weakMap.get(key) + 1;
  weakMap.set(key, count); // Update the count

  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }
}

export default queryAPI;
