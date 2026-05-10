import { NextRequest, NextResponse } from "next/server";

const API_KEY = process.env.AVIATIONSTACK_API_KEY;

export async function GET(request: NextRequest) {
  const flightIata = request.nextUrl.searchParams.get("flight_iata");

  if (!flightIata) {
    return NextResponse.json(
      { error: "flight_iata parameter required" },
      { status: 400 }
    );
  }

  if (!API_KEY) {
    return NextResponse.json(
      { error: "API key not configured", available: false },
      { status: 200 }
    );
  }

  try {
    const url = `https://api.aviationstack.com/v1/flights?access_key=${API_KEY}&flight_iata=${flightIata}`;
    const res = await fetch(url, { next: { revalidate: 300 } });
    const data = await res.json();

    if (data.error) {
      return NextResponse.json(
        { error: data.error.message, available: false },
        { status: 200 }
      );
    }

    const flight = data.data?.[0];
    if (!flight) {
      return NextResponse.json({ available: false }, { status: 200 });
    }

    return NextResponse.json({
      available: true,
      status: flight.flight_status,
      departure: {
        scheduled: flight.departure?.scheduled,
        estimated: flight.departure?.estimated,
        actual: flight.departure?.actual,
        terminal: flight.departure?.terminal,
        gate: flight.departure?.gate,
        delay: flight.departure?.delay,
      },
      arrival: {
        scheduled: flight.arrival?.scheduled,
        estimated: flight.arrival?.estimated,
        actual: flight.arrival?.actual,
        terminal: flight.arrival?.terminal,
        gate: flight.arrival?.gate,
        delay: flight.arrival?.delay,
        baggage: flight.arrival?.baggage,
      },
      airline: flight.airline?.name,
      live: flight.live
        ? {
            latitude: flight.live.latitude,
            longitude: flight.live.longitude,
            altitude: flight.live.altitude,
            speed: flight.live.speed_horizontal,
          }
        : null,
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch flight status", available: false },
      { status: 200 }
    );
  }
}
