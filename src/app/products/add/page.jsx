"use client"

import React from "react";
import ProductsAddFrom from "./components/ProductsAddFrom";

export default async function ProductsAddPage(){

    return (
        <div className="flex justify-center mt-10 gap-10">
            <ProductsAddFrom></ProductsAddFrom>
        </div>
    )
}