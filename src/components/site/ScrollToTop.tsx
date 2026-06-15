import { useRouter } from "@tanstack/react-router";
import { useEffect } from "react";

export function ScrollToTop() {
  const router = useRouter();
  useEffect(() => {
    const unsub = router.subscribe("onResolved", () => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    });
    return unsub;
  }, [router]);
  return null;
}
