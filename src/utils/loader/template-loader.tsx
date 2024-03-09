const BASE_PATH = process.env.PUBLIC_URL + "/templates/";

export type TemplateConfig = {
  name: string;
  image: string;
  template: string;
};

export const TEMPLATE_CONFIG: TemplateConfig[] = [
  {
    name: "简洁模版",
    image: BASE_PATH + "social-simple/index.jpg",
    template: BASE_PATH + "social-simple/index.json",
  },
  {
    name: "单列模版",
    image: BASE_PATH + "social/index.jpg",
    template: BASE_PATH + "social/index.json",
  },
  {
    name: "双列模版",
    image: BASE_PATH + "campus/index.jpg",
    template: BASE_PATH + "campus/index.json",
  },
  {
    name: "FE-Czy",
    image: BASE_PATH + "czy/index.jpeg",
    template: BASE_PATH + "czy/index.json",
  },
  {
    name: "FE-Hty",
    image: BASE_PATH + "hty/index.jpeg",
    template: BASE_PATH + "hty/index.json",
  },
  {
    name: "FE-Lbz",
    image: BASE_PATH + "lbz/index.jpeg",
    template: BASE_PATH + "lbz/index.json",
  },
  {
    name: "BE-Lmz",
    image: BASE_PATH + "lmz/index.jpeg",
    template: BASE_PATH + "lmz/index.json",
  },
  {
    name: "FE-Wxy",
    image: BASE_PATH + "wxy/index.jpeg",
    template: BASE_PATH + "wxy/index.json",
  },
];

export const templateLoader = (src: string) => {
  return window
    .fetch(src)
    .then(res => res.json())
    .catch(() => null);
};
