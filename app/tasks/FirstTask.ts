import { CronJob } from "cron";

// Define the task function
function Task() {
  console.log("Task executed at:", new Date().toISOString());
}

// Create a new CronJob instance
export const FirstTask = new CronJob(
  "* * * * *", // Cron expression (runs every minute)
  Task, // Function to execute
  null, // Callback when the job is stopped (optional)
  false, // Auto-start? (false to prevent immediate start)
  "UTC", // Timezone (optional)
);
