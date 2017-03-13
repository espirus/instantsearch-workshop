var search = instantsearch({
  appId: 'latency',
  apiKey: '7e2574f14ffa553c0683b80e299e279a',
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
