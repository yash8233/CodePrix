import path from "path";
import fs from "fs/promises";

import { scanTemplateDirectory } from "../modules/playground/lib/path-to-json";

const templates = {
  REACT: "react-ts",
  NEXTJS: "nextjs",
  EXPRESS: "express-simple",
  VUE: "vue",
  HONO: "hono-nodejs-starter",
  ANGULAR: "angular",
};

async function generate() {
  const outputDir = path.join(process.cwd(), "public", "templates");

  await fs.mkdir(outputDir, { recursive: true });

  for (const [key, folder] of Object.entries(templates)) {
    console.log(`Generating ${key}...`);

    const template = await scanTemplateDirectory(
      path.join(process.cwd(), "vibecode-starters", folder)
    );

    await fs.writeFile(
      path.join(outputDir, `${key}.json`),
      JSON.stringify(template, null, 2)
    );
  }

  console.log("✅ All templates generated.");
}

generate().catch(console.error);