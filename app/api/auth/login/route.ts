// app/api/auth/login/route.ts

export async function GET() {
    return Response.json({
        success: true,
        message: "Backend is running",
    });
}