CREATE TABLE translation_comment (
  id SERIAL CONSTRAINT translation_comment_pk PRIMARY KEY,
  translation_id INTEGER NOT NULL CONSTRAINT translation_comment_translation_id_fk REFERENCES translation ON UPDATE RESTRICT ON DELETE RESTRICT,
  comment TEXT NOT NULL,
  user_username TEXT NOT NULL CONSTRAINT translation_comment_user_username_fk REFERENCES "user" ON UPDATE RESTRICT ON DELETE RESTRICT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL
);

CREATE TRIGGER set_public_translation_comment_updated_at
  BEFORE UPDATE ON public."translation_comment"
  FOR EACH ROW
  EXECUTE FUNCTION public.set_current_timestamp_updated_at ();

