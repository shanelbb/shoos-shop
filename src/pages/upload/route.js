import { put } from "@vercel/blob";

export async function PUT(request) {
  const form = await request.formData();
  const file = form.get("file");
  const blob = await put(file.name, file, { access: "public" });

  return Response.json(blob);
}