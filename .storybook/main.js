const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: ["storybook-addon-fetch-mock"],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
};

export default config;
