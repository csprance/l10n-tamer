CREATE TABLE "public"."notification" (
  "id" BIGSERIAL NOT NULL,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "event_id" INTEGER NOT NULL,
  "user_username" TEXT NOT NULL,
  PRIMARY KEY ("id"),
  FOREIGN KEY ("event_id") REFERENCES "public"."event" ("id") ON UPDATE RESTRICT ON DELETE RESTRICT,
  FOREIGN KEY ("user_username") REFERENCES "public"."user" ("username") ON UPDATE RESTRICT ON DELETE RESTRICT
);

COMMENT ON TABLE "public"."notification" IS E'A relation table to indicate which notifications have been read by a user';

COMMENT ON COLUMN "public"."notification"."user_username" IS E'What user username is this notification for';

COMMENT ON COLUMN "public"."notification"."event_id" IS E'What is the id of the event in the event table.';

