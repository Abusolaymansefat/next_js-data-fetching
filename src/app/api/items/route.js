import dbConnect from "@/lib/dbConnect";

export async function GET() {
  try {
    const products = await dbConnect("products");
    const data = await products.find({}).toArray();
    return Response.json(data);
  } catch (error) {
    console.error("GET error:", error);
    return Response.json({ error: "Failed to fetch data" }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const postData = await req.json();
    const products = await dbConnect("products");
    const result = await products.insertOne(postData);
    return Response.json(result);
  } catch (error) {
    console.error("POST error:", error);
    return Response.json({ error: "Failed to insert data" }, { status: 500 });
  }
}
