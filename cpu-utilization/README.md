# CPU Utilization

Two scripts that demonstrate the difference in CPU utilization between single-threaded and multi-threaded busy loops.

## Scripts

### `single-threaded.js`

Runs a single infinite busy loop on the main thread:

```js
while(true) {}
```

Because Node.js is single-threaded by default, this maxes out exactly **one CPU core**. The OS scheduler keeps the rest of the cores mostly idle, so overall CPU usage stays low — roughly `1 / number_of_cores` percent.

![Single-threaded CPU usage](docs/single-threaded.png)

In the screenshot above you can see only one logical CPU is pegged at 100% while the others remain near idle, resulting in a low aggregate CPU percentage in Task Manager.

---

### `multi-threaded.js`

Spawns 16 Worker threads, each running the same infinite busy loop:

```js
const NUMBER_OF_CORES_TO_UTILIZE = 16;
// main thread spawns 16 workers
// each worker runs: while(true) {}
```

Each worker thread is scheduled by the OS onto a separate core. With 16 threads saturating 16 cores simultaneously, **overall CPU utilization hits ~100%**.

![Multi-threaded CPU usage](docs/multi-threaded.png)

In the screenshot above every logical CPU graph is pegged, and Task Manager reports near-100% aggregate usage.

---

## Key Takeaway

| Script | Threads | Cores utilized | Aggregate CPU |
|---|---|---|---|
| `single-threaded.js` | 1 | 1 | ~6% (on a 16-core machine) |
| `multi-threaded.js` | 16 | 16 | ~100% |

A single-threaded busy loop is CPU-intensive for *one* core but invisible to the rest of the system. Scaling the same work across multiple worker threads lets you consume as much of the machine as you choose.
