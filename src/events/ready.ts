import { Event } from "djs-bot-base";

export default new Event({
  categoryName: "ready",
  runOrder: 1,
  async run(client) {
    // ...
  },
});
