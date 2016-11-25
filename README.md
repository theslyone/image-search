# image-search
Image Search Abstraction Layer

<h1>FreeCodeCamp API Basejump: Image Search Abstraction Layer</h1>
<h2>user-story</h2>
  <h3> User stories:</h3>
  <ol>
    <li> I can pass a search query parameter and I will receive a search response array.</li>
    <li> I can view the latest search list.</li>

<h2> Example search usage:</h2>
<code> https://sg-image-search.herokuapp.com/api/imagesearch/lol cats </code>
<br>
<code> https://sg-image-search.herokuapp.com/api/imagesearch/kfc burger </code>

<h2> Example search output:</h2>
<code> [
  {"url":"https://i.ytimg.com/vi/r_o3q7zc21Y/hqdefault.jpg","snippet":"LOLCats - Funniest cat ...","thumbnail":"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRtxCOQ1jMfrfEDBrBAkpR7Ifk1glwYlUgctm05hmgT1V_0LjTr3WX00tjE","context":"https://www.youtube.com/watch?v=r_o3q7zc21Y"},
  {"url":"http://data.whicdn.com/images/34466238/large.png","snippet":"Lolcats - Funny Pictures of ...","thumbnail":"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRqnkot6um5p7tQXTz651kqOBm0-laLqDgWfbbL7ahq0unxs8SWG2FB1Q","context":"http://weheartit.com/entry/group/11788646"},
  {"url":"https://i.ytimg.com/vi/rHzOau7ZKpA/hqdefault.jpg","snippet":"... My Love LolCats Funny Cats ...","thumbnail":"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSEspafya5KS3hBmt43BQpCxvtW4mCvhRnWybRNxe3Td96L-OgnhIlup4Q","context":"https://www.youtube.com/watch?v=rHzOau7ZKpA"},
  {"url":"http://data.whicdn.com/images/30855761/large.jpg","snippet":"cat and funny image","thumbnail":"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRcVvn_L7D1b54fIv-1UZH1V_k1SJPRtamtdlJSjldoolzYEYZYj_XKtjzD","context":"http://weheartit.com/entry/30855761"},
  {"url":"https://i.ytimg.com/vi/tRzXptpC3_U/hqdefault.jpg","snippet":"funny lolcats and loldogs - ...","thumbnail":"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS_dKvb6pMA0bod00g0v1Bk3YakSY7H4HYwpu268AqUK8pPiSdlUh9pEnYh","context":"https://www.youtube.com/watch?v=tRzXptpC3_U"},
  {"url":"http://data.whicdn.com/images/30552485/large.jpg","snippet":"funny, kitten, and lawnmower ...","thumbnail":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9UXgQjkCb9deD1Hqc_0ddZN1882K1r1Tf9vYGgqPC8d2AfbRLW0j8dH0u","context":"http://weheartit.com/entry/30552485"}
  ]
</code>

<h2> Example latest Usage:</h2>
<code> https://sg-image-search.herokuapp.com/api/latest </code>

<h2> Will redirect to:</h2>
<code> [
  {"term":"lolcats funny","when":"2016-11-25T08:19:52.770Z"},
  {"term":"lolcats funny","when":"2016-11-25T07:33:14.260Z"},
  {"term":"lolcats funny","when":"2016-11-25T06:52:12.450Z"},
  {"term":"lolcats funny","when":"2016-11-25T06:52:08.735Z"},
  {"term":"lolcats funny","when":"2016-11-25T06:33:11.801Z"},
  {"term":"lolcats funny","when":"2016-11-25T05:36:23.417Z"},
  {"term":"lolcats funny","when":"2016-11-25T04:36:26.759Z"},
  {"term":"lolcats funny","when":"2016-11-25T04:36:21.408Z"},
  {"term":"lolcats funny","when":"2016-11-25T04:30:33.658Z"},
  {"term":"cat","when":"2016-11-25T04:29:52.820Z"}
]
</code>
