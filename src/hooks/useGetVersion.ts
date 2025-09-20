// version-check.ts
import { useEffect, useState } from "react";

export function useGetVersion(interval = 5000) {
  const [hasUpdate, setHasUpdate] = useState(false);

  useEffect(() => {
    let currentVersion: string | null = null;

    const checkVersion = async () => {
      try {
        const res = await fetch("/meta.json", { cache: "no-store" });
        const { version } = await res.json();
        console.log("version", version);
        if (!currentVersion) {
          currentVersion = version;
        } else if (currentVersion !== version) {
          setHasUpdate(true);
        }
      } catch {
        // ignore network errors
      }
    };

    const id = setInterval(checkVersion, interval);
    checkVersion();

    return () => clearInterval(id);
  }, [interval]);

  console.log("hasUpdate", hasUpdate);
  return hasUpdate;
}
