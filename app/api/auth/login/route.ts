import { NextRequest, NextResponse } from "next/server"

const BACKEND_URL = process.env.BACKEND_URL ?? "http://192.168.137.1:3000"

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    const backendRes = await fetch(`${BACKEND_URL}/api/v1/auth/login`, {
      method: "POST",
      headers: { 
        "Content-Type": "application/json" 
      },
      body: JSON.stringify(body),
    })

    const data = await backendRes.json()

    // 👉 Optionnel : gérer token ici
    // ex: cookies

    return NextResponse.json(data, { status: backendRes.status })

  } catch (error) {
    return NextResponse.json(
      { message: "Erreur de connexion au serveur" },
      { status: 503 }
    )
  }
}