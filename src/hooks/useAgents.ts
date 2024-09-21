import { useEffect, useState } from "react";
import { axiosClient } from "../utils/axiosClient";

export function useGetAgents() {
  const [agents, setAgents] = useState();
  const [agentsError, setAgentsError] = useState<unknown>();
  const [agentsLoading, setAgentsLoading] = useState(true);

  async function getAgents() {
    setAgentsLoading(true);
    try {
      const response = await axiosClient.get("/agents");
      const data = response.data;
      setAgents(data);
    } catch (error) {
      setAgentsError(error);
    } finally {
      setAgentsLoading(false);
    }
  }

  useEffect(() => {
    getAgents();
  }, []);

  return { agents, getAgents, setAgents, agentsLoading, agentsError };
}
