configure({
  sources: [
    source('amd', 'ephox.agar', '../../src/main/js', mapper.hierarchical),
    source('amd', 'ephox', '../../node_modules/@ephox', mapper.repo('src/main/js', mapper.hierarchical))
  ]
});
