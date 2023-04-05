FROM node:alpine
LABEL description="Instant high-performance GraphQL API for your PostgreSQL database https://github.com/graphile/postgraphile"

WORKDIR /graphql

COPY exec-sql/ /graphql/exec-sql
RUN cd exec-sql && npm i && npm run build

COPY service-credentials/ /graphql/service-credentials
RUN cd service-credentials && npm i && npm run build

COPY container-sync-jobs/ /graphql/container-sync-jobs
RUN cd container-sync-jobs && npm i && npm run build

# Install PostGraphile and PostGraphile connection filter plugin
RUN npm install -g postgraphile
RUN npm install -g postgraphile-plugin-connection-filter

RUN npm install -g @graphile-contrib/pg-simplify-inflector

EXPOSE 5433
ENTRYPOINT ["postgraphile", "-n", "0.0.0.0"]
