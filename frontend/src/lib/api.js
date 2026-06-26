// The one place that knows how to reach the backend.
//
// There is no backend yet. Nginx is configured to serve /api/visits from a
// static JSON file (see nginx/default.conf), so this fetch returns canned data.
// The fetch itself is REAL — same code you'll use in production.
//
// When you build the real backend, you DON'T change this file. You change one
// line in nginx/default.conf to proxy /api/ to the backend instead of serving
// the static file. The frontend keeps calling getVisits() exactly as it does
// now.

export async function getVisits() {
  // Note: we fetch the .json path explicitly. In stub mode this is a static
  // file (works identically under `astro dev` and Nginx). When you switch to a
  // real backend, change this to "/api/visits" and proxy /api/ in Nginx.
  const res = await fetch("/api/visits.json");
  if (!res.ok) throw new Error(`API error: ${res.status}`);
  return res.json();
}

// Add more endpoints with the same pattern:
//
// export async function getSensors() {
//   const res = await fetch("/api/sensors");
//   if (!res.ok) throw new Error(`API error: ${res.status}`);
//   return res.json();
// }