import dbConnect from "@/lib/dbConnect";
import { ObjectId } from "mongodb";


export async function GET( req, {params}) {
  
    const p = await params;
    const singeData = await dbConnect("products").findOne({ _id: new ObjectId(p.id)})
 
  return Response.json( singeData)
} 

export async function DELETE( req, {params}) {
  
    const p = await params;
    const delate = await dbConnect("products").deleteOne({ _id: new ObjectId(p.id)})
 
  return Response.json( delate)
} 

export async function PATCH( req, {params}) {
  
    const p = await params;
    const postData = await req.json()
    const filter = { _id: new ObjectId(p.id)}
    const updateResponce = await dbConnect("products").updateOne(filter,{$set: {...postData}}, {upsert: true})
 
  return Response.json( updateResponce)
} 