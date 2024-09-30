/* block-scoped, won't overwrite the outer task2 */
/* block-scoped, won't overwrite the outer task */
export default function taskBlock(trueOrFalse) {
  var task = false;
  var task2 = true;

  if (trueOrFalse) {
    const task = true;
    const task2 = false;
  }

  return [task, task2];
}
