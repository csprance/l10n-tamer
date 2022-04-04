CREATE TABLE public."user" (
  id INTEGER NOT NULL,
  username TEXT NOT NULL,
  email TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL,
  active BOOLEAN DEFAULT FALSE NOT NULL,
  avatar TEXT DEFAULT ''::TEXT NOT NULL,
  cell TEXT DEFAULT ''::TEXT NOT NULL,
  city TEXT DEFAULT ''::TEXT NOT NULL,
  country TEXT DEFAULT ''::TEXT NOT NULL,
  first_name TEXT DEFAULT ''::TEXT NOT NULL,
  last_name TEXT DEFAULT ''::TEXT NOT NULL,
  job_title TEXT DEFAULT ''::TEXT NOT NULL,
  PASSWORD text DEFAULT 'DEFAULT_PASSWORD' ::TEXT NOT NULL,
  theme_name TEXT DEFAULT 'light' ::TEXT NOT NULL
);

COMMENT ON TABLE public."user" IS 'This is the table of all the users of the application along with their data.';

COMMENT ON COLUMN public."user".username IS 'The username of the user. Also the primary key.';

COMMENT ON COLUMN public."user".email IS 'The users email. This must be unique per user';

COMMENT ON COLUMN public."user".active IS 'Is the user currently active right now in the application.';

COMMENT ON COLUMN public."user".avatar IS 'The user profile image (Avatar) a link to a graphic (if any)';

COMMENT ON COLUMN public."user".cell IS 'A cell phone number for the User.  Personnel Data.';

COMMENT ON COLUMN public."user".city IS 'Current city of User.  Personnel Data.';

COMMENT ON COLUMN public."user".country IS 'Current country of User.   Personnel Data.';

COMMENT ON COLUMN public."user".first_name IS 'First name of the user.  Personnel Data.';

COMMENT ON COLUMN public."user".last_name IS 'Last name of the User. Personnel Data.';

COMMENT ON COLUMN public."user".job_title IS 'The job title of the user. Personnel Data.';

COMMENT ON COLUMN public."user".PASSWORD IS 'The user password field. This is encrypted with bcrypt';

COMMENT ON COLUMN public."user".theme_name IS 'The currently set theme of the user can be one of any set theme';

CREATE SEQUENCE public.user_id_seq
  AS INTEGER START WITH 1
  INCREMENT BY 1
  NO MINVALUE
  NO MAXVALUE
  CACHE 1;

ALTER SEQUENCE public.user_id_seq OWNED BY public."user".id;

ALTER TABLE ONLY public."user"
  ALTER COLUMN id SET DEFAULT NEXTVAL('public.user_id_seq'::REGCLASS);

ALTER TABLE ONLY public."user"
  ADD CONSTRAINT user_email_key UNIQUE (email);

ALTER TABLE ONLY public."user"
  ADD CONSTRAINT user_id_key UNIQUE (id);

ALTER TABLE ONLY public."user"
  ADD CONSTRAINT user_name_key UNIQUE (username);

ALTER TABLE ONLY public."user"
  ADD CONSTRAINT user_pkey PRIMARY KEY (username);

CREATE TRIGGER set_public_user_updated_at
  BEFORE UPDATE ON public."user"
  FOR EACH ROW
  EXECUTE FUNCTION public.set_current_timestamp_updated_at ();

COMMENT ON TRIGGER set_public_user_updated_at ON public."user" IS 'trigger to set value of column "updated_at" to current timestamp on row update';

-- Wall off our private user data so only the user can select some private data but anyone can query all the other info
-- This function is tracked in hasura
CREATE VIEW user_private AS
SELECT username,
  PASSWORD
FROM "public"."user";

-- Create our default system user (id=1). Not meant to be used only for logging data
INSERT INTO "public"."user" ("username", "email", "theme_name", "active", "avatar", "cell", "city", "country", "first_name", "last_name", "job_title", "password")
  VALUES (E'system', E'system@l10n-tamer.com', 'light', TRUE, E'/logo.svg', E'555-555-5555', E'System', E'App', E'System', E'User', E'System', E'ImpossibleToLogin');

-- Create our default admin user this is meant to be logged in to as a superadmin id=2
INSERT INTO "public"."user" ("username", "email", "theme_name", "active", "avatar", "cell", "city", "country", "first_name", "last_name", "job_title", "password")
  VALUES (E'admin', -- username is admin
    E'super@admin', 'light', TRUE, E'/logo.svg', E'555-555-5555', E'Adminville', E'Adminland', E'Super', E'Admin', E'SuperAdmin', E'$2b$10$zYAmB4gZDUfbtRCTu4XkHu1RxdHA2KhtsZXSOPjNzKITov0UlzRtC' -- password is password
);

-- # Audit table
SELECT audit.audit_table ('public.user', TRUE, FALSE, '{password,created_at,updated_at,id,username}');

