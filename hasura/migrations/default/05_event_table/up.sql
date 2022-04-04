CREATE TABLE IF NOT EXISTS "public"."event" (
  "id" BIGSERIAL NOT NULL,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "summary" TEXT NOT NULL,
  "user_username" TEXT NOT NULL,
  "entity_id" INTEGER,
  "event_type" TEXT NOT NULL,
  "meta" JSONB DEFAULT JSONB_BUILD_OBJECT(),
  PRIMARY KEY ("id"),
  FOREIGN KEY ("user_username") REFERENCES "public"."user" ("username") ON UPDATE RESTRICT ON DELETE RESTRICT,
  UNIQUE ("id")
);

ALTER TABLE "public"."event"
  ADD CONSTRAINT "event_event_type_fkey" FOREIGN KEY ("event_type") REFERENCES "public"."EventType" ("value") ON UPDATE RESTRICT ON DELETE RESTRICT;

COMMENT ON TABLE "public"."event" IS E'The event log of all events that happen in the entire application and meta data';

COMMENT ON COLUMN "public"."event"."meta" IS E'A json object containing any extra metadata about the event that can\'t be stored any other way.';

COMMENT ON COLUMN "public"."event"."event_type" IS E'What type of event enum is this.';

COMMENT ON COLUMN "public"."event"."entity_id" IS E'What entity id does this belong to. An entity can be many things.';

COMMENT ON COLUMN "public"."event"."user_username" IS E'What user_username created this event.';

COMMENT ON COLUMN "public"."event"."summary" IS E'A summary which is show to the user of what the event was.';

--  Insert a default event into the event table
INSERT INTO "public"."event" ("summary", "user_username", "event_type")
  VALUES ('SYSTEM INIT', 'system', 'SYSTEM_INIT');

