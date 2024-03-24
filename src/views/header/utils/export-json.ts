export const exportJSON = (state: unknown) => {
  const str = JSON.stringify(state, null, 2);
  const blob = new Blob([str], { type: "application/json;charset=utf-8" });
  const href = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = href;
  a.download = "resume.json";
  a.click();
};
