var search = instantsearch({
  appId: 'latency',
  apiKey: '6be0576ff61c053d5f9a3225e2a90f76',
  indexName: 'movies',
  urlSync: {}
});
search.addWidget(
  instantsearch.widgets.searchBox({
    container: '#q'
  })
);
search.addWidget(
  instantsearch.widgets.hits({
    container: '#hits',
    hitsPerPage: 10,
  })
);
search.start();
