export function pad2(n: number): string {
  return n.toString().padStart(2, "0");
}

export function smpteTimecode(d: Date): string {
  const frames = Math.floor((d.getMilliseconds() / 1000) * 24);
  return `${pad2(d.getHours())}:${pad2(d.getMinutes())}:${pad2(d.getSeconds())}:${pad2(frames)}`;
}
