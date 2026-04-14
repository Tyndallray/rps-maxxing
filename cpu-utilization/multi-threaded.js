import { Worker, isMainThread} from "worker_threads";
import { fileURLToPath } from "url";

const NUMBER_OF_CORES_TO_UTILIZE = 16;
if(isMainThread) {
  for(let i = 0; i < NUMBER_OF_CORES_TO_UTILIZE; i++) {
    new Worker(fileURLToPath(import.meta.url));
  }
} else {
  while(true) {}
}