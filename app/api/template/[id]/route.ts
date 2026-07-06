import { db } from "@/lib/db";
import path from "path";
import fs from "fs/promises";
import { NextRequest } from "next/server";

function validateJsonStructure(data: unknown): boolean {
  try {
    JSON.parse(JSON.stringify(data));
    return true;
  } catch (error) {
    console.error("Invalid JSON structure:", error);
    return false;
  }
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  if (!id) {
    return Response.json(
      { error: "Missing playground ID" },
      { status: 400 }
    );
  }

  const playground = await db.playground.findUnique({
    where: { id },
  });

  if (!playground) {
    return Response.json(
      { error: "Playground not found" },
      { status: 404 }
    );
  }

  const templateKey = playground.template;

  try {
    const jsonPath = path.join(
      process.cwd(),
      "public",
      "templates",
      `${templateKey}.json`
    );

    const json = await fs.readFile(jsonPath, "utf8");
    const result = JSON.parse(json);

    if (!validateJsonStructure(result.items)) {
      return Response.json(
        { error: "Invalid JSON structure" },
        { status: 500 }
      );
    }

    return Response.json(
      {
        success: true,
        templateJson: result,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error generating template JSON:", error);

    return Response.json(
      { error: "Failed to generate template" },
      { status: 500 }
    );
  }
}