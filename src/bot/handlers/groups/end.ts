import { Composer } from "grammy";

import gramtgcalls from "../../../userbot/gramtgcalls";
import queues from "../../../queues";

const composer = new Composer();

composer.on(":voice_chat_ended", (ctx) => {
  queues.clear(ctx.chat.id);
  return gramtgcalls.stop(ctx.chat.id);
});

export default composer;
