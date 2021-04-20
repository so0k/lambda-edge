const index = require('../index');

test('ignore "/foo" path', () => {
  sampleEvent = {
    "Records": [
      {
        "cf": {
          "request": {
            "uri": "/foo",
          }
        }
      }
    ]
  }
  index.handler(sampleEvent, {}, (error, request) => {
    expect(request.uri).toBe("/foo");
  });
});

test('Redirect "/back2basics2021" path', () => {
  sampleEvent = {
    "Records": [
      {
        "cf": {
          "request": {
            "uri": "/back2basics2021",
          }
        }
      }
    ]
  }
  index.handler(sampleEvent, {}, (error, request) => {
    expect(request.uri).toBe("/event/8f577db2-1d73-434a-9383-7155befcd5ad");
  });
});
