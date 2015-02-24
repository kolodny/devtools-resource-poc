### [Video](http://youtu.be/WITFrO6F9sQ)

1. install this extension
2. open up test.html in browser
3. open devtools and pop out
4. open devtools on devtools ( [this blog post shows how to do it](http://kolodny.github.io/blog/blog/2013/11/24/useful-snippets/) )
5. fiddle around until you get this to work:

```js
chrome.devtools.inspectedWindow.getResources(function(resources) {
  resources[1].getContent(function(content) {
    //console.log(content);
    resources[1].setContent(content.replace('The text', 'replaced'), true)
  });
});
```