import { Inngest } from "inngest";

// Create a client to send and receive events
export const inngest = new Inngest({ 
    id: "career-coach", // Unique app ID
    name: "Career Coach", 
});
 