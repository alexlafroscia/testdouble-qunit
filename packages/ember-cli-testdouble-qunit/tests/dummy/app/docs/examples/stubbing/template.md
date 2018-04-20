# Stubbing Results

```javascript
function returnsNumber(cb) {
  return typeof cb() === 'number';
}

test('the callback returns a number', assert => {
  const cb = td.function();
  td.when(cb()).thenReturn(42);

  assert.ok(returnsNumber(cb));
});
```

For more information on stubbing results, consult [the `testdouble` documentation][docs].

[docs]: https://github.com/testdouble/testdouble.js/blob/master/docs/5-stubbing-results.md
