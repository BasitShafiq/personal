import type { Express } from "express";
import { createServer, type Server } from "http";
import { api, errorSchemas } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  // Dummy contact endpoint
  app.post(api.contact.submit.path, (req, res) => {
    try {
      const input = api.contact.submit.input.parse(req.body);
      // For static site, we don't do anything with it
      res.status(200).json({ success: true });
    } catch (err) {
      if (err instanceof z.ZodError) {
        res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    }
  });

  return httpServer;
}
