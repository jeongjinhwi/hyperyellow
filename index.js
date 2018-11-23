exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    borderColor: 'deepblue',
    cursorColor: 'deepblue',
    css: `
      ${config.css || ''}
      .tabs_nav .tabs_list .tab_text {
        color: deepblue;
      }
      .tabs_nav .tabs_title {
        color: deepblue;
      }
    `
  });
}
