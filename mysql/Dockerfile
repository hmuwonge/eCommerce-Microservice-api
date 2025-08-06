FROM alpine:latest AS builder

# create a directory to hold initialization path
WORKDIR /app

# copy initialization scripts from the host to the container
COPY mysql-init ./


RUN apk add --no-cache openssl

# Base image for the final postgressql image
FROM mysql:8.0

# copy initialization scripts from the build

COPY --from=builder /app /docker-entrypoiny-initdb.d

# set the postgress environment variables
ENV MYSQL_ROOT_PASSWORD=admin
# ENV POSTGRES_PASSWORD=admin
# ENV POSTGRESS_DB=eCommerceUsers

# Expose the postgressql port
EXPOSE 3306

