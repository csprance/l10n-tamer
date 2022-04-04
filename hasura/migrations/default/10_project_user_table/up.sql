CREATE TABLE "public"."project_user" (
  "id" SERIAL NOT NULL,
  "user_username" TEXT NOT NULL,
  "project_id" INTEGER NOT NULL,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "active" BOOLEAN NOT NULL,
  PRIMARY KEY ("id"),
  FOREIGN KEY ("project_id") REFERENCES "public"."project" ("id") ON UPDATE RESTRICT ON DELETE RESTRICT,
  FOREIGN KEY ("user_username") REFERENCES "public"."user" ("username") ON UPDATE RESTRICT ON DELETE RESTRICT
);

COMMENT ON TABLE "public"."project_user" IS E'A relational table to indicate which users belong to which projects';

COMMENT ON COLUMN "public"."project_user"."active" IS E'Is this user active on the project';

-- # Audit table
SELECT audit.audit_table ('public.project_user', TRUE, FALSE);

