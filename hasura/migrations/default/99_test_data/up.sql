-- --------------------------------------------------------
-- Test Users
-- --------------------------------------------------------
-- csprance
INSERT INTO public.user (username, email, created_at, updated_at, active, avatar, cell, city, country, first_name, last_name, job_title, PASSWORD, theme_name)
  VALUES (E'csprance', E'chrissprance@gmail.com', E'2022-02-16T04:12:49.818781+00:00', E'2022-02-16T04:12:49.818781+00:00', FALSE, E'https://avatars.githubusercontent.com/u/7902617?v=4', E'555-555-5555', E'Digital', E'Underground', E'Chris', E'Sprance', E'Lead Developer L1ON-Tamer',
    -- Password is password
    E'$2b$10$qGPp1Ozwh2oT8UMhQPVlROArDm0/dr6ZQK.KrE.RKPKeaFQ81BB42', E'atom');
-- jdoe
INSERT INTO public.user (username, email, created_at, updated_at, active, avatar, cell, city, country, first_name, last_name, job_title, PASSWORD, theme_name)
  VALUES (E'jdoe', E'jdoe@com', E'2022-02-16T04:12:49.818781+00:00', E'2022-02-16T04:12:49.818781+00:00', FALSE, E'https://avatars.githubusercontent.com/u/7902617?v=4', E'555-555-5555', E'Digital', E'Underground', E'J', E'Doe', E'Unknown',
    -- Password is password
    E'$2b$10$qGPp1Ozwh2oT8UMhQPVlROArDm0/dr6ZQK.KrE.RKPKeaFQ81BB42', E'light');
-- Joe Dirt
INSERT INTO public.user (username, email, created_at, updated_at, active, avatar, cell, city, country, first_name, last_name, job_title, PASSWORD, theme_name)
  VALUES (E'jdirt', E'joedirt@joe-deertay', E'2022-02-16T04:12:49.818781+00:00', E'2022-02-16T04:12:49.818781+00:00', FALSE, E'https://avatars.githubusercontent.com/u/7902617?v=4', E'555-555-5555', E'Digital', E'Underground', E'Joe', E'Dirt', E'Daaaang',
    -- Password is password
    E'$2b$10$qGPp1Ozwh2oT8UMhQPVlROArDm0/dr6ZQK.KrE.RKPKeaFQ81BB42', E'dark');

-- --------------------------------------------------------
-- Test Projects
-- --------------------------------------------------------
INSERT INTO public.project (name, description)
  VALUES (E'l10n-tamer', E'L10N-Tamer is the the dog food project for this very project.');
INSERT INTO public.project (created_at, updated_at, name, description)
  VALUES (E'2022-03-30T01:53:37.902783+00:00', E'2022-03-31T01:53:37.902783+00:00', E'Test-Project 1', E'Test-Project 1 Description');
INSERT INTO public.project (created_at, updated_at, name, description)
  VALUES (E'2022-03-30T01:53:37.902783+00:00', E'2022-03-31T01:53:37.902783+00:00', E'Test-Project 2', E'Test-Project 2 Description');
INSERT INTO public.project (created_at, updated_at, name, description)
  VALUES (E'2022-04-30T01:53:37.902783+00:00', E'2022-03-31T01:53:37.902783+00:00', E'Test-Project 3', E'Test-Project 3 Description');
INSERT INTO public.project (created_at, updated_at, name, description)
  VALUES (E'2021-03-31T01:53:37.902783+00:00', E'2022-03-31T01:53:37.902783+00:00', E'Test-Project 4', E'Test-Project 4 Description');
-- --------------------------------------------------------
-- Test Project User
-- --------------------------------------------------------
INSERT INTO public.project_user (user_username, project_id, created_at, active)
  VALUES (E'csprance', 2, E'2022-03-30T01:59:59.418379+00:00', TRUE);
INSERT INTO public.project_user (user_username, project_id, created_at, active)
  VALUES (E'csprance', 3, E'2022-03-30T01:59:59.418379+00:00', TRUE);
INSERT INTO public.project_user (user_username, project_id, created_at, active)
  VALUES (E'csprance', 4, E'2022-04-30T01:59:59.418379+00:00', TRUE);
INSERT INTO public.project_user (user_username, project_id, created_at, active)
  VALUES (E'csprance', 5, E'2021-03-31T01:59:59.418379+00:00', FALSE);


-- Insert in some default lines to be translated
INSERT INTO PUBLIC.LINE(project_id, key) VALUES (2, E'testKey1');
INSERT INTO PUBLIC.LINE(project_id, key) VALUES (2, E'testKey2');
INSERT INTO PUBLIC.LINE(project_id, key) VALUES (2, E'testKey3');

INSERT INTO PUBLIC.LINE(project_id, key) VALUES (3, E'testKey1');
INSERT INTO PUBLIC.LINE(project_id, key) VALUES (3, E'testKey2');
INSERT INTO PUBLIC.LINE(project_id, key) VALUES (3, E'testKey3');

INSERT INTO PUBLIC.LINE(project_id, key) VALUES (4, E'testKey1');
INSERT INTO PUBLIC.LINE(project_id, key) VALUES (4, E'testKey2');
INSERT INTO PUBLIC.LINE(project_id, key) VALUES (4, E'testKey3');


-- Insert in some default translations
INSERT INTO public.translation (project_id, line_id, locale_id, value, user_username)
  VALUES (2, 1, 200, E'Test Key 1 v1', E'csprance');

-- This translation has a variable substitution
INSERT INTO public.translation (project_id, line_id, locale_id, value, user_username)
  VALUES (2, 2, 200, E'{testKey1} - Test of variable substitution and audit log. v1', E'csprance');

-- Update them to test audit log working
UPDATE
  public.translation
SET
  value = E'Test Key 1 v2',
  user_username = E'csprance'
WHERE
  public.translation.id = 1;

UPDATE
  public.translation
SET
  value = E'{testKey1} - Test of variable substitution and audit log. v2',
  user_username = E'admin'
WHERE
  public.translation.id = 2;

