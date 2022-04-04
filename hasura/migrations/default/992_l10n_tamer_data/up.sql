-- This is done in 99_test_data
-- INSERT INTO public.project (id, name, description)
-- VALUES (1, E'l10n-tamer', E'L10N-Tamer is the the dog food project for this very project.');

INSERT INTO PUBLIC.LINE(project_id, key)
VALUES (1, E'appName');

INSERT INTO PUBLIC.LINE(project_id, key)
VALUES (1, E'appDescription');

INSERT INTO PUBLIC.LINE(project_id, key)
VALUES (1, E'cancel');

INSERT INTO PUBLIC.LINE(project_id, key)
VALUES (1, E'submit');

INSERT INTO PUBLIC.LINE(project_id, key)
VALUES (1, E'emailAddress');

INSERT INTO PUBLIC.LINE(project_id, key)
VALUES (1, E'name');

INSERT INTO PUBLIC.LINE(project_id, key)
VALUES (1, E'icon');

INSERT INTO PUBLIC.LINE(project_id, key)
VALUES (1, E'mustBeUnique');

INSERT INTO PUBLIC.LINE(project_id, key)
VALUES (1, E'svgOnly');
