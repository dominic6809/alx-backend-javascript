/* eslint-disable */
function getResponseFromAPI() {
    return new Promise((resolve, reject) => {
        // Simulating an asynchronous operation (e.g., API call)
	const success = true;
	
	if (success) {
            resolve("API call succeeded");
        } else {
            reject("API call failed");
        }
    });
}

export default getResponseFromAPI;
