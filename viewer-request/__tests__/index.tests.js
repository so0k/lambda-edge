const index = require('../index');

test('Redirect "/r/foo" to "/events"', () => {
  sampleEvent = {
    "Records": [
      {
        "cf": {
          "request": {
            "uri": "/r/foo",
          }
        }
      }
    ]
  }
  index.handler(sampleEvent, {}, (error, response) => {
    expect(response.status).toBe("302");
    expect(response.headers.location[0].value).toBe("https://singaporewba.cable.events/events");
  });
});

test('Redirect "/r/back2basics2021" path', () => {
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
  index.handler(sampleEvent, {}, (error, response) => {
    expect(response.status).toBe("302");
    expect(response.headers.location[0].value).toBe("https://singaporewba.cable.events/event/8f577db2-1d73-434a-9383-7155befcd5ad");
  });
});
