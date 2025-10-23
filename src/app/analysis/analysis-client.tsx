"use client";

import { useEffect, useState } from "react";
import { Truck, Circle, Activity } from "lucide-react";
import { db } from "../../firebase"; // adjust path to your firebase.ts
import { ref, onValue } from "firebase/database";

interface LaneData {
  count: number;
  speed: number;
  status: "green" | "yellow" | "red";
  greenTime: number;
}

export default function Dashboard() {
  const [lanes, setLanes] = useState<Record<string, LaneData>>({});

  useEffect(() => {
    const lanesRef = ref(db, "lanes");

    // Listen for realtime updates
    const unsubscribe = onValue(lanesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) setLanes(data);
    });

    return () => unsubscribe();
  }, []);

  // Calculate total vehicles and average speed
  const laneValues = Object.values(lanes);
  const totalVehicles = laneValues.reduce((sum, l) => sum + l.count, 0);
  const avgSpeed =
    laneValues.length > 0
      ? Math.round(laneValues.reduce((sum, l) => sum + l.speed, 0) / laneValues.length)
      : 0;

  return (
    <div className="p-6 min-h-screen">
      {/* Header */}
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Parallel Routes Dashboard</h1>
        <div className="flex items-center gap-2">
          <Circle className="w-5 h-5 text-green-500" />
          <span className="text-gray-600">Online</span>
        </div>
      </header>

      {/* Traffic Lanes */}
      <main className="grid grid-cols-3 gap-6 mb-6">
        {Object.entries(lanes).map(([key, lane]) => (
          <div
            key={key}
            className="relative p-4 border border-gray-50/10 shadow-md rounded-lg flex flex-col gap-2"
          >
            {/* Green Time Badge */}
            <div className="absolute top-2 right-2 px-2 py-1 text-xs font-semibold text-green-500 border border-green-700 bg-green-300/10 rounded-full">
              {lane.greenTime}s
            </div>

            <div className="text-lg font-semibold">{key}</div>

            <div className="flex items-center gap-2">
              <Truck className="w-5 h-5" />
              <span>Vehicles: {lane.count}</span>
            </div>

            <div className="flex items-center gap-2">
              <Activity className="w-5 h-5" />
              <span>Speed: {lane.speed} km/h</span>
            </div>

            <div
              className={`w-4 h-4 rounded-full ${
                lane.status === "green"
                  ? "bg-green-500"
                  : lane.status === "yellow"
                  ? "bg-yellow-500"
                  : "bg-red-500"
              }`}
            ></div>
          </div>
        ))}
      </main>

      {/* Stats Panel */}
      <section className="grid grid-cols-3 gap-6">
        <div className="p-4 shadow-md rounded-lg border border-gray-50/10">
          <div className="text-lg font-semibold mb-2">Total Vehicles</div>
          <div className="text-2xl font-bold">{totalVehicles}</div>
        </div>
        <div className="p-4 shadow-md rounded-lg border border-gray-50/10">
          <div className="text-lg font-semibold mb-2">Average Speed</div>
          <div className="text-2xl font-bold">{avgSpeed} km/h</div>
        </div>
        <div className="p-4 shadow-md rounded-lg border border-gray-50/10">
          <div className="text-lg font-semibold mb-2">Congestion Level</div>
          <div className="text-2xl font-bold">
            {totalVehicles > 30 ? "High" : totalVehicles > 15 ? "Moderate" : "Low"}
          </div>
        </div>
      </section>
    </div>
  );
}
