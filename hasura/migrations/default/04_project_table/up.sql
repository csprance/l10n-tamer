CREATE TABLE "public"."project" (
  "id" SERIAL NOT NULL,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "name" TEXT NOT NULL,
  "description" TEXT NOT NULL,
  "slug"  TEXT DEFAULT ''::TEXT NOT NULL,
  PRIMARY KEY ("id")
);

CREATE TRIGGER "set_public_project_updated_at"
  BEFORE UPDATE ON "public"."project"
  FOR EACH ROW
  EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at" ();

CREATE TRIGGER "set_public_project_ensure_slugify"
  BEFORE INSERT OR UPDATE ON "public"."project"
  FOR EACH ROW
  EXECUTE PROCEDURE "public"."ensure_slugify" ();

COMMENT ON TRIGGER "set_public_project_updated_at" ON "public"."project" IS 'trigger to set value of column "updated_at" to current timestamp on row update';

COMMENT ON TABLE "public"."project" IS e'A project represents a collection of lines to translate to any number of locales';

COMMENT ON COLUMN "public"."project"."description" IS E'What is the description of this project. This is show in the UI';

COMMENT ON COLUMN "public"."project"."name" IS E'What is the name of the project. This is shown in the UI';

COMMENT ON COLUMN "public"."project"."slug" IS E'The generated slug for the project name it is used in the url.';

-- # Audit table
SELECT audit.audit_table ('public.project', TRUE, FALSE);

