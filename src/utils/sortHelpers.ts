export const extractFirmness = (firm?: string | number): number => {
  if (firm === undefined || firm === "") {
    return Infinity;
  }
  return typeof firm === "string" ? parseFloat(firm) : firm;
};
