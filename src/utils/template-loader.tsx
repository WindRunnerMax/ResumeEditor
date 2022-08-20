const basePath = process.env.PUBLIC_URL + "/templates/";

export const templateConfig = [
  {
    label: basePath + "social-simple.jpg",
    name: "简洁模版",
    template: basePath + "social-simple.json",
  },
  {
    label: basePath + "social.jpg",
    name: "单列模版",
    template: basePath + "social.json",
  },
  {
    label: basePath + "campus.jpg",
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
