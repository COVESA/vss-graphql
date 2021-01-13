export const parseEnvValue = (
  value: string | undefined,
): boolean | number | null | string | undefined => {
  if (value?.toLowerCase() === 'true') return true;
  if (value?.toLowerCase() === 'false') return false;
  if (value === 'null') return null;
  if (!isNaN(Number(value))) return Number(value);
  return value;
};
