function main(params) {

  return new Promise(function(resolve, reject) {
    console.log(params.name);
    console.log(params.color);

    if (!params.name || !params.color) {
      console.error('name parameter not set.');
      reject({
        'error': 'Please make sure name and color are passed in as params.'
      });
      return;
    } else {
      var message = 'A ' + params.color + ' cat named ' + params.name + ' was added.';
      console.log(message);
      resolve({
        change: message
      });
      return;
    }

  });

}
