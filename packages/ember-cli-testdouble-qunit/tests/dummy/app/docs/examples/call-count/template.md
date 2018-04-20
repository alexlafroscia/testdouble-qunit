# Verifying Call Count

## Function is never called

```javascript
test('stub is never called', function(assert) {
  const stub = td.function();

  assert.verify(stub(), { times: 0, ignoreExtraArgs: true });
});
```

## Function is called twice

```javascript
test('stub is never called', function(assert) {
  const stub = td.function();

  stub('foo');
  stub('foo');

  assert.verify(stub('foo'), { times: 2 });
});
```
