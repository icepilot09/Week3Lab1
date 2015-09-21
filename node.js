parsedUrl = url.parse(request.url, true);
  resource = routes[parsedUrl.pathname];
  if (resource) {
    response.writeHead(200, {"Content-Type": "application/json"});
    response.end(JSON.stringify(resource(parsedUrl)));
  }
  else {
    response.writeHead(404);
    response.end();
  }
});
server.listen(process.argv[2]);