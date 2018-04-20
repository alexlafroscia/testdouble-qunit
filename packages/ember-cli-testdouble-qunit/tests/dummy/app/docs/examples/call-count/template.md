# Verifying Call Count

## Function is called

```javascript
test('stub is never called', assert => {
  const stub = td.function();

  stub('foo');

  assert.verify(stub('foo'));
});
```

## Function is called twice

```javascript
test('stub is never called', assert => {
  const stub = td.function();

  stub('foo');
  stub('foo');

  assert.verify(stub('foo'), { times: 2 });
});
```

## Function is never called

```javascript
test('stub is never called', assert => {
  const stub = td.function();

  assert.verify(stub(), { times: 0, ignoreExtraArgs: true });
});
```

For more information on verifying invocations, consult [the `testdouble` documentation][docs].

[docs]: https://github.com/testdouble/testdouble.js/blob/master/docs/6-verifying-invocations.md
