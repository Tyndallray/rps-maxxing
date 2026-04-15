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

## Machine

### Computer System

| Model | Processors | Total RAM |
|---|---|---|
| ASUS TUF Dash F15 FX517ZM_TUF517ZM | 1 | 16 GB |

### CPU

| Name | Cores | Logical Processors |
|---|---|---|
| 12th Gen Intel(R) Core(TM) i7-12650H | 10 | 16 |


## Results

| # | Framework | Avg RPS | Version |
|---|---|---|---|
| 1 | [Express.js](../benchmarks/01-expressjs.md) | 12,200 | 5.2.1 |
| 2 | [Hapi](../benchmarks/03-hapi.md) | 43,800 | 21.4.0 |
| 3 | [Koa](../benchmarks/04-koa.md) | 49,300 | 2.16.1 |
| 4 | [Fastify](../benchmarks/02-fastify.md) | 66,600 | 5.3.2 |

## Decision

Going with Fastify. At ~66,600 RPS it sits well clear of the next contender (Koa at ~49,300), and the gap reflects genuine framework overhead removal — Fastify's schema-based serialization and optimized routing avoid the allocations and middleware abstractions that slow down Express, Hapi, and Koa.
