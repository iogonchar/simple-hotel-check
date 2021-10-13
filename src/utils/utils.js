export const wordEnding = (count, endings) => {
  const countLastNum = count % 10;

  if (count > 10 && count < 20) { return endings[2]; }
  if (countLastNum > 1 && countLastNum < 5) { return endings[1]; }
  if (countLastNum === 1) { return endings[0]; }

  return endings[2];
}
