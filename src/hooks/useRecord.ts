import { useState } from "react";

type ExpedienteData = any; 

const useRecord = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [data, setData] = useState<ExpedienteData | null>(null);

  const fetchExpediente = async (expediente: string) => {
    if (!expediente.trim()) return;

    setLoading(true);
    setError("");
    setData(null);

    try {
      const response = await fetch(`http://localhost:3000/api/records/${expediente}`);
      const result: ExpedienteData = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Error al buscar expediente");
      }
      
      setData(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error desconocido");
    } finally {
      setLoading(false);
    }
  };

  return { fetchExpediente, loading, error, data };
};

export default useRecord;
