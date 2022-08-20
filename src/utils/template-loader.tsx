const basePath = process.env.PUBLIC_URL + "/templates/";

export const templateConfig = [
  {
    label: <div>2</div>,
    name: "简洁模版",
    template: basePath + "social-simple.json",
  },
  {
    label: <div>1</div>,
    name: "单列模版",
    template: basePath + "social.json",
  },
  {
    label: <div>2</div>,
    name: "双列模版",
    template: basePath + "campus.json",
  },
];

export const templateLoader = (src: string) => {
  return window
    .fetch(src)
    .then(res => res.json())
    .catch(() => null);
};
