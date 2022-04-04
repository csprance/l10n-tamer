CREATE TABLE public.password_reset (
  id BIGINT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL,
  valid_till TIMESTAMP WITH TIME ZONE DEFAULT (NOW() + ((20)::DOUBLE PRECISION * '00:01:00'::INTERVAL)) NOT NULL,
  token TEXT NOT NULL,
  user_username TEXT NOT NULL
);

COMMENT ON TABLE public.password_reset IS 'This table contains data to help us manage the password reset process.';

COMMENT ON COLUMN "public"."password_reset"."user_username" IS E'What user username does this password reset request belong to';

COMMENT ON COLUMN "public"."password_reset"."token" IS E'The token is generated server side and sent via email. This token is then verified to reset the password.';

CREATE SEQUENCE public.password_reset_id_seq
  START WITH 1
  INCREMENT BY 1
  NO MINVALUE
  NO MAXVALUE
  CACHE 1;

ALTER SEQUENCE public.password_reset_id_seq OWNED BY public.password_reset.id;

ALTER TABLE ONLY public.password_reset
  ALTER COLUMN id SET DEFAULT NEXTVAL('public.password_reset_id_seq'::REGCLASS);

ALTER TABLE ONLY public.password_reset
  ADD CONSTRAINT password_reset_pkey PRIMARY KEY (id);

ALTER TABLE ONLY public.password_reset
  ADD CONSTRAINT password_reset_token_key UNIQUE (token);

ALTER TABLE ONLY public.password_reset
  ADD CONSTRAINT password_reset_user_username_fkey FOREIGN KEY (user_username) REFERENCES public."user" (username) ON UPDATE RESTRICT ON DELETE RESTRICT;

-- # Audit table
SELECT audit.audit_table ('public.password_reset', TRUE, FALSE, '{token}');
