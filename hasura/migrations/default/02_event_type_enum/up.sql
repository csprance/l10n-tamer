CREATE TABLE "public"."EventType" (
    "value" text NOT NULL,
    PRIMARY KEY ("value")
);

COMMENT ON TABLE "public"."EventType" IS E'An enum table of all the possible event_types that can be logged to the events table';

-- This should contain every single event type that can happen in our app.
-- Codegen will then stick that into an ENUM for us so EventType_Enum we can use it on the frontend as needed
INSERT INTO "public"."EventType" ("value") VALUES
    ('USER_PASSWORD_CHANGE'),
    ('USER_PASSWORD_CHANGE_FAILED'),
    ('USER_PASSWORD_RESET_ISSUE'),
    ('USER_PASSWORD_RESET_ISSUE_FAILED'),
    ('USER_LOGIN'),
    ('USER_LOGIN_ATTEMPT_FAILED'),
    ('USER_LOGOUT'),
    ('USER_REGISTER'),
    ('USER_REGISTER_FAILED'),
    ('USER_UPDATE'),
    ('USER_UPDATE_FAILED'),
    ('USER_DELETE'),
    ('USER_DELETE_FAILED'),
    ('USER_JWT_CREATE'),
    ('USER_JWT_CREATE_FAILED'),
    ('ENTITY_CLASS_CREATE'),
    ('ENTITY_CLASS_CREATE_FAILED'),
    ('ENTITY_CLASS_DELETE'),
    ('ENTITY_CLASS_DELETE_FAILED'),
    ('ENTITY_CLASS_UPDATE'),
    ('ENTITY_CLASS_UPDATE_FAILED'),
    ('FIELD_CREATE'),
    ('FIELD_CREATE_FAILED'),
    ('FIELD_DELETE'),
    ('FIELD_DELETE_FAILED'),
    ('FIELD_UPDATE'),
    ('FIELD_UPDATE_FAILED'),
    ('NOTIFICATION_READ'),
    ('NOTIFICATION_FILTER_CREATE'),
    ('NOTIFICATION_FILTER_CREATE_FAILED'),
    ('NOTIFICATION_FILTER_DELETE'),
    ('NOTIFICATION_FILTER_DELETE_FAILED'),
    ('NOTIFICATION_FILTER_UPDATE'),
    ('NOTIFICATION_FILTER_UPDATE_FAILED'),
    ('SYSTEM_INFO'),
    ('SYSTEM_ERROR'),
    ('SYSTEM_WARNING'),
    ('SYSTEM_DEBUG'),
    ('SYSTEM_INIT')
    ;

