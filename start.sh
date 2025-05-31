docker run -it --rm \
  -p 4200:4200 \
  -v $PWD:/app \
  -v /app/node_modules \
  --name vendure2-dev \
  vendure-angular-dev
