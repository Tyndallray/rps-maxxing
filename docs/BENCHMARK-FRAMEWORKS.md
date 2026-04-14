[← Table of Contents](../README.md#table-of-contents)

# Benchmarking Frameworks

## Approach

The strategy is to benchmark different lightweight HTTP frameworks against a minimal health endpoint, measuring raw requests per second to isolate framework overhead from application logic.

## Running Benchmarks

```sh
autocannon -m GET -c 20 -d 20 -p 2 "http://localhost:3000/health"
```

- `-c 20` — 20 concurrent connections
- `-d 20` — 20 second duration
- `-p 2` — 2 pipelined requests per connection

## Results

| # | Framework | Avg RPS | Notes |
|---|---|---|---|
| 1 | [Express.js](../benchmarks/01-expressjs.md) | 12,200 | Simple health endpoint |
