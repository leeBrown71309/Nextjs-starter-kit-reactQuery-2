// lib/kyInstance.js
import ky from "ky";

const kyInstance = ky.create({
  prefixUrl: "https://jsonplaceholder.typicode.com", // Remplace par ton URL de base
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer YOUR_ACCESS_TOKEN", // Remplace par ton token d'autorisation si nécessaire
  },
  hooks: {
    beforeRequest: [
      (request) => {
        // Tu peux ajouter des logiques avant la requête ici
        console.log("beforeRequest URL:", request.url);
      },
    ],
    afterResponse: [
      async (request, options, response) => {
        if (!response.ok) {
          // Gérer les erreurs ici
          const error: any = await response.json();
          throw new Error(error.message || "Request failed");
        }
        return response;
      },
    ],
    beforeError: [
      (error) => {
        // Tu peux ajouter des logiques avant de lancer l'erreur ici
        console.error("beforeError error:", error);
        return error;
      },
    ],
  },
});

export default kyInstance;
