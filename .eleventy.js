module.exports = function (eleventyConfig) {
  // Specify the directory for layouts (templates)
  eleventyConfig.setTemplateFormats(['html', 'njk', 'md']); // Add other formats you use
  eleventyConfig.addLayoutAlias('base', '_layouts/default.njk');

  // Specify the directory for includes (partials)
  eleventyConfig.addPassthroughCopy('assets'); // If you have an 'assets' directory

  // Other configuration options can be added here
  return {
    dir: {
      // ⚠️ These values are both relative to your input directory.
      includes: "_includes",
      layouts: "_layouts"
    }
  }
};
};
