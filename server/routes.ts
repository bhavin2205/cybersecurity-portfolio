import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { z } from "zod";
import { fromZodError } from "zod-validation-error";
import path from "path";
import fs from "fs";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const result = insertContactMessageSchema.safeParse(req.body);
      
      if (!result.success) {
        return res.status(400).json({
          message: fromZodError(result.error).toString(),
        });
      }

      const message = await storage.createContactMessage(result.data);
      
      // In a real application, you would send an email here
      // For now, we'll just store the message
      
      res.json({ 
        message: "Message sent successfully!",
        id: message.id 
      });
    } catch (error) {
      console.error("Error creating contact message:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Get all contact messages (for admin purposes)
  app.get("/api/contact", async (req, res) => {
    try {
      const messages = await storage.getContactMessages();
      res.json(messages);
    } catch (error) {
      console.error("Error fetching contact messages:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Resume download endpoint
  app.get("/api/resume", (req, res) => {
    // In a real implementation, you would serve the actual resume file
    // For now, we'll return a message indicating where the resume would be served from
    const resumePath = path.join(process.cwd(), "assets", "resume.pdf");
    
    if (fs.existsSync(resumePath)) {
      res.download(resumePath, "Bhavin_Panchal_Resume.pdf");
    } else {
      // Generate a simple text response for demo purposes
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Disposition', 'attachment; filename="Bhavin_Panchal_Resume.txt"');
      res.send(`Bhavin Panchal - Cybersecurity Engineer
Phone: 2404241992
Email: bhavinkp05@gmail.com
LinkedIn: https://www.linkedin.com/in/bhavinkpanchal/
GitHub: https://github.com/bhavin2205

This is a placeholder for the actual resume file.
In a production environment, the actual PDF resume would be served here.`);
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
