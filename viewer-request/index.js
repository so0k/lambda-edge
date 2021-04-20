exports.handler = async (event, context, callback) => {
  const { request } = event.Records[0].cf;
  console.log(request);
  var target = 'events';
  if (request.uri.endsWith('back2basics2021')) {
    target = 'event/8f577db2-1d73-434a-9383-7155befcd5ad';
  }

  /*
   * Generate HTTP redirect response with 302 status code and Location header.
   */
  const response = {
    status: '302', // temp redirect - https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#redirection_messages
    statusDescription: 'Found',
    headers: {
        location: [{
            key: 'Location',
            value: `https://singaporewba.cable.events/${target}`,
        }],
    },
  };
  callback(null, response);
};
