CREATE TABLE "public"."project_locale" (
    "id" serial NOT NULL,
    "created_at" timestamptz NOT NULL DEFAULT now(),
    "project_id" integer NOT NULL,
    "locale_id" integer NOT NULL,
    "active" boolean NOT NULL DEFAULT TRUE,
    PRIMARY KEY ("id") ,
    FOREIGN KEY ("project_id") REFERENCES "public"."project"("id") ON UPDATE restrict ON DELETE restrict,
    FOREIGN KEY ("locale_id") REFERENCES "public"."locale"("id") ON UPDATE restrict ON DELETE restrict
);

COMMENT ON TABLE "public"."project_locale" IS E'A relational table of all the locales added to a specific project';

-- # Audit table
SELECT audit.audit_table ('public.project_locale', TRUE, FALSE);
