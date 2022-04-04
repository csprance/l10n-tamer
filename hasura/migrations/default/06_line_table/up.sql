CREATE TABLE "public"."line" (
  "id" SERIAL NOT NULL,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "project_id" INTEGER NOT NULL,
  "key" TEXT NOT NULL,
  "context_comment" TEXT,
  PRIMARY KEY ("id"),
  FOREIGN KEY ("project_id") REFERENCES "public"."project" ("id") ON UPDATE RESTRICT ON DELETE RESTRICT
);

COMMENT ON TABLE "public"."line" IS E'A line represents a specific word, phrase or any other language construct that needs to be translated.';

COMMENT ON COLUMN "public"."line"."context_comment" IS E'The context comment is a way to indicate in what context is this line used, which can be helpful for the translator.';

COMMENT ON COLUMN "public"."line"."key" IS E'The key to the translation which is shared between all locales.';

CREATE TRIGGER "set_public_line_updated_at"
  BEFORE UPDATE ON "public"."line"
  FOR EACH ROW
  EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at" ();

COMMENT ON TRIGGER "set_public_line_updated_at" ON "public"."line" IS 'trigger to set value of column "updated_at" to current timestamp on row update';

-- # Audit table
SELECT audit.audit_table ('public.line', TRUE, FALSE);

