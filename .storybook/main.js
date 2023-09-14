module.exports = {
  stories: ["../@(src|docs)/**/*.stories.@(tsx|mdx|js|jsx)"],

  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },

  docs: {
    autodocs: true,
  },
};
