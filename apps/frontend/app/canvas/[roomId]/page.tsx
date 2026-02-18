"use client";

import { initDraw } from "@/app/draw";
import { useEffect, useEffectEvent, useRef } from "react"

export default function Canvas() { 
    const canvasRef = useRef<HTMLCanvasElement> (null);
    useEffect(()=>{
        if(canvasRef.current) {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        if (!ctx) {
            return
        }

        initDraw (canvasRef.current);
    }

    }, [canvasRef]);

    return <div>
        <canvas ref={canvasRef} width={2000} height={1000}></canvas>
    </div>
}