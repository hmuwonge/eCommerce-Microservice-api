FROM alpine:latest AS builder
WORKDIR /app
COPY postgres-init ./
RUN apk add --no-cache openssl

# Base image for the final postgressql image
FROM postgres:latest

# copy initialization scripts from the build

COPY --from=builder /app /docker-entrypoint-initdb.d

# set the postgress environment variables
ENV POSTGRESS_USER=postgres
ENV POSTGRES_PASSWORD=admin
ENV POSTGRESS_DB=eCommerceUsers

# Expose the postgressql port
EXPOSE 5432

