FROM alpine:latest AS builder
WORKDIR /app
COPY mongodb-init ./
RUN apk add --no-cache openssl


# Base image fot eh final mongodn image
FROM mongo:latest

# copy initialization scripts from the build stage
COPY --from=builder /app /docker-entrypoint-initdb.d

# set the mongodb environment variables
ENV MONGO_INITDB_DATABASE=OrdersDatabase

# expose the mongodb port
EXPOSE 27017