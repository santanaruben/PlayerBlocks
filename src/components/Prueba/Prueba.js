import { useEffect } from "react";
import tawkTo from "tawkto-react";

const tawkToPropertyId = "60388020385de407571a38a5";
// Direct Chat Link
// https://tawk.to/chat/tawkToPropertyId/tawkToKey
const tawkToKey = "1eveb9lt1";

export default function Prueba() {
  useEffect(() => {
    tawkTo(tawkToPropertyId, tawkToKey);
  }, []);

  return null;
}
