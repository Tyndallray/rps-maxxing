# Goal

The goal of this project is to max out requests per second (RPS) within a constrained budget.

**Phase 1 — Local:** Utilize the maximum available resources on my laptop to push RPS as high as possible locally.

**Phase 2 — EC2:** Move the workload to an EC2 instance and measure how many requests per second can be handled while staying within budget.

## Table of Contents

| Topic | Description | Findings |
|---|---|---|
| [Understanding CPU Utilization](docs/CPU-UTILIZATION.md) | Single-threaded vs multi-threaded busy loops and their effect on CPU usage | A single thread saturates one logical processor (one core's worth of compute). Spawning N worker threads spreads work across N logical processors, so CPU utilization scales with thread count up to the number of available cores. |
| [Benchmarking Frameworks](docs/BENCHMARK-FRAMEWORKS.md) | The goal is to find a lightweight framework | Going with Fastify because it has the least amount of framework overhead. Simply selecting the right framework — without changing any application logic — made a significant difference. The same route went from 12,200 RPS on Express.js to 66,600 RPS on Fastify, a ~5.5x improvement purely from the framework choice. |

