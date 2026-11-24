import { writeFileSync, mkdirSync } from "node:fs";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", "I replied-all begging everyone to stop replying-all, and now HR made me lead the training on how not to reply-all.", "utf8");
