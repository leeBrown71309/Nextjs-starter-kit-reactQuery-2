import kyInstance from "@/lib/kyInstance";

export const fetchData = async () => {
  try {
    const response = await kyInstance.get("users");
    const data: any = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return error;
  }
};
