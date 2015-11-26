import test from 'ava';
import fn from '.';

// Could not get mocking working on my setup
test('should not throw when called', t => {
  try {
    fn(function () {
      t.end();
    });
  } catch (ex) {
    t.fail();
  }
});
