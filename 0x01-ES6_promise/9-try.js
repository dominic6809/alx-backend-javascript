export default function guardrail(mathFunction) {
  const queue = [];

  try {
    // Attempt to execute the mathFunction and append the result to the queue
    const result = mathFunction();
    queue.push(result);
  } catch (error) {
    // If an error occurs, append the error message to the queue
    queue.push(error.message);
  }

  // Always append 'Guardrail was processed' to the queue
  queue.push('Guardrail was processed');

  return queue;
}
