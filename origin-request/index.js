exports.handler = async (event, context, callback) => {
  const { request } = event.Records[0].cf;
  if (request.uri.endsWith('back2basics2021')) {
      request.uri = request.uri.replace('back2basics2021','event/8f577db2-1d73-434a-9383-7155befcd5ad');
  }

  console.log(`Request uri set to "${request.uri}"`);
  callback(null, request);
};
