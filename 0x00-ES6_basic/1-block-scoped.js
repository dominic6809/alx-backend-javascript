/* block-scoped, won't overwrite the outer task2 */
/* block-scoped, won't overwrite the outer task */
export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    let task = true;
    let task2 = false;
  }

  return [task, task2];
}
