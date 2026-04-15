# Goal

The goal of this project is to max out requests per second (RPS) within a constrained budget.

**Phase 1 - Local:** Utilize the maximum available resources on my laptop to push RPS as high as possible locally.

**Phase 2 - EC2:** Move the workload to an EC2 instance and measure how many requests per second can be handled while staying within budget.

## Table of Contents

| Topic | Description | Findings |
|---|---|---|
| [Understanding CPU Utilization](docs/CPU-UTILIZATION.md) | Single-threaded vs multi-threaded busy loops and their effect on CPU usage | A single thread saturates one logical processor (one core's worth of compute). Spawning N worker threads spreads work across N logical processors, so CPU utilization scales with thread count up to the number of available cores. |
| [Benchmarking Frameworks](docs/BENCHMARK-FRAMEWORKS.md) | The goal is to find a lightweight framework | Going with Fastify because it has the least amount of framework overhead. Simply selecting the right framework — without changing any application logic — made a significant difference. The same route went from 12,200 RPS on Express.js to 66,600 RPS on Fastify, a ~5.5x improvement purely from the framework choice. |

## Tech Stack

### Frameworks Compared

| Framework | Description |
|---|---|
| [Express.js](https://expressjs.com) | The de-facto Node.js web framework: minimal, unopinionated, and widely used in production |
| [Fastify](https://fastify.dev) | High-performance Node.js framework with schema-based serialization and a low-overhead plugin system |
| [Hapi](https://hapi.dev) | Enterprise-grade framework with a rich built-in feature set and strong configuration model |
| [Koa](https://koajs.com) | Lightweight successor to Express built around async/await middleware composition |

### Tools

| Tool | Purpose |
|---|---|
| [autocannon](https://github.com/mcollina/autocannon) | HTTP benchmarking tool that fires concurrent requests and reports RPS, latency, and throughput |
| [Claude Code](https://claude.ai/code) | AI-powered CLI for code generation, analysis, and development workflow automation |

### Concepts

| Concept | Relevance |
|---|---|
| **Multi-threading** | Explored Node.js worker threads to distribute CPU-bound work across logical cores and maximize utilization |
| **Event loop** | Understanding how Node.js's single-threaded event loop handles I/O concurrency and where it becomes a bottleneck |
| **HTTP benchmarking** | Measuring raw RPS, latency percentiles (p50/p99), and throughput under sustained load |
| **Runtime overhead** | Quantifying the cost of framework abstractions (middleware chains, routing, serialization) on baseline throughput |

### Runtime

| Runtime | Notes |
|---|---|
| **Node.js** | All benchmarks run on Node.js, chosen for its non-blocking I/O model and massive ecosystem |
