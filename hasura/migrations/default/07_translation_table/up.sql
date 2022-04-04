CREATE TABLE "public"."translation" (
  "id" BIGSERIAL NOT NULL,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "value" TEXT,
  "locale_id" INTEGER NOT NULL,
  "project_id" INTEGER NOT NULL,
  "line_id" INTEGER NOT NULL,
  "user_username" TEXT NOT NULL,
  PRIMARY KEY ("id")
);

CREATE TRIGGER "set_public_translation_updated_at"
  BEFORE UPDATE ON "public"."translation"
  FOR EACH ROW
  EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at" ();

ALTER TABLE "public"."translation"
  ADD CONSTRAINT "translation_locale_id_fkey" FOREIGN KEY ("locale_id") REFERENCES "public"."locale" ("id") ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE "public"."translation"
  ADD CONSTRAINT "translation_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "public"."project" ("id") ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE "public"."translation"
  ADD CONSTRAINT "translation_line_id_fkey" FOREIGN KEY ("line_id") REFERENCES "public"."line" ("id") ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE "public"."translation"
  ADD CONSTRAINT "translation_user_username_fkey" FOREIGN KEY ("user_username") REFERENCES "public"."user" ("username") ON UPDATE RESTRICT ON DELETE RESTRICT;

COMMENT ON COLUMN "public"."translation"."value" IS E'The translated string';

COMMENT ON COLUMN "public"."translation"."locale_id" IS E'The id of the locale in the locale table';

COMMENT ON TRIGGER "set_public_translation_updated_at" ON "public"."translation" IS 'trigger to set value of column "updated_at" to current timestamp on row update';

COMMENT ON COLUMN "public"."translation"."project_id" IS E'The ID of the project in the project table';

COMMENT ON TABLE "public"."translation" IS e'All of the translations are stored here with a ref to their locale';

COMMENT ON COLUMN "public"."translation"."user_username" IS E'What user translated this line last';

-- # Audit table
SELECT audit.audit_table ('public.translation', TRUE, FALSE);

