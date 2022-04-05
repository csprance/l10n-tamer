import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  bigint: any;
  jsonb: any;
  timestamptz: any;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

/** An enum table of all the possible event_types that can be logged to the events table */
export type EventType = {
  __typename?: 'EventType';
  value: Scalars['String'];
};

/** aggregated selection of "EventType" */
export type EventType_Aggregate = {
  __typename?: 'EventType_aggregate';
  aggregate?: Maybe<EventType_Aggregate_Fields>;
  nodes: Array<EventType>;
};

/** aggregate fields of "EventType" */
export type EventType_Aggregate_Fields = {
  __typename?: 'EventType_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<EventType_Max_Fields>;
  min?: Maybe<EventType_Min_Fields>;
};

/** aggregate fields of "EventType" */
export type EventType_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<EventType_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "EventType". All fields are combined with a logical 'AND'. */
export type EventType_Bool_Exp = {
  _and?: InputMaybe<Array<EventType_Bool_Exp>>;
  _not?: InputMaybe<EventType_Bool_Exp>;
  _or?: InputMaybe<Array<EventType_Bool_Exp>>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "EventType" */
export enum EventType_Constraint {
  /** unique or primary key constraint */
  EventTypePkey = 'EventType_pkey',
}

export enum EventType_Enum {
  EntityClassCreate = 'ENTITY_CLASS_CREATE',
  EntityClassCreateFailed = 'ENTITY_CLASS_CREATE_FAILED',
  EntityClassDelete = 'ENTITY_CLASS_DELETE',
  EntityClassDeleteFailed = 'ENTITY_CLASS_DELETE_FAILED',
  EntityClassUpdate = 'ENTITY_CLASS_UPDATE',
  EntityClassUpdateFailed = 'ENTITY_CLASS_UPDATE_FAILED',
  FieldCreate = 'FIELD_CREATE',
  FieldCreateFailed = 'FIELD_CREATE_FAILED',
  FieldDelete = 'FIELD_DELETE',
  FieldDeleteFailed = 'FIELD_DELETE_FAILED',
  FieldUpdate = 'FIELD_UPDATE',
  FieldUpdateFailed = 'FIELD_UPDATE_FAILED',
  NotificationFilterCreate = 'NOTIFICATION_FILTER_CREATE',
  NotificationFilterCreateFailed = 'NOTIFICATION_FILTER_CREATE_FAILED',
  NotificationFilterDelete = 'NOTIFICATION_FILTER_DELETE',
  NotificationFilterDeleteFailed = 'NOTIFICATION_FILTER_DELETE_FAILED',
  NotificationFilterUpdate = 'NOTIFICATION_FILTER_UPDATE',
  NotificationFilterUpdateFailed = 'NOTIFICATION_FILTER_UPDATE_FAILED',
  NotificationRead = 'NOTIFICATION_READ',
  SystemDebug = 'SYSTEM_DEBUG',
  SystemError = 'SYSTEM_ERROR',
  SystemInfo = 'SYSTEM_INFO',
  SystemInit = 'SYSTEM_INIT',
  SystemWarning = 'SYSTEM_WARNING',
  UserDelete = 'USER_DELETE',
  UserDeleteFailed = 'USER_DELETE_FAILED',
  UserJwtCreate = 'USER_JWT_CREATE',
  UserJwtCreateFailed = 'USER_JWT_CREATE_FAILED',
  UserLogin = 'USER_LOGIN',
  UserLoginAttemptFailed = 'USER_LOGIN_ATTEMPT_FAILED',
  UserLogout = 'USER_LOGOUT',
  UserPasswordChange = 'USER_PASSWORD_CHANGE',
  UserPasswordChangeFailed = 'USER_PASSWORD_CHANGE_FAILED',
  UserPasswordResetIssue = 'USER_PASSWORD_RESET_ISSUE',
  UserPasswordResetIssueFailed = 'USER_PASSWORD_RESET_ISSUE_FAILED',
  UserRegister = 'USER_REGISTER',
  UserRegisterFailed = 'USER_REGISTER_FAILED',
  UserUpdate = 'USER_UPDATE',
  UserUpdateFailed = 'USER_UPDATE_FAILED',
}

/** Boolean expression to compare columns of type "EventType_enum". All fields are combined with logical 'AND'. */
export type EventType_Enum_Comparison_Exp = {
  _eq?: InputMaybe<EventType_Enum>;
  _in?: InputMaybe<Array<EventType_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<EventType_Enum>;
  _nin?: InputMaybe<Array<EventType_Enum>>;
};

/** input type for inserting data into table "EventType" */
export type EventType_Insert_Input = {
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type EventType_Max_Fields = {
  __typename?: 'EventType_max_fields';
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type EventType_Min_Fields = {
  __typename?: 'EventType_min_fields';
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "EventType" */
export type EventType_Mutation_Response = {
  __typename?: 'EventType_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<EventType>;
};

/** input type for inserting object relation for remote table "EventType" */
export type EventType_Obj_Rel_Insert_Input = {
  data: EventType_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<EventType_On_Conflict>;
};

/** on_conflict condition type for table "EventType" */
export type EventType_On_Conflict = {
  constraint: EventType_Constraint;
  update_columns?: Array<EventType_Update_Column>;
  where?: InputMaybe<EventType_Bool_Exp>;
};

/** Ordering options when selecting data from "EventType". */
export type EventType_Order_By = {
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: EventType */
export type EventType_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "EventType" */
export enum EventType_Select_Column {
  /** column name */
  Value = 'value',
}

/** input type for updating data in table "EventType" */
export type EventType_Set_Input = {
  value?: InputMaybe<Scalars['String']>;
};

/** update columns of table "EventType" */
export enum EventType_Update_Column {
  /** column name */
  Value = 'value',
}

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bigint']>;
  _gt?: InputMaybe<Scalars['bigint']>;
  _gte?: InputMaybe<Scalars['bigint']>;
  _in?: InputMaybe<Array<Scalars['bigint']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['bigint']>;
  _lte?: InputMaybe<Scalars['bigint']>;
  _neq?: InputMaybe<Scalars['bigint']>;
  _nin?: InputMaybe<Array<Scalars['bigint']>>;
};

/** The event log of all events that happen in the entire application and meta data */
export type Event = {
  __typename?: 'event';
  /** An object relationship */
  EventType: EventType;
  created_at: Scalars['timestamptz'];
  /** What entity id does this belong to. An entity can be many things. */
  entity_id?: Maybe<Scalars['Int']>;
  /** What type of event enum is this. */
  event_type: EventType_Enum;
  id: Scalars['bigint'];
  /** A json object containing any extra metadata about the event that can't be stored any other way. */
  meta?: Maybe<Scalars['jsonb']>;
  /** An array relationship */
  notifications: Array<Notification>;
  /** An aggregate relationship */
  notifications_aggregate: Notification_Aggregate;
  /** A summary which is show to the user of what the event was. */
  summary: Scalars['String'];
  /** An object relationship */
  user: User;
  /** What user_username created this event. */
  user_username: Scalars['String'];
};

/** The event log of all events that happen in the entire application and meta data */
export type EventMetaArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** The event log of all events that happen in the entire application and meta data */
export type EventNotificationsArgs = {
  distinct_on?: InputMaybe<Array<Notification_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Notification_Order_By>>;
  where?: InputMaybe<Notification_Bool_Exp>;
};

/** The event log of all events that happen in the entire application and meta data */
export type EventNotifications_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Notification_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Notification_Order_By>>;
  where?: InputMaybe<Notification_Bool_Exp>;
};

/** aggregated selection of "event" */
export type Event_Aggregate = {
  __typename?: 'event_aggregate';
  aggregate?: Maybe<Event_Aggregate_Fields>;
  nodes: Array<Event>;
};

/** aggregate fields of "event" */
export type Event_Aggregate_Fields = {
  __typename?: 'event_aggregate_fields';
  avg?: Maybe<Event_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Event_Max_Fields>;
  min?: Maybe<Event_Min_Fields>;
  stddev?: Maybe<Event_Stddev_Fields>;
  stddev_pop?: Maybe<Event_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Event_Stddev_Samp_Fields>;
  sum?: Maybe<Event_Sum_Fields>;
  var_pop?: Maybe<Event_Var_Pop_Fields>;
  var_samp?: Maybe<Event_Var_Samp_Fields>;
  variance?: Maybe<Event_Variance_Fields>;
};

/** aggregate fields of "event" */
export type Event_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Event_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "event" */
export type Event_Aggregate_Order_By = {
  avg?: InputMaybe<Event_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Event_Max_Order_By>;
  min?: InputMaybe<Event_Min_Order_By>;
  stddev?: InputMaybe<Event_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Event_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Event_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Event_Sum_Order_By>;
  var_pop?: InputMaybe<Event_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Event_Var_Samp_Order_By>;
  variance?: InputMaybe<Event_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Event_Append_Input = {
  /** A json object containing any extra metadata about the event that can't be stored any other way. */
  meta?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "event" */
export type Event_Arr_Rel_Insert_Input = {
  data: Array<Event_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Event_On_Conflict>;
};

/** aggregate avg on columns */
export type Event_Avg_Fields = {
  __typename?: 'event_avg_fields';
  /** What entity id does this belong to. An entity can be many things. */
  entity_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "event" */
export type Event_Avg_Order_By = {
  /** What entity id does this belong to. An entity can be many things. */
  entity_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "event". All fields are combined with a logical 'AND'. */
export type Event_Bool_Exp = {
  EventType?: InputMaybe<EventType_Bool_Exp>;
  _and?: InputMaybe<Array<Event_Bool_Exp>>;
  _not?: InputMaybe<Event_Bool_Exp>;
  _or?: InputMaybe<Array<Event_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  entity_id?: InputMaybe<Int_Comparison_Exp>;
  event_type?: InputMaybe<EventType_Enum_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  meta?: InputMaybe<Jsonb_Comparison_Exp>;
  notifications?: InputMaybe<Notification_Bool_Exp>;
  summary?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<User_Bool_Exp>;
  user_username?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "event" */
export enum Event_Constraint {
  /** unique or primary key constraint */
  EventPkey = 'event_pkey',
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Event_Delete_At_Path_Input = {
  /** A json object containing any extra metadata about the event that can't be stored any other way. */
  meta?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Event_Delete_Elem_Input = {
  /** A json object containing any extra metadata about the event that can't be stored any other way. */
  meta?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Event_Delete_Key_Input = {
  /** A json object containing any extra metadata about the event that can't be stored any other way. */
  meta?: InputMaybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "event" */
export type Event_Inc_Input = {
  /** What entity id does this belong to. An entity can be many things. */
  entity_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "event" */
export type Event_Insert_Input = {
  EventType?: InputMaybe<EventType_Obj_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  /** What entity id does this belong to. An entity can be many things. */
  entity_id?: InputMaybe<Scalars['Int']>;
  /** What type of event enum is this. */
  event_type?: InputMaybe<EventType_Enum>;
  id?: InputMaybe<Scalars['bigint']>;
  /** A json object containing any extra metadata about the event that can't be stored any other way. */
  meta?: InputMaybe<Scalars['jsonb']>;
  notifications?: InputMaybe<Notification_Arr_Rel_Insert_Input>;
  /** A summary which is show to the user of what the event was. */
  summary?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<User_Obj_Rel_Insert_Input>;
  /** What user_username created this event. */
  user_username?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Event_Max_Fields = {
  __typename?: 'event_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  /** What entity id does this belong to. An entity can be many things. */
  entity_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['bigint']>;
  /** A summary which is show to the user of what the event was. */
  summary?: Maybe<Scalars['String']>;
  /** What user_username created this event. */
  user_username?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "event" */
export type Event_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  /** What entity id does this belong to. An entity can be many things. */
  entity_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** A summary which is show to the user of what the event was. */
  summary?: InputMaybe<Order_By>;
  /** What user_username created this event. */
  user_username?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Event_Min_Fields = {
  __typename?: 'event_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  /** What entity id does this belong to. An entity can be many things. */
  entity_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['bigint']>;
  /** A summary which is show to the user of what the event was. */
  summary?: Maybe<Scalars['String']>;
  /** What user_username created this event. */
  user_username?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "event" */
export type Event_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  /** What entity id does this belong to. An entity can be many things. */
  entity_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** A summary which is show to the user of what the event was. */
  summary?: InputMaybe<Order_By>;
  /** What user_username created this event. */
  user_username?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "event" */
export type Event_Mutation_Response = {
  __typename?: 'event_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Event>;
};

/** input type for inserting object relation for remote table "event" */
export type Event_Obj_Rel_Insert_Input = {
  data: Event_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Event_On_Conflict>;
};

/** on_conflict condition type for table "event" */
export type Event_On_Conflict = {
  constraint: Event_Constraint;
  update_columns?: Array<Event_Update_Column>;
  where?: InputMaybe<Event_Bool_Exp>;
};

/** Ordering options when selecting data from "event". */
export type Event_Order_By = {
  EventType?: InputMaybe<EventType_Order_By>;
  created_at?: InputMaybe<Order_By>;
  entity_id?: InputMaybe<Order_By>;
  event_type?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  meta?: InputMaybe<Order_By>;
  notifications_aggregate?: InputMaybe<Notification_Aggregate_Order_By>;
  summary?: InputMaybe<Order_By>;
  user?: InputMaybe<User_Order_By>;
  user_username?: InputMaybe<Order_By>;
};

/** primary key columns input for table: event */
export type Event_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Event_Prepend_Input = {
  /** A json object containing any extra metadata about the event that can't be stored any other way. */
  meta?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "event" */
export enum Event_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EntityId = 'entity_id',
  /** column name */
  EventType = 'event_type',
  /** column name */
  Id = 'id',
  /** column name */
  Meta = 'meta',
  /** column name */
  Summary = 'summary',
  /** column name */
  UserUsername = 'user_username',
}

/** input type for updating data in table "event" */
export type Event_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  /** What entity id does this belong to. An entity can be many things. */
  entity_id?: InputMaybe<Scalars['Int']>;
  /** What type of event enum is this. */
  event_type?: InputMaybe<EventType_Enum>;
  id?: InputMaybe<Scalars['bigint']>;
  /** A json object containing any extra metadata about the event that can't be stored any other way. */
  meta?: InputMaybe<Scalars['jsonb']>;
  /** A summary which is show to the user of what the event was. */
  summary?: InputMaybe<Scalars['String']>;
  /** What user_username created this event. */
  user_username?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Event_Stddev_Fields = {
  __typename?: 'event_stddev_fields';
  /** What entity id does this belong to. An entity can be many things. */
  entity_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "event" */
export type Event_Stddev_Order_By = {
  /** What entity id does this belong to. An entity can be many things. */
  entity_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Event_Stddev_Pop_Fields = {
  __typename?: 'event_stddev_pop_fields';
  /** What entity id does this belong to. An entity can be many things. */
  entity_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "event" */
export type Event_Stddev_Pop_Order_By = {
  /** What entity id does this belong to. An entity can be many things. */
  entity_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Event_Stddev_Samp_Fields = {
  __typename?: 'event_stddev_samp_fields';
  /** What entity id does this belong to. An entity can be many things. */
  entity_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "event" */
export type Event_Stddev_Samp_Order_By = {
  /** What entity id does this belong to. An entity can be many things. */
  entity_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Event_Sum_Fields = {
  __typename?: 'event_sum_fields';
  /** What entity id does this belong to. An entity can be many things. */
  entity_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "event" */
export type Event_Sum_Order_By = {
  /** What entity id does this belong to. An entity can be many things. */
  entity_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** update columns of table "event" */
export enum Event_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EntityId = 'entity_id',
  /** column name */
  EventType = 'event_type',
  /** column name */
  Id = 'id',
  /** column name */
  Meta = 'meta',
  /** column name */
  Summary = 'summary',
  /** column name */
  UserUsername = 'user_username',
}

/** aggregate var_pop on columns */
export type Event_Var_Pop_Fields = {
  __typename?: 'event_var_pop_fields';
  /** What entity id does this belong to. An entity can be many things. */
  entity_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "event" */
export type Event_Var_Pop_Order_By = {
  /** What entity id does this belong to. An entity can be many things. */
  entity_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Event_Var_Samp_Fields = {
  __typename?: 'event_var_samp_fields';
  /** What entity id does this belong to. An entity can be many things. */
  entity_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "event" */
export type Event_Var_Samp_Order_By = {
  /** What entity id does this belong to. An entity can be many things. */
  entity_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Event_Variance_Fields = {
  __typename?: 'event_variance_fields';
  /** What entity id does this belong to. An entity can be many things. */
  entity_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "event" */
export type Event_Variance_Order_By = {
  /** What entity id does this belong to. An entity can be many things. */
  entity_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

export type Jsonb_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  _cast?: InputMaybe<Jsonb_Cast_Exp>;
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']>;
  _eq?: InputMaybe<Scalars['jsonb']>;
  _gt?: InputMaybe<Scalars['jsonb']>;
  _gte?: InputMaybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['jsonb']>;
  _lte?: InputMaybe<Scalars['jsonb']>;
  _neq?: InputMaybe<Scalars['jsonb']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']>>;
};

/** A line represents a specific word, phrase or any other language construct that needs to be translated. */
export type Line = {
  __typename?: 'line';
  /** The context comment is a way to indicate in what context is this line used, which can be helpful for the translator. */
  context_comment?: Maybe<Scalars['String']>;
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  /** The key to the translation which is shared between all locales. */
  key: Scalars['String'];
  /** An object relationship */
  project: Project;
  project_id: Scalars['Int'];
  /** An array relationship */
  translations: Array<Translation>;
  /** An aggregate relationship */
  translations_aggregate: Translation_Aggregate;
  updated_at: Scalars['timestamptz'];
};

/** A line represents a specific word, phrase or any other language construct that needs to be translated. */
export type LineTranslationsArgs = {
  distinct_on?: InputMaybe<Array<Translation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Translation_Order_By>>;
  where?: InputMaybe<Translation_Bool_Exp>;
};

/** A line represents a specific word, phrase or any other language construct that needs to be translated. */
export type LineTranslations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Translation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Translation_Order_By>>;
  where?: InputMaybe<Translation_Bool_Exp>;
};

/** aggregated selection of "line" */
export type Line_Aggregate = {
  __typename?: 'line_aggregate';
  aggregate?: Maybe<Line_Aggregate_Fields>;
  nodes: Array<Line>;
};

/** aggregate fields of "line" */
export type Line_Aggregate_Fields = {
  __typename?: 'line_aggregate_fields';
  avg?: Maybe<Line_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Line_Max_Fields>;
  min?: Maybe<Line_Min_Fields>;
  stddev?: Maybe<Line_Stddev_Fields>;
  stddev_pop?: Maybe<Line_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Line_Stddev_Samp_Fields>;
  sum?: Maybe<Line_Sum_Fields>;
  var_pop?: Maybe<Line_Var_Pop_Fields>;
  var_samp?: Maybe<Line_Var_Samp_Fields>;
  variance?: Maybe<Line_Variance_Fields>;
};

/** aggregate fields of "line" */
export type Line_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Line_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "line" */
export type Line_Aggregate_Order_By = {
  avg?: InputMaybe<Line_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Line_Max_Order_By>;
  min?: InputMaybe<Line_Min_Order_By>;
  stddev?: InputMaybe<Line_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Line_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Line_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Line_Sum_Order_By>;
  var_pop?: InputMaybe<Line_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Line_Var_Samp_Order_By>;
  variance?: InputMaybe<Line_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "line" */
export type Line_Arr_Rel_Insert_Input = {
  data: Array<Line_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Line_On_Conflict>;
};

/** aggregate avg on columns */
export type Line_Avg_Fields = {
  __typename?: 'line_avg_fields';
  id?: Maybe<Scalars['Float']>;
  project_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "line" */
export type Line_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  project_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "line". All fields are combined with a logical 'AND'. */
export type Line_Bool_Exp = {
  _and?: InputMaybe<Array<Line_Bool_Exp>>;
  _not?: InputMaybe<Line_Bool_Exp>;
  _or?: InputMaybe<Array<Line_Bool_Exp>>;
  context_comment?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  key?: InputMaybe<String_Comparison_Exp>;
  project?: InputMaybe<Project_Bool_Exp>;
  project_id?: InputMaybe<Int_Comparison_Exp>;
  translations?: InputMaybe<Translation_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "line" */
export enum Line_Constraint {
  /** unique or primary key constraint */
  LinePkey = 'line_pkey',
}

/** input type for incrementing numeric columns in table "line" */
export type Line_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  project_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "line" */
export type Line_Insert_Input = {
  /** The context comment is a way to indicate in what context is this line used, which can be helpful for the translator. */
  context_comment?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  /** The key to the translation which is shared between all locales. */
  key?: InputMaybe<Scalars['String']>;
  project?: InputMaybe<Project_Obj_Rel_Insert_Input>;
  project_id?: InputMaybe<Scalars['Int']>;
  translations?: InputMaybe<Translation_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Line_Max_Fields = {
  __typename?: 'line_max_fields';
  /** The context comment is a way to indicate in what context is this line used, which can be helpful for the translator. */
  context_comment?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  /** The key to the translation which is shared between all locales. */
  key?: Maybe<Scalars['String']>;
  project_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "line" */
export type Line_Max_Order_By = {
  /** The context comment is a way to indicate in what context is this line used, which can be helpful for the translator. */
  context_comment?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** The key to the translation which is shared between all locales. */
  key?: InputMaybe<Order_By>;
  project_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Line_Min_Fields = {
  __typename?: 'line_min_fields';
  /** The context comment is a way to indicate in what context is this line used, which can be helpful for the translator. */
  context_comment?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  /** The key to the translation which is shared between all locales. */
  key?: Maybe<Scalars['String']>;
  project_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "line" */
export type Line_Min_Order_By = {
  /** The context comment is a way to indicate in what context is this line used, which can be helpful for the translator. */
  context_comment?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** The key to the translation which is shared between all locales. */
  key?: InputMaybe<Order_By>;
  project_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "line" */
export type Line_Mutation_Response = {
  __typename?: 'line_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Line>;
};

/** input type for inserting object relation for remote table "line" */
export type Line_Obj_Rel_Insert_Input = {
  data: Line_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Line_On_Conflict>;
};

/** on_conflict condition type for table "line" */
export type Line_On_Conflict = {
  constraint: Line_Constraint;
  update_columns?: Array<Line_Update_Column>;
  where?: InputMaybe<Line_Bool_Exp>;
};

/** Ordering options when selecting data from "line". */
export type Line_Order_By = {
  context_comment?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  key?: InputMaybe<Order_By>;
  project?: InputMaybe<Project_Order_By>;
  project_id?: InputMaybe<Order_By>;
  translations_aggregate?: InputMaybe<Translation_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: line */
export type Line_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "line" */
export enum Line_Select_Column {
  /** column name */
  ContextComment = 'context_comment',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Key = 'key',
  /** column name */
  ProjectId = 'project_id',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "line" */
export type Line_Set_Input = {
  /** The context comment is a way to indicate in what context is this line used, which can be helpful for the translator. */
  context_comment?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  /** The key to the translation which is shared between all locales. */
  key?: InputMaybe<Scalars['String']>;
  project_id?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Line_Stddev_Fields = {
  __typename?: 'line_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  project_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "line" */
export type Line_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  project_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Line_Stddev_Pop_Fields = {
  __typename?: 'line_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  project_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "line" */
export type Line_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  project_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Line_Stddev_Samp_Fields = {
  __typename?: 'line_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  project_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "line" */
export type Line_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  project_id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Line_Sum_Fields = {
  __typename?: 'line_sum_fields';
  id?: Maybe<Scalars['Int']>;
  project_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "line" */
export type Line_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  project_id?: InputMaybe<Order_By>;
};

/** update columns of table "line" */
export enum Line_Update_Column {
  /** column name */
  ContextComment = 'context_comment',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Key = 'key',
  /** column name */
  ProjectId = 'project_id',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** aggregate var_pop on columns */
export type Line_Var_Pop_Fields = {
  __typename?: 'line_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  project_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "line" */
export type Line_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  project_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Line_Var_Samp_Fields = {
  __typename?: 'line_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  project_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "line" */
export type Line_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  project_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Line_Variance_Fields = {
  __typename?: 'line_variance_fields';
  id?: Maybe<Scalars['Float']>;
  project_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "line" */
export type Line_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  project_id?: InputMaybe<Order_By>;
};

/** All of the available locales for all projects */
export type Locale = {
  __typename?: 'locale';
  id: Scalars['bigint'];
  /** The short code of the locale (en_US, en_GB, esp) */
  locale: Scalars['String'];
  /** The human readable version of the locale name */
  name: Scalars['String'];
  /** An array relationship */
  project_locales: Array<Project_Locale>;
  /** An aggregate relationship */
  project_locales_aggregate: Project_Locale_Aggregate;
  /** An array relationship */
  translations: Array<Translation>;
  /** An aggregate relationship */
  translations_aggregate: Translation_Aggregate;
};

/** All of the available locales for all projects */
export type LocaleProject_LocalesArgs = {
  distinct_on?: InputMaybe<Array<Project_Locale_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Project_Locale_Order_By>>;
  where?: InputMaybe<Project_Locale_Bool_Exp>;
};

/** All of the available locales for all projects */
export type LocaleProject_Locales_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Project_Locale_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Project_Locale_Order_By>>;
  where?: InputMaybe<Project_Locale_Bool_Exp>;
};

/** All of the available locales for all projects */
export type LocaleTranslationsArgs = {
  distinct_on?: InputMaybe<Array<Translation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Translation_Order_By>>;
  where?: InputMaybe<Translation_Bool_Exp>;
};

/** All of the available locales for all projects */
export type LocaleTranslations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Translation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Translation_Order_By>>;
  where?: InputMaybe<Translation_Bool_Exp>;
};

/** aggregated selection of "locale" */
export type Locale_Aggregate = {
  __typename?: 'locale_aggregate';
  aggregate?: Maybe<Locale_Aggregate_Fields>;
  nodes: Array<Locale>;
};

/** aggregate fields of "locale" */
export type Locale_Aggregate_Fields = {
  __typename?: 'locale_aggregate_fields';
  avg?: Maybe<Locale_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Locale_Max_Fields>;
  min?: Maybe<Locale_Min_Fields>;
  stddev?: Maybe<Locale_Stddev_Fields>;
  stddev_pop?: Maybe<Locale_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Locale_Stddev_Samp_Fields>;
  sum?: Maybe<Locale_Sum_Fields>;
  var_pop?: Maybe<Locale_Var_Pop_Fields>;
  var_samp?: Maybe<Locale_Var_Samp_Fields>;
  variance?: Maybe<Locale_Variance_Fields>;
};

/** aggregate fields of "locale" */
export type Locale_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Locale_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Locale_Avg_Fields = {
  __typename?: 'locale_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "locale". All fields are combined with a logical 'AND'. */
export type Locale_Bool_Exp = {
  _and?: InputMaybe<Array<Locale_Bool_Exp>>;
  _not?: InputMaybe<Locale_Bool_Exp>;
  _or?: InputMaybe<Array<Locale_Bool_Exp>>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  locale?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  project_locales?: InputMaybe<Project_Locale_Bool_Exp>;
  translations?: InputMaybe<Translation_Bool_Exp>;
};

/** unique or primary key constraints on table "locale" */
export enum Locale_Constraint {
  /** unique or primary key constraint */
  LocaleLocaleKey = 'locale_locale_key',
  /** unique or primary key constraint */
  LocalePkey = 'locale_pkey',
}

/** input type for incrementing numeric columns in table "locale" */
export type Locale_Inc_Input = {
  id?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "locale" */
export type Locale_Insert_Input = {
  id?: InputMaybe<Scalars['bigint']>;
  /** The short code of the locale (en_US, en_GB, esp) */
  locale?: InputMaybe<Scalars['String']>;
  /** The human readable version of the locale name */
  name?: InputMaybe<Scalars['String']>;
  project_locales?: InputMaybe<Project_Locale_Arr_Rel_Insert_Input>;
  translations?: InputMaybe<Translation_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Locale_Max_Fields = {
  __typename?: 'locale_max_fields';
  id?: Maybe<Scalars['bigint']>;
  /** The short code of the locale (en_US, en_GB, esp) */
  locale?: Maybe<Scalars['String']>;
  /** The human readable version of the locale name */
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Locale_Min_Fields = {
  __typename?: 'locale_min_fields';
  id?: Maybe<Scalars['bigint']>;
  /** The short code of the locale (en_US, en_GB, esp) */
  locale?: Maybe<Scalars['String']>;
  /** The human readable version of the locale name */
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "locale" */
export type Locale_Mutation_Response = {
  __typename?: 'locale_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Locale>;
};

/** input type for inserting object relation for remote table "locale" */
export type Locale_Obj_Rel_Insert_Input = {
  data: Locale_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Locale_On_Conflict>;
};

/** on_conflict condition type for table "locale" */
export type Locale_On_Conflict = {
  constraint: Locale_Constraint;
  update_columns?: Array<Locale_Update_Column>;
  where?: InputMaybe<Locale_Bool_Exp>;
};

/** Ordering options when selecting data from "locale". */
export type Locale_Order_By = {
  id?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  project_locales_aggregate?: InputMaybe<Project_Locale_Aggregate_Order_By>;
  translations_aggregate?: InputMaybe<Translation_Aggregate_Order_By>;
};

/** primary key columns input for table: locale */
export type Locale_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "locale" */
export enum Locale_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Locale = 'locale',
  /** column name */
  Name = 'name',
}

/** input type for updating data in table "locale" */
export type Locale_Set_Input = {
  id?: InputMaybe<Scalars['bigint']>;
  /** The short code of the locale (en_US, en_GB, esp) */
  locale?: InputMaybe<Scalars['String']>;
  /** The human readable version of the locale name */
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Locale_Stddev_Fields = {
  __typename?: 'locale_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Locale_Stddev_Pop_Fields = {
  __typename?: 'locale_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Locale_Stddev_Samp_Fields = {
  __typename?: 'locale_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Locale_Sum_Fields = {
  __typename?: 'locale_sum_fields';
  id?: Maybe<Scalars['bigint']>;
};

/** update columns of table "locale" */
export enum Locale_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Locale = 'locale',
  /** column name */
  Name = 'name',
}

/** aggregate var_pop on columns */
export type Locale_Var_Pop_Fields = {
  __typename?: 'locale_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Locale_Var_Samp_Fields = {
  __typename?: 'locale_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Locale_Variance_Fields = {
  __typename?: 'locale_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "EventType" */
  delete_EventType?: Maybe<EventType_Mutation_Response>;
  /** delete single row from the table: "EventType" */
  delete_EventType_by_pk?: Maybe<EventType>;
  /** delete data from the table: "event" */
  delete_event?: Maybe<Event_Mutation_Response>;
  /** delete single row from the table: "event" */
  delete_event_by_pk?: Maybe<Event>;
  /** delete data from the table: "line" */
  delete_line?: Maybe<Line_Mutation_Response>;
  /** delete single row from the table: "line" */
  delete_line_by_pk?: Maybe<Line>;
  /** delete data from the table: "locale" */
  delete_locale?: Maybe<Locale_Mutation_Response>;
  /** delete single row from the table: "locale" */
  delete_locale_by_pk?: Maybe<Locale>;
  /** delete data from the table: "notification" */
  delete_notification?: Maybe<Notification_Mutation_Response>;
  /** delete single row from the table: "notification" */
  delete_notification_by_pk?: Maybe<Notification>;
  /** delete data from the table: "password_reset" */
  delete_password_reset?: Maybe<Password_Reset_Mutation_Response>;
  /** delete single row from the table: "password_reset" */
  delete_password_reset_by_pk?: Maybe<Password_Reset>;
  /** delete data from the table: "project" */
  delete_project?: Maybe<Project_Mutation_Response>;
  /** delete single row from the table: "project" */
  delete_project_by_pk?: Maybe<Project>;
  /** delete data from the table: "project_locale" */
  delete_project_locale?: Maybe<Project_Locale_Mutation_Response>;
  /** delete single row from the table: "project_locale" */
  delete_project_locale_by_pk?: Maybe<Project_Locale>;
  /** delete data from the table: "project_user" */
  delete_project_user?: Maybe<Project_User_Mutation_Response>;
  /** delete single row from the table: "project_user" */
  delete_project_user_by_pk?: Maybe<Project_User>;
  /** delete data from the table: "translation" */
  delete_translation?: Maybe<Translation_Mutation_Response>;
  /** delete single row from the table: "translation" */
  delete_translation_by_pk?: Maybe<Translation>;
  /** delete data from the table: "translation_comment" */
  delete_translation_comment?: Maybe<Translation_Comment_Mutation_Response>;
  /** delete single row from the table: "translation_comment" */
  delete_translation_comment_by_pk?: Maybe<Translation_Comment>;
  /** delete data from the table: "user" */
  delete_user?: Maybe<User_Mutation_Response>;
  /** delete single row from the table: "user" */
  delete_user_by_pk?: Maybe<User>;
  /** delete data from the table: "user_private" */
  delete_user_private?: Maybe<User_Private_Mutation_Response>;
  /** insert data into the table: "EventType" */
  insert_EventType?: Maybe<EventType_Mutation_Response>;
  /** insert a single row into the table: "EventType" */
  insert_EventType_one?: Maybe<EventType>;
  /** insert data into the table: "event" */
  insert_event?: Maybe<Event_Mutation_Response>;
  /** insert a single row into the table: "event" */
  insert_event_one?: Maybe<Event>;
  /** insert data into the table: "line" */
  insert_line?: Maybe<Line_Mutation_Response>;
  /** insert a single row into the table: "line" */
  insert_line_one?: Maybe<Line>;
  /** insert data into the table: "locale" */
  insert_locale?: Maybe<Locale_Mutation_Response>;
  /** insert a single row into the table: "locale" */
  insert_locale_one?: Maybe<Locale>;
  /** insert data into the table: "notification" */
  insert_notification?: Maybe<Notification_Mutation_Response>;
  /** insert a single row into the table: "notification" */
  insert_notification_one?: Maybe<Notification>;
  /** insert data into the table: "password_reset" */
  insert_password_reset?: Maybe<Password_Reset_Mutation_Response>;
  /** insert a single row into the table: "password_reset" */
  insert_password_reset_one?: Maybe<Password_Reset>;
  /** insert data into the table: "project" */
  insert_project?: Maybe<Project_Mutation_Response>;
  /** insert data into the table: "project_locale" */
  insert_project_locale?: Maybe<Project_Locale_Mutation_Response>;
  /** insert a single row into the table: "project_locale" */
  insert_project_locale_one?: Maybe<Project_Locale>;
  /** insert a single row into the table: "project" */
  insert_project_one?: Maybe<Project>;
  /** insert data into the table: "project_user" */
  insert_project_user?: Maybe<Project_User_Mutation_Response>;
  /** insert a single row into the table: "project_user" */
  insert_project_user_one?: Maybe<Project_User>;
  /** insert data into the table: "translation" */
  insert_translation?: Maybe<Translation_Mutation_Response>;
  /** insert data into the table: "translation_comment" */
  insert_translation_comment?: Maybe<Translation_Comment_Mutation_Response>;
  /** insert a single row into the table: "translation_comment" */
  insert_translation_comment_one?: Maybe<Translation_Comment>;
  /** insert a single row into the table: "translation" */
  insert_translation_one?: Maybe<Translation>;
  /** insert data into the table: "user" */
  insert_user?: Maybe<User_Mutation_Response>;
  /** insert a single row into the table: "user" */
  insert_user_one?: Maybe<User>;
  /** insert data into the table: "user_private" */
  insert_user_private?: Maybe<User_Private_Mutation_Response>;
  /** insert a single row into the table: "user_private" */
  insert_user_private_one?: Maybe<User_Private>;
  /** update data of the table: "EventType" */
  update_EventType?: Maybe<EventType_Mutation_Response>;
  /** update single row of the table: "EventType" */
  update_EventType_by_pk?: Maybe<EventType>;
  /** update data of the table: "event" */
  update_event?: Maybe<Event_Mutation_Response>;
  /** update single row of the table: "event" */
  update_event_by_pk?: Maybe<Event>;
  /** update data of the table: "line" */
  update_line?: Maybe<Line_Mutation_Response>;
  /** update single row of the table: "line" */
  update_line_by_pk?: Maybe<Line>;
  /** update data of the table: "locale" */
  update_locale?: Maybe<Locale_Mutation_Response>;
  /** update single row of the table: "locale" */
  update_locale_by_pk?: Maybe<Locale>;
  /** update data of the table: "notification" */
  update_notification?: Maybe<Notification_Mutation_Response>;
  /** update single row of the table: "notification" */
  update_notification_by_pk?: Maybe<Notification>;
  /** update data of the table: "password_reset" */
  update_password_reset?: Maybe<Password_Reset_Mutation_Response>;
  /** update single row of the table: "password_reset" */
  update_password_reset_by_pk?: Maybe<Password_Reset>;
  /** update data of the table: "project" */
  update_project?: Maybe<Project_Mutation_Response>;
  /** update single row of the table: "project" */
  update_project_by_pk?: Maybe<Project>;
  /** update data of the table: "project_locale" */
  update_project_locale?: Maybe<Project_Locale_Mutation_Response>;
  /** update single row of the table: "project_locale" */
  update_project_locale_by_pk?: Maybe<Project_Locale>;
  /** update data of the table: "project_user" */
  update_project_user?: Maybe<Project_User_Mutation_Response>;
  /** update single row of the table: "project_user" */
  update_project_user_by_pk?: Maybe<Project_User>;
  /** update data of the table: "translation" */
  update_translation?: Maybe<Translation_Mutation_Response>;
  /** update single row of the table: "translation" */
  update_translation_by_pk?: Maybe<Translation>;
  /** update data of the table: "translation_comment" */
  update_translation_comment?: Maybe<Translation_Comment_Mutation_Response>;
  /** update single row of the table: "translation_comment" */
  update_translation_comment_by_pk?: Maybe<Translation_Comment>;
  /** update data of the table: "user" */
  update_user?: Maybe<User_Mutation_Response>;
  /** update single row of the table: "user" */
  update_user_by_pk?: Maybe<User>;
  /** update data of the table: "user_private" */
  update_user_private?: Maybe<User_Private_Mutation_Response>;
};

/** mutation root */
export type Mutation_RootDelete_EventTypeArgs = {
  where: EventType_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_EventType_By_PkArgs = {
  value: Scalars['String'];
};

/** mutation root */
export type Mutation_RootDelete_EventArgs = {
  where: Event_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Event_By_PkArgs = {
  id: Scalars['bigint'];
};

/** mutation root */
export type Mutation_RootDelete_LineArgs = {
  where: Line_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Line_By_PkArgs = {
  id: Scalars['Int'];
};

/** mutation root */
export type Mutation_RootDelete_LocaleArgs = {
  where: Locale_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Locale_By_PkArgs = {
  id: Scalars['bigint'];
};

/** mutation root */
export type Mutation_RootDelete_NotificationArgs = {
  where: Notification_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Notification_By_PkArgs = {
  id: Scalars['bigint'];
};

/** mutation root */
export type Mutation_RootDelete_Password_ResetArgs = {
  where: Password_Reset_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Password_Reset_By_PkArgs = {
  id: Scalars['bigint'];
};

/** mutation root */
export type Mutation_RootDelete_ProjectArgs = {
  where: Project_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Project_By_PkArgs = {
  id: Scalars['Int'];
};

/** mutation root */
export type Mutation_RootDelete_Project_LocaleArgs = {
  where: Project_Locale_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Project_Locale_By_PkArgs = {
  id: Scalars['Int'];
};

/** mutation root */
export type Mutation_RootDelete_Project_UserArgs = {
  where: Project_User_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Project_User_By_PkArgs = {
  id: Scalars['Int'];
};

/** mutation root */
export type Mutation_RootDelete_TranslationArgs = {
  where: Translation_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Translation_By_PkArgs = {
  id: Scalars['bigint'];
};

/** mutation root */
export type Mutation_RootDelete_Translation_CommentArgs = {
  where: Translation_Comment_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Translation_Comment_By_PkArgs = {
  id: Scalars['Int'];
};

/** mutation root */
export type Mutation_RootDelete_UserArgs = {
  where: User_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_User_By_PkArgs = {
  username: Scalars['String'];
};

/** mutation root */
export type Mutation_RootDelete_User_PrivateArgs = {
  where: User_Private_Bool_Exp;
};

/** mutation root */
export type Mutation_RootInsert_EventTypeArgs = {
  objects: Array<EventType_Insert_Input>;
  on_conflict?: InputMaybe<EventType_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_EventType_OneArgs = {
  object: EventType_Insert_Input;
  on_conflict?: InputMaybe<EventType_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_EventArgs = {
  objects: Array<Event_Insert_Input>;
  on_conflict?: InputMaybe<Event_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Event_OneArgs = {
  object: Event_Insert_Input;
  on_conflict?: InputMaybe<Event_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_LineArgs = {
  objects: Array<Line_Insert_Input>;
  on_conflict?: InputMaybe<Line_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Line_OneArgs = {
  object: Line_Insert_Input;
  on_conflict?: InputMaybe<Line_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_LocaleArgs = {
  objects: Array<Locale_Insert_Input>;
  on_conflict?: InputMaybe<Locale_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Locale_OneArgs = {
  object: Locale_Insert_Input;
  on_conflict?: InputMaybe<Locale_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_NotificationArgs = {
  objects: Array<Notification_Insert_Input>;
  on_conflict?: InputMaybe<Notification_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Notification_OneArgs = {
  object: Notification_Insert_Input;
  on_conflict?: InputMaybe<Notification_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Password_ResetArgs = {
  objects: Array<Password_Reset_Insert_Input>;
  on_conflict?: InputMaybe<Password_Reset_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Password_Reset_OneArgs = {
  object: Password_Reset_Insert_Input;
  on_conflict?: InputMaybe<Password_Reset_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_ProjectArgs = {
  objects: Array<Project_Insert_Input>;
  on_conflict?: InputMaybe<Project_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Project_LocaleArgs = {
  objects: Array<Project_Locale_Insert_Input>;
  on_conflict?: InputMaybe<Project_Locale_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Project_Locale_OneArgs = {
  object: Project_Locale_Insert_Input;
  on_conflict?: InputMaybe<Project_Locale_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Project_OneArgs = {
  object: Project_Insert_Input;
  on_conflict?: InputMaybe<Project_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Project_UserArgs = {
  objects: Array<Project_User_Insert_Input>;
  on_conflict?: InputMaybe<Project_User_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Project_User_OneArgs = {
  object: Project_User_Insert_Input;
  on_conflict?: InputMaybe<Project_User_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_TranslationArgs = {
  objects: Array<Translation_Insert_Input>;
  on_conflict?: InputMaybe<Translation_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Translation_CommentArgs = {
  objects: Array<Translation_Comment_Insert_Input>;
  on_conflict?: InputMaybe<Translation_Comment_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Translation_Comment_OneArgs = {
  object: Translation_Comment_Insert_Input;
  on_conflict?: InputMaybe<Translation_Comment_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Translation_OneArgs = {
  object: Translation_Insert_Input;
  on_conflict?: InputMaybe<Translation_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_UserArgs = {
  objects: Array<User_Insert_Input>;
  on_conflict?: InputMaybe<User_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_User_OneArgs = {
  object: User_Insert_Input;
  on_conflict?: InputMaybe<User_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_User_PrivateArgs = {
  objects: Array<User_Private_Insert_Input>;
};

/** mutation root */
export type Mutation_RootInsert_User_Private_OneArgs = {
  object: User_Private_Insert_Input;
};

/** mutation root */
export type Mutation_RootUpdate_EventTypeArgs = {
  _set?: InputMaybe<EventType_Set_Input>;
  where: EventType_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_EventType_By_PkArgs = {
  _set?: InputMaybe<EventType_Set_Input>;
  pk_columns: EventType_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_EventArgs = {
  _append?: InputMaybe<Event_Append_Input>;
  _delete_at_path?: InputMaybe<Event_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Event_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Event_Delete_Key_Input>;
  _inc?: InputMaybe<Event_Inc_Input>;
  _prepend?: InputMaybe<Event_Prepend_Input>;
  _set?: InputMaybe<Event_Set_Input>;
  where: Event_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Event_By_PkArgs = {
  _append?: InputMaybe<Event_Append_Input>;
  _delete_at_path?: InputMaybe<Event_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Event_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Event_Delete_Key_Input>;
  _inc?: InputMaybe<Event_Inc_Input>;
  _prepend?: InputMaybe<Event_Prepend_Input>;
  _set?: InputMaybe<Event_Set_Input>;
  pk_columns: Event_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_LineArgs = {
  _inc?: InputMaybe<Line_Inc_Input>;
  _set?: InputMaybe<Line_Set_Input>;
  where: Line_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Line_By_PkArgs = {
  _inc?: InputMaybe<Line_Inc_Input>;
  _set?: InputMaybe<Line_Set_Input>;
  pk_columns: Line_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_LocaleArgs = {
  _inc?: InputMaybe<Locale_Inc_Input>;
  _set?: InputMaybe<Locale_Set_Input>;
  where: Locale_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Locale_By_PkArgs = {
  _inc?: InputMaybe<Locale_Inc_Input>;
  _set?: InputMaybe<Locale_Set_Input>;
  pk_columns: Locale_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_NotificationArgs = {
  _inc?: InputMaybe<Notification_Inc_Input>;
  _set?: InputMaybe<Notification_Set_Input>;
  where: Notification_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Notification_By_PkArgs = {
  _inc?: InputMaybe<Notification_Inc_Input>;
  _set?: InputMaybe<Notification_Set_Input>;
  pk_columns: Notification_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Password_ResetArgs = {
  _inc?: InputMaybe<Password_Reset_Inc_Input>;
  _set?: InputMaybe<Password_Reset_Set_Input>;
  where: Password_Reset_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Password_Reset_By_PkArgs = {
  _inc?: InputMaybe<Password_Reset_Inc_Input>;
  _set?: InputMaybe<Password_Reset_Set_Input>;
  pk_columns: Password_Reset_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_ProjectArgs = {
  _inc?: InputMaybe<Project_Inc_Input>;
  _set?: InputMaybe<Project_Set_Input>;
  where: Project_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Project_By_PkArgs = {
  _inc?: InputMaybe<Project_Inc_Input>;
  _set?: InputMaybe<Project_Set_Input>;
  pk_columns: Project_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Project_LocaleArgs = {
  _inc?: InputMaybe<Project_Locale_Inc_Input>;
  _set?: InputMaybe<Project_Locale_Set_Input>;
  where: Project_Locale_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Project_Locale_By_PkArgs = {
  _inc?: InputMaybe<Project_Locale_Inc_Input>;
  _set?: InputMaybe<Project_Locale_Set_Input>;
  pk_columns: Project_Locale_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Project_UserArgs = {
  _inc?: InputMaybe<Project_User_Inc_Input>;
  _set?: InputMaybe<Project_User_Set_Input>;
  where: Project_User_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Project_User_By_PkArgs = {
  _inc?: InputMaybe<Project_User_Inc_Input>;
  _set?: InputMaybe<Project_User_Set_Input>;
  pk_columns: Project_User_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_TranslationArgs = {
  _inc?: InputMaybe<Translation_Inc_Input>;
  _set?: InputMaybe<Translation_Set_Input>;
  where: Translation_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Translation_By_PkArgs = {
  _inc?: InputMaybe<Translation_Inc_Input>;
  _set?: InputMaybe<Translation_Set_Input>;
  pk_columns: Translation_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Translation_CommentArgs = {
  _inc?: InputMaybe<Translation_Comment_Inc_Input>;
  _set?: InputMaybe<Translation_Comment_Set_Input>;
  where: Translation_Comment_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Translation_Comment_By_PkArgs = {
  _inc?: InputMaybe<Translation_Comment_Inc_Input>;
  _set?: InputMaybe<Translation_Comment_Set_Input>;
  pk_columns: Translation_Comment_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_UserArgs = {
  _inc?: InputMaybe<User_Inc_Input>;
  _set?: InputMaybe<User_Set_Input>;
  where: User_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_User_By_PkArgs = {
  _inc?: InputMaybe<User_Inc_Input>;
  _set?: InputMaybe<User_Set_Input>;
  pk_columns: User_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_User_PrivateArgs = {
  _set?: InputMaybe<User_Private_Set_Input>;
  where: User_Private_Bool_Exp;
};

/** A relation table to indicate which notifications have been read by a user */
export type Notification = {
  __typename?: 'notification';
  created_at: Scalars['timestamptz'];
  /** An object relationship */
  event: Event;
  /** What is the id of the event in the event table. */
  event_id: Scalars['Int'];
  id: Scalars['bigint'];
  /** An object relationship */
  user: User;
  /** What user username is this notification for */
  user_username: Scalars['String'];
};

/** aggregated selection of "notification" */
export type Notification_Aggregate = {
  __typename?: 'notification_aggregate';
  aggregate?: Maybe<Notification_Aggregate_Fields>;
  nodes: Array<Notification>;
};

/** aggregate fields of "notification" */
export type Notification_Aggregate_Fields = {
  __typename?: 'notification_aggregate_fields';
  avg?: Maybe<Notification_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Notification_Max_Fields>;
  min?: Maybe<Notification_Min_Fields>;
  stddev?: Maybe<Notification_Stddev_Fields>;
  stddev_pop?: Maybe<Notification_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Notification_Stddev_Samp_Fields>;
  sum?: Maybe<Notification_Sum_Fields>;
  var_pop?: Maybe<Notification_Var_Pop_Fields>;
  var_samp?: Maybe<Notification_Var_Samp_Fields>;
  variance?: Maybe<Notification_Variance_Fields>;
};

/** aggregate fields of "notification" */
export type Notification_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Notification_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "notification" */
export type Notification_Aggregate_Order_By = {
  avg?: InputMaybe<Notification_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Notification_Max_Order_By>;
  min?: InputMaybe<Notification_Min_Order_By>;
  stddev?: InputMaybe<Notification_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Notification_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Notification_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Notification_Sum_Order_By>;
  var_pop?: InputMaybe<Notification_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Notification_Var_Samp_Order_By>;
  variance?: InputMaybe<Notification_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "notification" */
export type Notification_Arr_Rel_Insert_Input = {
  data: Array<Notification_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Notification_On_Conflict>;
};

/** aggregate avg on columns */
export type Notification_Avg_Fields = {
  __typename?: 'notification_avg_fields';
  /** What is the id of the event in the event table. */
  event_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "notification" */
export type Notification_Avg_Order_By = {
  /** What is the id of the event in the event table. */
  event_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "notification". All fields are combined with a logical 'AND'. */
export type Notification_Bool_Exp = {
  _and?: InputMaybe<Array<Notification_Bool_Exp>>;
  _not?: InputMaybe<Notification_Bool_Exp>;
  _or?: InputMaybe<Array<Notification_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  event?: InputMaybe<Event_Bool_Exp>;
  event_id?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  user?: InputMaybe<User_Bool_Exp>;
  user_username?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "notification" */
export enum Notification_Constraint {
  /** unique or primary key constraint */
  NotificationPkey = 'notification_pkey',
}

/** input type for incrementing numeric columns in table "notification" */
export type Notification_Inc_Input = {
  /** What is the id of the event in the event table. */
  event_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "notification" */
export type Notification_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  event?: InputMaybe<Event_Obj_Rel_Insert_Input>;
  /** What is the id of the event in the event table. */
  event_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['bigint']>;
  user?: InputMaybe<User_Obj_Rel_Insert_Input>;
  /** What user username is this notification for */
  user_username?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Notification_Max_Fields = {
  __typename?: 'notification_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  /** What is the id of the event in the event table. */
  event_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['bigint']>;
  /** What user username is this notification for */
  user_username?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "notification" */
export type Notification_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  /** What is the id of the event in the event table. */
  event_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** What user username is this notification for */
  user_username?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Notification_Min_Fields = {
  __typename?: 'notification_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  /** What is the id of the event in the event table. */
  event_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['bigint']>;
  /** What user username is this notification for */
  user_username?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "notification" */
export type Notification_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  /** What is the id of the event in the event table. */
  event_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** What user username is this notification for */
  user_username?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "notification" */
export type Notification_Mutation_Response = {
  __typename?: 'notification_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Notification>;
};

/** on_conflict condition type for table "notification" */
export type Notification_On_Conflict = {
  constraint: Notification_Constraint;
  update_columns?: Array<Notification_Update_Column>;
  where?: InputMaybe<Notification_Bool_Exp>;
};

/** Ordering options when selecting data from "notification". */
export type Notification_Order_By = {
  created_at?: InputMaybe<Order_By>;
  event?: InputMaybe<Event_Order_By>;
  event_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user?: InputMaybe<User_Order_By>;
  user_username?: InputMaybe<Order_By>;
};

/** primary key columns input for table: notification */
export type Notification_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "notification" */
export enum Notification_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EventId = 'event_id',
  /** column name */
  Id = 'id',
  /** column name */
  UserUsername = 'user_username',
}

/** input type for updating data in table "notification" */
export type Notification_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  /** What is the id of the event in the event table. */
  event_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['bigint']>;
  /** What user username is this notification for */
  user_username?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Notification_Stddev_Fields = {
  __typename?: 'notification_stddev_fields';
  /** What is the id of the event in the event table. */
  event_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "notification" */
export type Notification_Stddev_Order_By = {
  /** What is the id of the event in the event table. */
  event_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Notification_Stddev_Pop_Fields = {
  __typename?: 'notification_stddev_pop_fields';
  /** What is the id of the event in the event table. */
  event_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "notification" */
export type Notification_Stddev_Pop_Order_By = {
  /** What is the id of the event in the event table. */
  event_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Notification_Stddev_Samp_Fields = {
  __typename?: 'notification_stddev_samp_fields';
  /** What is the id of the event in the event table. */
  event_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "notification" */
export type Notification_Stddev_Samp_Order_By = {
  /** What is the id of the event in the event table. */
  event_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Notification_Sum_Fields = {
  __typename?: 'notification_sum_fields';
  /** What is the id of the event in the event table. */
  event_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "notification" */
export type Notification_Sum_Order_By = {
  /** What is the id of the event in the event table. */
  event_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** update columns of table "notification" */
export enum Notification_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EventId = 'event_id',
  /** column name */
  Id = 'id',
  /** column name */
  UserUsername = 'user_username',
}

/** aggregate var_pop on columns */
export type Notification_Var_Pop_Fields = {
  __typename?: 'notification_var_pop_fields';
  /** What is the id of the event in the event table. */
  event_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "notification" */
export type Notification_Var_Pop_Order_By = {
  /** What is the id of the event in the event table. */
  event_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Notification_Var_Samp_Fields = {
  __typename?: 'notification_var_samp_fields';
  /** What is the id of the event in the event table. */
  event_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "notification" */
export type Notification_Var_Samp_Order_By = {
  /** What is the id of the event in the event table. */
  event_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Notification_Variance_Fields = {
  __typename?: 'notification_variance_fields';
  /** What is the id of the event in the event table. */
  event_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "notification" */
export type Notification_Variance_Order_By = {
  /** What is the id of the event in the event table. */
  event_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last',
}

/** This table contains data to help us manage the password reset process. */
export type Password_Reset = {
  __typename?: 'password_reset';
  created_at: Scalars['timestamptz'];
  id: Scalars['bigint'];
  /** The token is generated server side and sent via email. This token is then verified to reset the password. */
  token: Scalars['String'];
  /** An object relationship */
  user: User;
  /** What user username does this password reset request belong to */
  user_username: Scalars['String'];
  valid_till: Scalars['timestamptz'];
};

/** aggregated selection of "password_reset" */
export type Password_Reset_Aggregate = {
  __typename?: 'password_reset_aggregate';
  aggregate?: Maybe<Password_Reset_Aggregate_Fields>;
  nodes: Array<Password_Reset>;
};

/** aggregate fields of "password_reset" */
export type Password_Reset_Aggregate_Fields = {
  __typename?: 'password_reset_aggregate_fields';
  avg?: Maybe<Password_Reset_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Password_Reset_Max_Fields>;
  min?: Maybe<Password_Reset_Min_Fields>;
  stddev?: Maybe<Password_Reset_Stddev_Fields>;
  stddev_pop?: Maybe<Password_Reset_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Password_Reset_Stddev_Samp_Fields>;
  sum?: Maybe<Password_Reset_Sum_Fields>;
  var_pop?: Maybe<Password_Reset_Var_Pop_Fields>;
  var_samp?: Maybe<Password_Reset_Var_Samp_Fields>;
  variance?: Maybe<Password_Reset_Variance_Fields>;
};

/** aggregate fields of "password_reset" */
export type Password_Reset_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Password_Reset_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "password_reset" */
export type Password_Reset_Aggregate_Order_By = {
  avg?: InputMaybe<Password_Reset_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Password_Reset_Max_Order_By>;
  min?: InputMaybe<Password_Reset_Min_Order_By>;
  stddev?: InputMaybe<Password_Reset_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Password_Reset_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Password_Reset_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Password_Reset_Sum_Order_By>;
  var_pop?: InputMaybe<Password_Reset_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Password_Reset_Var_Samp_Order_By>;
  variance?: InputMaybe<Password_Reset_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "password_reset" */
export type Password_Reset_Arr_Rel_Insert_Input = {
  data: Array<Password_Reset_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Password_Reset_On_Conflict>;
};

/** aggregate avg on columns */
export type Password_Reset_Avg_Fields = {
  __typename?: 'password_reset_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "password_reset" */
export type Password_Reset_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "password_reset". All fields are combined with a logical 'AND'. */
export type Password_Reset_Bool_Exp = {
  _and?: InputMaybe<Array<Password_Reset_Bool_Exp>>;
  _not?: InputMaybe<Password_Reset_Bool_Exp>;
  _or?: InputMaybe<Array<Password_Reset_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  token?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<User_Bool_Exp>;
  user_username?: InputMaybe<String_Comparison_Exp>;
  valid_till?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "password_reset" */
export enum Password_Reset_Constraint {
  /** unique or primary key constraint */
  PasswordResetPkey = 'password_reset_pkey',
  /** unique or primary key constraint */
  PasswordResetTokenKey = 'password_reset_token_key',
}

/** input type for incrementing numeric columns in table "password_reset" */
export type Password_Reset_Inc_Input = {
  id?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "password_reset" */
export type Password_Reset_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['bigint']>;
  /** The token is generated server side and sent via email. This token is then verified to reset the password. */
  token?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<User_Obj_Rel_Insert_Input>;
  /** What user username does this password reset request belong to */
  user_username?: InputMaybe<Scalars['String']>;
  valid_till?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Password_Reset_Max_Fields = {
  __typename?: 'password_reset_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  /** The token is generated server side and sent via email. This token is then verified to reset the password. */
  token?: Maybe<Scalars['String']>;
  /** What user username does this password reset request belong to */
  user_username?: Maybe<Scalars['String']>;
  valid_till?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "password_reset" */
export type Password_Reset_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** The token is generated server side and sent via email. This token is then verified to reset the password. */
  token?: InputMaybe<Order_By>;
  /** What user username does this password reset request belong to */
  user_username?: InputMaybe<Order_By>;
  valid_till?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Password_Reset_Min_Fields = {
  __typename?: 'password_reset_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  /** The token is generated server side and sent via email. This token is then verified to reset the password. */
  token?: Maybe<Scalars['String']>;
  /** What user username does this password reset request belong to */
  user_username?: Maybe<Scalars['String']>;
  valid_till?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "password_reset" */
export type Password_Reset_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** The token is generated server side and sent via email. This token is then verified to reset the password. */
  token?: InputMaybe<Order_By>;
  /** What user username does this password reset request belong to */
  user_username?: InputMaybe<Order_By>;
  valid_till?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "password_reset" */
export type Password_Reset_Mutation_Response = {
  __typename?: 'password_reset_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Password_Reset>;
};

/** on_conflict condition type for table "password_reset" */
export type Password_Reset_On_Conflict = {
  constraint: Password_Reset_Constraint;
  update_columns?: Array<Password_Reset_Update_Column>;
  where?: InputMaybe<Password_Reset_Bool_Exp>;
};

/** Ordering options when selecting data from "password_reset". */
export type Password_Reset_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  token?: InputMaybe<Order_By>;
  user?: InputMaybe<User_Order_By>;
  user_username?: InputMaybe<Order_By>;
  valid_till?: InputMaybe<Order_By>;
};

/** primary key columns input for table: password_reset */
export type Password_Reset_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "password_reset" */
export enum Password_Reset_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Token = 'token',
  /** column name */
  UserUsername = 'user_username',
  /** column name */
  ValidTill = 'valid_till',
}

/** input type for updating data in table "password_reset" */
export type Password_Reset_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['bigint']>;
  /** The token is generated server side and sent via email. This token is then verified to reset the password. */
  token?: InputMaybe<Scalars['String']>;
  /** What user username does this password reset request belong to */
  user_username?: InputMaybe<Scalars['String']>;
  valid_till?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Password_Reset_Stddev_Fields = {
  __typename?: 'password_reset_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "password_reset" */
export type Password_Reset_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Password_Reset_Stddev_Pop_Fields = {
  __typename?: 'password_reset_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "password_reset" */
export type Password_Reset_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Password_Reset_Stddev_Samp_Fields = {
  __typename?: 'password_reset_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "password_reset" */
export type Password_Reset_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Password_Reset_Sum_Fields = {
  __typename?: 'password_reset_sum_fields';
  id?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "password_reset" */
export type Password_Reset_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** update columns of table "password_reset" */
export enum Password_Reset_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Token = 'token',
  /** column name */
  UserUsername = 'user_username',
  /** column name */
  ValidTill = 'valid_till',
}

/** aggregate var_pop on columns */
export type Password_Reset_Var_Pop_Fields = {
  __typename?: 'password_reset_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "password_reset" */
export type Password_Reset_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Password_Reset_Var_Samp_Fields = {
  __typename?: 'password_reset_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "password_reset" */
export type Password_Reset_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Password_Reset_Variance_Fields = {
  __typename?: 'password_reset_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "password_reset" */
export type Password_Reset_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** A project represents a collection of lines to translate to any number of locales */
export type Project = {
  __typename?: 'project';
  created_at: Scalars['timestamptz'];
  /** What is the description of this project. This is show in the UI */
  description: Scalars['String'];
  id: Scalars['Int'];
  /** An array relationship */
  lines: Array<Line>;
  /** An aggregate relationship */
  lines_aggregate: Line_Aggregate;
  /** What is the name of the project. This is shown in the UI */
  name: Scalars['String'];
  /** An array relationship */
  project_locales: Array<Project_Locale>;
  /** An aggregate relationship */
  project_locales_aggregate: Project_Locale_Aggregate;
  /** An array relationship */
  project_users: Array<Project_User>;
  /** An aggregate relationship */
  project_users_aggregate: Project_User_Aggregate;
  /** The generated slug for the project name it is used in the url. */
  slug: Scalars['String'];
  /** An array relationship */
  translations: Array<Translation>;
  /** An aggregate relationship */
  translations_aggregate: Translation_Aggregate;
  updated_at: Scalars['timestamptz'];
};

/** A project represents a collection of lines to translate to any number of locales */
export type ProjectLinesArgs = {
  distinct_on?: InputMaybe<Array<Line_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Line_Order_By>>;
  where?: InputMaybe<Line_Bool_Exp>;
};

/** A project represents a collection of lines to translate to any number of locales */
export type ProjectLines_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Line_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Line_Order_By>>;
  where?: InputMaybe<Line_Bool_Exp>;
};

/** A project represents a collection of lines to translate to any number of locales */
export type ProjectProject_LocalesArgs = {
  distinct_on?: InputMaybe<Array<Project_Locale_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Project_Locale_Order_By>>;
  where?: InputMaybe<Project_Locale_Bool_Exp>;
};

/** A project represents a collection of lines to translate to any number of locales */
export type ProjectProject_Locales_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Project_Locale_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Project_Locale_Order_By>>;
  where?: InputMaybe<Project_Locale_Bool_Exp>;
};

/** A project represents a collection of lines to translate to any number of locales */
export type ProjectProject_UsersArgs = {
  distinct_on?: InputMaybe<Array<Project_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Project_User_Order_By>>;
  where?: InputMaybe<Project_User_Bool_Exp>;
};

/** A project represents a collection of lines to translate to any number of locales */
export type ProjectProject_Users_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Project_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Project_User_Order_By>>;
  where?: InputMaybe<Project_User_Bool_Exp>;
};

/** A project represents a collection of lines to translate to any number of locales */
export type ProjectTranslationsArgs = {
  distinct_on?: InputMaybe<Array<Translation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Translation_Order_By>>;
  where?: InputMaybe<Translation_Bool_Exp>;
};

/** A project represents a collection of lines to translate to any number of locales */
export type ProjectTranslations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Translation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Translation_Order_By>>;
  where?: InputMaybe<Translation_Bool_Exp>;
};

/** aggregated selection of "project" */
export type Project_Aggregate = {
  __typename?: 'project_aggregate';
  aggregate?: Maybe<Project_Aggregate_Fields>;
  nodes: Array<Project>;
};

/** aggregate fields of "project" */
export type Project_Aggregate_Fields = {
  __typename?: 'project_aggregate_fields';
  avg?: Maybe<Project_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Project_Max_Fields>;
  min?: Maybe<Project_Min_Fields>;
  stddev?: Maybe<Project_Stddev_Fields>;
  stddev_pop?: Maybe<Project_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Project_Stddev_Samp_Fields>;
  sum?: Maybe<Project_Sum_Fields>;
  var_pop?: Maybe<Project_Var_Pop_Fields>;
  var_samp?: Maybe<Project_Var_Samp_Fields>;
  variance?: Maybe<Project_Variance_Fields>;
};

/** aggregate fields of "project" */
export type Project_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Project_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Project_Avg_Fields = {
  __typename?: 'project_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "project". All fields are combined with a logical 'AND'. */
export type Project_Bool_Exp = {
  _and?: InputMaybe<Array<Project_Bool_Exp>>;
  _not?: InputMaybe<Project_Bool_Exp>;
  _or?: InputMaybe<Array<Project_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  lines?: InputMaybe<Line_Bool_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  project_locales?: InputMaybe<Project_Locale_Bool_Exp>;
  project_users?: InputMaybe<Project_User_Bool_Exp>;
  slug?: InputMaybe<String_Comparison_Exp>;
  translations?: InputMaybe<Translation_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "project" */
export enum Project_Constraint {
  /** unique or primary key constraint */
  ProjectPkey = 'project_pkey',
}

/** input type for incrementing numeric columns in table "project" */
export type Project_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "project" */
export type Project_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  /** What is the description of this project. This is show in the UI */
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  lines?: InputMaybe<Line_Arr_Rel_Insert_Input>;
  /** What is the name of the project. This is shown in the UI */
  name?: InputMaybe<Scalars['String']>;
  project_locales?: InputMaybe<Project_Locale_Arr_Rel_Insert_Input>;
  project_users?: InputMaybe<Project_User_Arr_Rel_Insert_Input>;
  /** The generated slug for the project name it is used in the url. */
  slug?: InputMaybe<Scalars['String']>;
  translations?: InputMaybe<Translation_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** A relational table of all the locales added to a specific project */
export type Project_Locale = {
  __typename?: 'project_locale';
  active: Scalars['Boolean'];
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  /** An object relationship */
  locale: Locale;
  locale_id: Scalars['Int'];
  /** An object relationship */
  project: Project;
  project_id: Scalars['Int'];
};

/** aggregated selection of "project_locale" */
export type Project_Locale_Aggregate = {
  __typename?: 'project_locale_aggregate';
  aggregate?: Maybe<Project_Locale_Aggregate_Fields>;
  nodes: Array<Project_Locale>;
};

/** aggregate fields of "project_locale" */
export type Project_Locale_Aggregate_Fields = {
  __typename?: 'project_locale_aggregate_fields';
  avg?: Maybe<Project_Locale_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Project_Locale_Max_Fields>;
  min?: Maybe<Project_Locale_Min_Fields>;
  stddev?: Maybe<Project_Locale_Stddev_Fields>;
  stddev_pop?: Maybe<Project_Locale_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Project_Locale_Stddev_Samp_Fields>;
  sum?: Maybe<Project_Locale_Sum_Fields>;
  var_pop?: Maybe<Project_Locale_Var_Pop_Fields>;
  var_samp?: Maybe<Project_Locale_Var_Samp_Fields>;
  variance?: Maybe<Project_Locale_Variance_Fields>;
};

/** aggregate fields of "project_locale" */
export type Project_Locale_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Project_Locale_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "project_locale" */
export type Project_Locale_Aggregate_Order_By = {
  avg?: InputMaybe<Project_Locale_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Project_Locale_Max_Order_By>;
  min?: InputMaybe<Project_Locale_Min_Order_By>;
  stddev?: InputMaybe<Project_Locale_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Project_Locale_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Project_Locale_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Project_Locale_Sum_Order_By>;
  var_pop?: InputMaybe<Project_Locale_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Project_Locale_Var_Samp_Order_By>;
  variance?: InputMaybe<Project_Locale_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "project_locale" */
export type Project_Locale_Arr_Rel_Insert_Input = {
  data: Array<Project_Locale_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Project_Locale_On_Conflict>;
};

/** aggregate avg on columns */
export type Project_Locale_Avg_Fields = {
  __typename?: 'project_locale_avg_fields';
  id?: Maybe<Scalars['Float']>;
  locale_id?: Maybe<Scalars['Float']>;
  project_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "project_locale" */
export type Project_Locale_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  locale_id?: InputMaybe<Order_By>;
  project_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "project_locale". All fields are combined with a logical 'AND'. */
export type Project_Locale_Bool_Exp = {
  _and?: InputMaybe<Array<Project_Locale_Bool_Exp>>;
  _not?: InputMaybe<Project_Locale_Bool_Exp>;
  _or?: InputMaybe<Array<Project_Locale_Bool_Exp>>;
  active?: InputMaybe<Boolean_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  locale?: InputMaybe<Locale_Bool_Exp>;
  locale_id?: InputMaybe<Int_Comparison_Exp>;
  project?: InputMaybe<Project_Bool_Exp>;
  project_id?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "project_locale" */
export enum Project_Locale_Constraint {
  /** unique or primary key constraint */
  ProjectLocalePkey = 'project_locale_pkey',
}

/** input type for incrementing numeric columns in table "project_locale" */
export type Project_Locale_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  locale_id?: InputMaybe<Scalars['Int']>;
  project_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "project_locale" */
export type Project_Locale_Insert_Input = {
  active?: InputMaybe<Scalars['Boolean']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Locale_Obj_Rel_Insert_Input>;
  locale_id?: InputMaybe<Scalars['Int']>;
  project?: InputMaybe<Project_Obj_Rel_Insert_Input>;
  project_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Project_Locale_Max_Fields = {
  __typename?: 'project_locale_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  locale_id?: Maybe<Scalars['Int']>;
  project_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "project_locale" */
export type Project_Locale_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  locale_id?: InputMaybe<Order_By>;
  project_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Project_Locale_Min_Fields = {
  __typename?: 'project_locale_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  locale_id?: Maybe<Scalars['Int']>;
  project_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "project_locale" */
export type Project_Locale_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  locale_id?: InputMaybe<Order_By>;
  project_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "project_locale" */
export type Project_Locale_Mutation_Response = {
  __typename?: 'project_locale_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Project_Locale>;
};

/** on_conflict condition type for table "project_locale" */
export type Project_Locale_On_Conflict = {
  constraint: Project_Locale_Constraint;
  update_columns?: Array<Project_Locale_Update_Column>;
  where?: InputMaybe<Project_Locale_Bool_Exp>;
};

/** Ordering options when selecting data from "project_locale". */
export type Project_Locale_Order_By = {
  active?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  locale?: InputMaybe<Locale_Order_By>;
  locale_id?: InputMaybe<Order_By>;
  project?: InputMaybe<Project_Order_By>;
  project_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: project_locale */
export type Project_Locale_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "project_locale" */
export enum Project_Locale_Select_Column {
  /** column name */
  Active = 'active',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  LocaleId = 'locale_id',
  /** column name */
  ProjectId = 'project_id',
}

/** input type for updating data in table "project_locale" */
export type Project_Locale_Set_Input = {
  active?: InputMaybe<Scalars['Boolean']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  locale_id?: InputMaybe<Scalars['Int']>;
  project_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Project_Locale_Stddev_Fields = {
  __typename?: 'project_locale_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  locale_id?: Maybe<Scalars['Float']>;
  project_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "project_locale" */
export type Project_Locale_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  locale_id?: InputMaybe<Order_By>;
  project_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Project_Locale_Stddev_Pop_Fields = {
  __typename?: 'project_locale_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  locale_id?: Maybe<Scalars['Float']>;
  project_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "project_locale" */
export type Project_Locale_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  locale_id?: InputMaybe<Order_By>;
  project_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Project_Locale_Stddev_Samp_Fields = {
  __typename?: 'project_locale_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  locale_id?: Maybe<Scalars['Float']>;
  project_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "project_locale" */
export type Project_Locale_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  locale_id?: InputMaybe<Order_By>;
  project_id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Project_Locale_Sum_Fields = {
  __typename?: 'project_locale_sum_fields';
  id?: Maybe<Scalars['Int']>;
  locale_id?: Maybe<Scalars['Int']>;
  project_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "project_locale" */
export type Project_Locale_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  locale_id?: InputMaybe<Order_By>;
  project_id?: InputMaybe<Order_By>;
};

/** update columns of table "project_locale" */
export enum Project_Locale_Update_Column {
  /** column name */
  Active = 'active',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  LocaleId = 'locale_id',
  /** column name */
  ProjectId = 'project_id',
}

/** aggregate var_pop on columns */
export type Project_Locale_Var_Pop_Fields = {
  __typename?: 'project_locale_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  locale_id?: Maybe<Scalars['Float']>;
  project_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "project_locale" */
export type Project_Locale_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  locale_id?: InputMaybe<Order_By>;
  project_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Project_Locale_Var_Samp_Fields = {
  __typename?: 'project_locale_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  locale_id?: Maybe<Scalars['Float']>;
  project_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "project_locale" */
export type Project_Locale_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  locale_id?: InputMaybe<Order_By>;
  project_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Project_Locale_Variance_Fields = {
  __typename?: 'project_locale_variance_fields';
  id?: Maybe<Scalars['Float']>;
  locale_id?: Maybe<Scalars['Float']>;
  project_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "project_locale" */
export type Project_Locale_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  locale_id?: InputMaybe<Order_By>;
  project_id?: InputMaybe<Order_By>;
};

/** aggregate max on columns */
export type Project_Max_Fields = {
  __typename?: 'project_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  /** What is the description of this project. This is show in the UI */
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  /** What is the name of the project. This is shown in the UI */
  name?: Maybe<Scalars['String']>;
  /** The generated slug for the project name it is used in the url. */
  slug?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Project_Min_Fields = {
  __typename?: 'project_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  /** What is the description of this project. This is show in the UI */
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  /** What is the name of the project. This is shown in the UI */
  name?: Maybe<Scalars['String']>;
  /** The generated slug for the project name it is used in the url. */
  slug?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "project" */
export type Project_Mutation_Response = {
  __typename?: 'project_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Project>;
};

/** input type for inserting object relation for remote table "project" */
export type Project_Obj_Rel_Insert_Input = {
  data: Project_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Project_On_Conflict>;
};

/** on_conflict condition type for table "project" */
export type Project_On_Conflict = {
  constraint: Project_Constraint;
  update_columns?: Array<Project_Update_Column>;
  where?: InputMaybe<Project_Bool_Exp>;
};

/** Ordering options when selecting data from "project". */
export type Project_Order_By = {
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lines_aggregate?: InputMaybe<Line_Aggregate_Order_By>;
  name?: InputMaybe<Order_By>;
  project_locales_aggregate?: InputMaybe<Project_Locale_Aggregate_Order_By>;
  project_users_aggregate?: InputMaybe<Project_User_Aggregate_Order_By>;
  slug?: InputMaybe<Order_By>;
  translations_aggregate?: InputMaybe<Translation_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: project */
export type Project_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "project" */
export enum Project_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Slug = 'slug',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "project" */
export type Project_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  /** What is the description of this project. This is show in the UI */
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  /** What is the name of the project. This is shown in the UI */
  name?: InputMaybe<Scalars['String']>;
  /** The generated slug for the project name it is used in the url. */
  slug?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Project_Stddev_Fields = {
  __typename?: 'project_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Project_Stddev_Pop_Fields = {
  __typename?: 'project_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Project_Stddev_Samp_Fields = {
  __typename?: 'project_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Project_Sum_Fields = {
  __typename?: 'project_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "project" */
export enum Project_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Slug = 'slug',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** A relational table to indicate which users belong to which projects */
export type Project_User = {
  __typename?: 'project_user';
  /** Is this user active on the project */
  active: Scalars['Boolean'];
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  /** An object relationship */
  project: Project;
  project_id: Scalars['Int'];
  /** An object relationship */
  user: User;
  user_username: Scalars['String'];
};

/** aggregated selection of "project_user" */
export type Project_User_Aggregate = {
  __typename?: 'project_user_aggregate';
  aggregate?: Maybe<Project_User_Aggregate_Fields>;
  nodes: Array<Project_User>;
};

/** aggregate fields of "project_user" */
export type Project_User_Aggregate_Fields = {
  __typename?: 'project_user_aggregate_fields';
  avg?: Maybe<Project_User_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Project_User_Max_Fields>;
  min?: Maybe<Project_User_Min_Fields>;
  stddev?: Maybe<Project_User_Stddev_Fields>;
  stddev_pop?: Maybe<Project_User_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Project_User_Stddev_Samp_Fields>;
  sum?: Maybe<Project_User_Sum_Fields>;
  var_pop?: Maybe<Project_User_Var_Pop_Fields>;
  var_samp?: Maybe<Project_User_Var_Samp_Fields>;
  variance?: Maybe<Project_User_Variance_Fields>;
};

/** aggregate fields of "project_user" */
export type Project_User_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Project_User_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "project_user" */
export type Project_User_Aggregate_Order_By = {
  avg?: InputMaybe<Project_User_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Project_User_Max_Order_By>;
  min?: InputMaybe<Project_User_Min_Order_By>;
  stddev?: InputMaybe<Project_User_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Project_User_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Project_User_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Project_User_Sum_Order_By>;
  var_pop?: InputMaybe<Project_User_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Project_User_Var_Samp_Order_By>;
  variance?: InputMaybe<Project_User_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "project_user" */
export type Project_User_Arr_Rel_Insert_Input = {
  data: Array<Project_User_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Project_User_On_Conflict>;
};

/** aggregate avg on columns */
export type Project_User_Avg_Fields = {
  __typename?: 'project_user_avg_fields';
  id?: Maybe<Scalars['Float']>;
  project_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "project_user" */
export type Project_User_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  project_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "project_user". All fields are combined with a logical 'AND'. */
export type Project_User_Bool_Exp = {
  _and?: InputMaybe<Array<Project_User_Bool_Exp>>;
  _not?: InputMaybe<Project_User_Bool_Exp>;
  _or?: InputMaybe<Array<Project_User_Bool_Exp>>;
  active?: InputMaybe<Boolean_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  project?: InputMaybe<Project_Bool_Exp>;
  project_id?: InputMaybe<Int_Comparison_Exp>;
  user?: InputMaybe<User_Bool_Exp>;
  user_username?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "project_user" */
export enum Project_User_Constraint {
  /** unique or primary key constraint */
  ProjectUserPkey = 'project_user_pkey',
}

/** input type for incrementing numeric columns in table "project_user" */
export type Project_User_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  project_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "project_user" */
export type Project_User_Insert_Input = {
  /** Is this user active on the project */
  active?: InputMaybe<Scalars['Boolean']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  project?: InputMaybe<Project_Obj_Rel_Insert_Input>;
  project_id?: InputMaybe<Scalars['Int']>;
  user?: InputMaybe<User_Obj_Rel_Insert_Input>;
  user_username?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Project_User_Max_Fields = {
  __typename?: 'project_user_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  project_id?: Maybe<Scalars['Int']>;
  user_username?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "project_user" */
export type Project_User_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  project_id?: InputMaybe<Order_By>;
  user_username?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Project_User_Min_Fields = {
  __typename?: 'project_user_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  project_id?: Maybe<Scalars['Int']>;
  user_username?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "project_user" */
export type Project_User_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  project_id?: InputMaybe<Order_By>;
  user_username?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "project_user" */
export type Project_User_Mutation_Response = {
  __typename?: 'project_user_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Project_User>;
};

/** on_conflict condition type for table "project_user" */
export type Project_User_On_Conflict = {
  constraint: Project_User_Constraint;
  update_columns?: Array<Project_User_Update_Column>;
  where?: InputMaybe<Project_User_Bool_Exp>;
};

/** Ordering options when selecting data from "project_user". */
export type Project_User_Order_By = {
  active?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  project?: InputMaybe<Project_Order_By>;
  project_id?: InputMaybe<Order_By>;
  user?: InputMaybe<User_Order_By>;
  user_username?: InputMaybe<Order_By>;
};

/** primary key columns input for table: project_user */
export type Project_User_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "project_user" */
export enum Project_User_Select_Column {
  /** column name */
  Active = 'active',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ProjectId = 'project_id',
  /** column name */
  UserUsername = 'user_username',
}

/** input type for updating data in table "project_user" */
export type Project_User_Set_Input = {
  /** Is this user active on the project */
  active?: InputMaybe<Scalars['Boolean']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  project_id?: InputMaybe<Scalars['Int']>;
  user_username?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Project_User_Stddev_Fields = {
  __typename?: 'project_user_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  project_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "project_user" */
export type Project_User_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  project_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Project_User_Stddev_Pop_Fields = {
  __typename?: 'project_user_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  project_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "project_user" */
export type Project_User_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  project_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Project_User_Stddev_Samp_Fields = {
  __typename?: 'project_user_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  project_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "project_user" */
export type Project_User_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  project_id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Project_User_Sum_Fields = {
  __typename?: 'project_user_sum_fields';
  id?: Maybe<Scalars['Int']>;
  project_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "project_user" */
export type Project_User_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  project_id?: InputMaybe<Order_By>;
};

/** update columns of table "project_user" */
export enum Project_User_Update_Column {
  /** column name */
  Active = 'active',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ProjectId = 'project_id',
  /** column name */
  UserUsername = 'user_username',
}

/** aggregate var_pop on columns */
export type Project_User_Var_Pop_Fields = {
  __typename?: 'project_user_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  project_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "project_user" */
export type Project_User_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  project_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Project_User_Var_Samp_Fields = {
  __typename?: 'project_user_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  project_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "project_user" */
export type Project_User_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  project_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Project_User_Variance_Fields = {
  __typename?: 'project_user_variance_fields';
  id?: Maybe<Scalars['Float']>;
  project_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "project_user" */
export type Project_User_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  project_id?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Project_Var_Pop_Fields = {
  __typename?: 'project_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Project_Var_Samp_Fields = {
  __typename?: 'project_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Project_Variance_Fields = {
  __typename?: 'project_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "EventType" */
  EventType: Array<EventType>;
  /** fetch aggregated fields from the table: "EventType" */
  EventType_aggregate: EventType_Aggregate;
  /** fetch data from the table: "EventType" using primary key columns */
  EventType_by_pk?: Maybe<EventType>;
  /** fetch data from the table: "event" */
  event: Array<Event>;
  /** fetch aggregated fields from the table: "event" */
  event_aggregate: Event_Aggregate;
  /** fetch data from the table: "event" using primary key columns */
  event_by_pk?: Maybe<Event>;
  /** fetch data from the table: "line" */
  line: Array<Line>;
  /** fetch aggregated fields from the table: "line" */
  line_aggregate: Line_Aggregate;
  /** fetch data from the table: "line" using primary key columns */
  line_by_pk?: Maybe<Line>;
  /** fetch data from the table: "locale" */
  locale: Array<Locale>;
  /** fetch aggregated fields from the table: "locale" */
  locale_aggregate: Locale_Aggregate;
  /** fetch data from the table: "locale" using primary key columns */
  locale_by_pk?: Maybe<Locale>;
  /** fetch data from the table: "notification" */
  notification: Array<Notification>;
  /** fetch aggregated fields from the table: "notification" */
  notification_aggregate: Notification_Aggregate;
  /** fetch data from the table: "notification" using primary key columns */
  notification_by_pk?: Maybe<Notification>;
  /** fetch data from the table: "password_reset" */
  password_reset: Array<Password_Reset>;
  /** fetch aggregated fields from the table: "password_reset" */
  password_reset_aggregate: Password_Reset_Aggregate;
  /** fetch data from the table: "password_reset" using primary key columns */
  password_reset_by_pk?: Maybe<Password_Reset>;
  /** fetch data from the table: "project" */
  project: Array<Project>;
  /** fetch aggregated fields from the table: "project" */
  project_aggregate: Project_Aggregate;
  /** fetch data from the table: "project" using primary key columns */
  project_by_pk?: Maybe<Project>;
  /** fetch data from the table: "project_locale" */
  project_locale: Array<Project_Locale>;
  /** fetch aggregated fields from the table: "project_locale" */
  project_locale_aggregate: Project_Locale_Aggregate;
  /** fetch data from the table: "project_locale" using primary key columns */
  project_locale_by_pk?: Maybe<Project_Locale>;
  /** fetch data from the table: "project_user" */
  project_user: Array<Project_User>;
  /** fetch aggregated fields from the table: "project_user" */
  project_user_aggregate: Project_User_Aggregate;
  /** fetch data from the table: "project_user" using primary key columns */
  project_user_by_pk?: Maybe<Project_User>;
  /** fetch data from the table: "translation" */
  translation: Array<Translation>;
  /** fetch aggregated fields from the table: "translation" */
  translation_aggregate: Translation_Aggregate;
  /** fetch data from the table: "translation" using primary key columns */
  translation_by_pk?: Maybe<Translation>;
  /** fetch data from the table: "translation_comment" */
  translation_comment: Array<Translation_Comment>;
  /** fetch aggregated fields from the table: "translation_comment" */
  translation_comment_aggregate: Translation_Comment_Aggregate;
  /** fetch data from the table: "translation_comment" using primary key columns */
  translation_comment_by_pk?: Maybe<Translation_Comment>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
  /** fetch data from the table: "user_private" */
  user_private: Array<User_Private>;
  /** fetch aggregated fields from the table: "user_private" */
  user_private_aggregate: User_Private_Aggregate;
};

export type Query_RootEventTypeArgs = {
  distinct_on?: InputMaybe<Array<EventType_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<EventType_Order_By>>;
  where?: InputMaybe<EventType_Bool_Exp>;
};

export type Query_RootEventType_AggregateArgs = {
  distinct_on?: InputMaybe<Array<EventType_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<EventType_Order_By>>;
  where?: InputMaybe<EventType_Bool_Exp>;
};

export type Query_RootEventType_By_PkArgs = {
  value: Scalars['String'];
};

export type Query_RootEventArgs = {
  distinct_on?: InputMaybe<Array<Event_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Event_Order_By>>;
  where?: InputMaybe<Event_Bool_Exp>;
};

export type Query_RootEvent_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Event_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Event_Order_By>>;
  where?: InputMaybe<Event_Bool_Exp>;
};

export type Query_RootEvent_By_PkArgs = {
  id: Scalars['bigint'];
};

export type Query_RootLineArgs = {
  distinct_on?: InputMaybe<Array<Line_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Line_Order_By>>;
  where?: InputMaybe<Line_Bool_Exp>;
};

export type Query_RootLine_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Line_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Line_Order_By>>;
  where?: InputMaybe<Line_Bool_Exp>;
};

export type Query_RootLine_By_PkArgs = {
  id: Scalars['Int'];
};

export type Query_RootLocaleArgs = {
  distinct_on?: InputMaybe<Array<Locale_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Locale_Order_By>>;
  where?: InputMaybe<Locale_Bool_Exp>;
};

export type Query_RootLocale_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Locale_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Locale_Order_By>>;
  where?: InputMaybe<Locale_Bool_Exp>;
};

export type Query_RootLocale_By_PkArgs = {
  id: Scalars['bigint'];
};

export type Query_RootNotificationArgs = {
  distinct_on?: InputMaybe<Array<Notification_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Notification_Order_By>>;
  where?: InputMaybe<Notification_Bool_Exp>;
};

export type Query_RootNotification_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Notification_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Notification_Order_By>>;
  where?: InputMaybe<Notification_Bool_Exp>;
};

export type Query_RootNotification_By_PkArgs = {
  id: Scalars['bigint'];
};

export type Query_RootPassword_ResetArgs = {
  distinct_on?: InputMaybe<Array<Password_Reset_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Password_Reset_Order_By>>;
  where?: InputMaybe<Password_Reset_Bool_Exp>;
};

export type Query_RootPassword_Reset_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Password_Reset_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Password_Reset_Order_By>>;
  where?: InputMaybe<Password_Reset_Bool_Exp>;
};

export type Query_RootPassword_Reset_By_PkArgs = {
  id: Scalars['bigint'];
};

export type Query_RootProjectArgs = {
  distinct_on?: InputMaybe<Array<Project_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Project_Order_By>>;
  where?: InputMaybe<Project_Bool_Exp>;
};

export type Query_RootProject_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Project_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Project_Order_By>>;
  where?: InputMaybe<Project_Bool_Exp>;
};

export type Query_RootProject_By_PkArgs = {
  id: Scalars['Int'];
};

export type Query_RootProject_LocaleArgs = {
  distinct_on?: InputMaybe<Array<Project_Locale_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Project_Locale_Order_By>>;
  where?: InputMaybe<Project_Locale_Bool_Exp>;
};

export type Query_RootProject_Locale_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Project_Locale_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Project_Locale_Order_By>>;
  where?: InputMaybe<Project_Locale_Bool_Exp>;
};

export type Query_RootProject_Locale_By_PkArgs = {
  id: Scalars['Int'];
};

export type Query_RootProject_UserArgs = {
  distinct_on?: InputMaybe<Array<Project_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Project_User_Order_By>>;
  where?: InputMaybe<Project_User_Bool_Exp>;
};

export type Query_RootProject_User_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Project_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Project_User_Order_By>>;
  where?: InputMaybe<Project_User_Bool_Exp>;
};

export type Query_RootProject_User_By_PkArgs = {
  id: Scalars['Int'];
};

export type Query_RootTranslationArgs = {
  distinct_on?: InputMaybe<Array<Translation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Translation_Order_By>>;
  where?: InputMaybe<Translation_Bool_Exp>;
};

export type Query_RootTranslation_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Translation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Translation_Order_By>>;
  where?: InputMaybe<Translation_Bool_Exp>;
};

export type Query_RootTranslation_By_PkArgs = {
  id: Scalars['bigint'];
};

export type Query_RootTranslation_CommentArgs = {
  distinct_on?: InputMaybe<Array<Translation_Comment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Translation_Comment_Order_By>>;
  where?: InputMaybe<Translation_Comment_Bool_Exp>;
};

export type Query_RootTranslation_Comment_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Translation_Comment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Translation_Comment_Order_By>>;
  where?: InputMaybe<Translation_Comment_Bool_Exp>;
};

export type Query_RootTranslation_Comment_By_PkArgs = {
  id: Scalars['Int'];
};

export type Query_RootUserArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};

export type Query_RootUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};

export type Query_RootUser_By_PkArgs = {
  username: Scalars['String'];
};

export type Query_RootUser_PrivateArgs = {
  distinct_on?: InputMaybe<Array<User_Private_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Private_Order_By>>;
  where?: InputMaybe<User_Private_Bool_Exp>;
};

export type Query_RootUser_Private_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Private_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Private_Order_By>>;
  where?: InputMaybe<User_Private_Bool_Exp>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "EventType" */
  EventType: Array<EventType>;
  /** fetch aggregated fields from the table: "EventType" */
  EventType_aggregate: EventType_Aggregate;
  /** fetch data from the table: "EventType" using primary key columns */
  EventType_by_pk?: Maybe<EventType>;
  /** fetch data from the table: "event" */
  event: Array<Event>;
  /** fetch aggregated fields from the table: "event" */
  event_aggregate: Event_Aggregate;
  /** fetch data from the table: "event" using primary key columns */
  event_by_pk?: Maybe<Event>;
  /** fetch data from the table: "line" */
  line: Array<Line>;
  /** fetch aggregated fields from the table: "line" */
  line_aggregate: Line_Aggregate;
  /** fetch data from the table: "line" using primary key columns */
  line_by_pk?: Maybe<Line>;
  /** fetch data from the table: "locale" */
  locale: Array<Locale>;
  /** fetch aggregated fields from the table: "locale" */
  locale_aggregate: Locale_Aggregate;
  /** fetch data from the table: "locale" using primary key columns */
  locale_by_pk?: Maybe<Locale>;
  /** fetch data from the table: "notification" */
  notification: Array<Notification>;
  /** fetch aggregated fields from the table: "notification" */
  notification_aggregate: Notification_Aggregate;
  /** fetch data from the table: "notification" using primary key columns */
  notification_by_pk?: Maybe<Notification>;
  /** fetch data from the table: "password_reset" */
  password_reset: Array<Password_Reset>;
  /** fetch aggregated fields from the table: "password_reset" */
  password_reset_aggregate: Password_Reset_Aggregate;
  /** fetch data from the table: "password_reset" using primary key columns */
  password_reset_by_pk?: Maybe<Password_Reset>;
  /** fetch data from the table: "project" */
  project: Array<Project>;
  /** fetch aggregated fields from the table: "project" */
  project_aggregate: Project_Aggregate;
  /** fetch data from the table: "project" using primary key columns */
  project_by_pk?: Maybe<Project>;
  /** fetch data from the table: "project_locale" */
  project_locale: Array<Project_Locale>;
  /** fetch aggregated fields from the table: "project_locale" */
  project_locale_aggregate: Project_Locale_Aggregate;
  /** fetch data from the table: "project_locale" using primary key columns */
  project_locale_by_pk?: Maybe<Project_Locale>;
  /** fetch data from the table: "project_user" */
  project_user: Array<Project_User>;
  /** fetch aggregated fields from the table: "project_user" */
  project_user_aggregate: Project_User_Aggregate;
  /** fetch data from the table: "project_user" using primary key columns */
  project_user_by_pk?: Maybe<Project_User>;
  /** fetch data from the table: "translation" */
  translation: Array<Translation>;
  /** fetch aggregated fields from the table: "translation" */
  translation_aggregate: Translation_Aggregate;
  /** fetch data from the table: "translation" using primary key columns */
  translation_by_pk?: Maybe<Translation>;
  /** fetch data from the table: "translation_comment" */
  translation_comment: Array<Translation_Comment>;
  /** fetch aggregated fields from the table: "translation_comment" */
  translation_comment_aggregate: Translation_Comment_Aggregate;
  /** fetch data from the table: "translation_comment" using primary key columns */
  translation_comment_by_pk?: Maybe<Translation_Comment>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
  /** fetch data from the table: "user_private" */
  user_private: Array<User_Private>;
  /** fetch aggregated fields from the table: "user_private" */
  user_private_aggregate: User_Private_Aggregate;
};

export type Subscription_RootEventTypeArgs = {
  distinct_on?: InputMaybe<Array<EventType_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<EventType_Order_By>>;
  where?: InputMaybe<EventType_Bool_Exp>;
};

export type Subscription_RootEventType_AggregateArgs = {
  distinct_on?: InputMaybe<Array<EventType_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<EventType_Order_By>>;
  where?: InputMaybe<EventType_Bool_Exp>;
};

export type Subscription_RootEventType_By_PkArgs = {
  value: Scalars['String'];
};

export type Subscription_RootEventArgs = {
  distinct_on?: InputMaybe<Array<Event_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Event_Order_By>>;
  where?: InputMaybe<Event_Bool_Exp>;
};

export type Subscription_RootEvent_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Event_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Event_Order_By>>;
  where?: InputMaybe<Event_Bool_Exp>;
};

export type Subscription_RootEvent_By_PkArgs = {
  id: Scalars['bigint'];
};

export type Subscription_RootLineArgs = {
  distinct_on?: InputMaybe<Array<Line_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Line_Order_By>>;
  where?: InputMaybe<Line_Bool_Exp>;
};

export type Subscription_RootLine_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Line_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Line_Order_By>>;
  where?: InputMaybe<Line_Bool_Exp>;
};

export type Subscription_RootLine_By_PkArgs = {
  id: Scalars['Int'];
};

export type Subscription_RootLocaleArgs = {
  distinct_on?: InputMaybe<Array<Locale_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Locale_Order_By>>;
  where?: InputMaybe<Locale_Bool_Exp>;
};

export type Subscription_RootLocale_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Locale_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Locale_Order_By>>;
  where?: InputMaybe<Locale_Bool_Exp>;
};

export type Subscription_RootLocale_By_PkArgs = {
  id: Scalars['bigint'];
};

export type Subscription_RootNotificationArgs = {
  distinct_on?: InputMaybe<Array<Notification_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Notification_Order_By>>;
  where?: InputMaybe<Notification_Bool_Exp>;
};

export type Subscription_RootNotification_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Notification_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Notification_Order_By>>;
  where?: InputMaybe<Notification_Bool_Exp>;
};

export type Subscription_RootNotification_By_PkArgs = {
  id: Scalars['bigint'];
};

export type Subscription_RootPassword_ResetArgs = {
  distinct_on?: InputMaybe<Array<Password_Reset_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Password_Reset_Order_By>>;
  where?: InputMaybe<Password_Reset_Bool_Exp>;
};

export type Subscription_RootPassword_Reset_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Password_Reset_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Password_Reset_Order_By>>;
  where?: InputMaybe<Password_Reset_Bool_Exp>;
};

export type Subscription_RootPassword_Reset_By_PkArgs = {
  id: Scalars['bigint'];
};

export type Subscription_RootProjectArgs = {
  distinct_on?: InputMaybe<Array<Project_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Project_Order_By>>;
  where?: InputMaybe<Project_Bool_Exp>;
};

export type Subscription_RootProject_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Project_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Project_Order_By>>;
  where?: InputMaybe<Project_Bool_Exp>;
};

export type Subscription_RootProject_By_PkArgs = {
  id: Scalars['Int'];
};

export type Subscription_RootProject_LocaleArgs = {
  distinct_on?: InputMaybe<Array<Project_Locale_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Project_Locale_Order_By>>;
  where?: InputMaybe<Project_Locale_Bool_Exp>;
};

export type Subscription_RootProject_Locale_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Project_Locale_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Project_Locale_Order_By>>;
  where?: InputMaybe<Project_Locale_Bool_Exp>;
};

export type Subscription_RootProject_Locale_By_PkArgs = {
  id: Scalars['Int'];
};

export type Subscription_RootProject_UserArgs = {
  distinct_on?: InputMaybe<Array<Project_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Project_User_Order_By>>;
  where?: InputMaybe<Project_User_Bool_Exp>;
};

export type Subscription_RootProject_User_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Project_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Project_User_Order_By>>;
  where?: InputMaybe<Project_User_Bool_Exp>;
};

export type Subscription_RootProject_User_By_PkArgs = {
  id: Scalars['Int'];
};

export type Subscription_RootTranslationArgs = {
  distinct_on?: InputMaybe<Array<Translation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Translation_Order_By>>;
  where?: InputMaybe<Translation_Bool_Exp>;
};

export type Subscription_RootTranslation_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Translation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Translation_Order_By>>;
  where?: InputMaybe<Translation_Bool_Exp>;
};

export type Subscription_RootTranslation_By_PkArgs = {
  id: Scalars['bigint'];
};

export type Subscription_RootTranslation_CommentArgs = {
  distinct_on?: InputMaybe<Array<Translation_Comment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Translation_Comment_Order_By>>;
  where?: InputMaybe<Translation_Comment_Bool_Exp>;
};

export type Subscription_RootTranslation_Comment_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Translation_Comment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Translation_Comment_Order_By>>;
  where?: InputMaybe<Translation_Comment_Bool_Exp>;
};

export type Subscription_RootTranslation_Comment_By_PkArgs = {
  id: Scalars['Int'];
};

export type Subscription_RootUserArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};

export type Subscription_RootUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};

export type Subscription_RootUser_By_PkArgs = {
  username: Scalars['String'];
};

export type Subscription_RootUser_PrivateArgs = {
  distinct_on?: InputMaybe<Array<User_Private_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Private_Order_By>>;
  where?: InputMaybe<User_Private_Bool_Exp>;
};

export type Subscription_RootUser_Private_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Private_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Private_Order_By>>;
  where?: InputMaybe<User_Private_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** All of the translations are stored here with a ref to their locale */
export type Translation = {
  __typename?: 'translation';
  created_at: Scalars['timestamptz'];
  id: Scalars['bigint'];
  /** An object relationship */
  line: Line;
  line_id: Scalars['Int'];
  /** An object relationship */
  locale: Locale;
  /** The id of the locale in the locale table */
  locale_id: Scalars['Int'];
  /** An object relationship */
  project: Project;
  /** The ID of the project in the project table */
  project_id: Scalars['Int'];
  /** An array relationship */
  translation_comments: Array<Translation_Comment>;
  /** An aggregate relationship */
  translation_comments_aggregate: Translation_Comment_Aggregate;
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  user: User;
  /** What user translated this line last */
  user_username: Scalars['String'];
  /** The translated string */
  value?: Maybe<Scalars['String']>;
};

/** All of the translations are stored here with a ref to their locale */
export type TranslationTranslation_CommentsArgs = {
  distinct_on?: InputMaybe<Array<Translation_Comment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Translation_Comment_Order_By>>;
  where?: InputMaybe<Translation_Comment_Bool_Exp>;
};

/** All of the translations are stored here with a ref to their locale */
export type TranslationTranslation_Comments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Translation_Comment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Translation_Comment_Order_By>>;
  where?: InputMaybe<Translation_Comment_Bool_Exp>;
};

/** aggregated selection of "translation" */
export type Translation_Aggregate = {
  __typename?: 'translation_aggregate';
  aggregate?: Maybe<Translation_Aggregate_Fields>;
  nodes: Array<Translation>;
};

/** aggregate fields of "translation" */
export type Translation_Aggregate_Fields = {
  __typename?: 'translation_aggregate_fields';
  avg?: Maybe<Translation_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Translation_Max_Fields>;
  min?: Maybe<Translation_Min_Fields>;
  stddev?: Maybe<Translation_Stddev_Fields>;
  stddev_pop?: Maybe<Translation_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Translation_Stddev_Samp_Fields>;
  sum?: Maybe<Translation_Sum_Fields>;
  var_pop?: Maybe<Translation_Var_Pop_Fields>;
  var_samp?: Maybe<Translation_Var_Samp_Fields>;
  variance?: Maybe<Translation_Variance_Fields>;
};

/** aggregate fields of "translation" */
export type Translation_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Translation_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "translation" */
export type Translation_Aggregate_Order_By = {
  avg?: InputMaybe<Translation_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Translation_Max_Order_By>;
  min?: InputMaybe<Translation_Min_Order_By>;
  stddev?: InputMaybe<Translation_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Translation_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Translation_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Translation_Sum_Order_By>;
  var_pop?: InputMaybe<Translation_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Translation_Var_Samp_Order_By>;
  variance?: InputMaybe<Translation_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "translation" */
export type Translation_Arr_Rel_Insert_Input = {
  data: Array<Translation_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Translation_On_Conflict>;
};

/** aggregate avg on columns */
export type Translation_Avg_Fields = {
  __typename?: 'translation_avg_fields';
  id?: Maybe<Scalars['Float']>;
  line_id?: Maybe<Scalars['Float']>;
  /** The id of the locale in the locale table */
  locale_id?: Maybe<Scalars['Float']>;
  /** The ID of the project in the project table */
  project_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "translation" */
export type Translation_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  line_id?: InputMaybe<Order_By>;
  /** The id of the locale in the locale table */
  locale_id?: InputMaybe<Order_By>;
  /** The ID of the project in the project table */
  project_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "translation". All fields are combined with a logical 'AND'. */
export type Translation_Bool_Exp = {
  _and?: InputMaybe<Array<Translation_Bool_Exp>>;
  _not?: InputMaybe<Translation_Bool_Exp>;
  _or?: InputMaybe<Array<Translation_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  line?: InputMaybe<Line_Bool_Exp>;
  line_id?: InputMaybe<Int_Comparison_Exp>;
  locale?: InputMaybe<Locale_Bool_Exp>;
  locale_id?: InputMaybe<Int_Comparison_Exp>;
  project?: InputMaybe<Project_Bool_Exp>;
  project_id?: InputMaybe<Int_Comparison_Exp>;
  translation_comments?: InputMaybe<Translation_Comment_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<User_Bool_Exp>;
  user_username?: InputMaybe<String_Comparison_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** columns and relationships of "translation_comment" */
export type Translation_Comment = {
  __typename?: 'translation_comment';
  comment: Scalars['String'];
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  /** An object relationship */
  translation: Translation;
  translation_id: Scalars['Int'];
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  user: User;
  user_username: Scalars['String'];
};

/** aggregated selection of "translation_comment" */
export type Translation_Comment_Aggregate = {
  __typename?: 'translation_comment_aggregate';
  aggregate?: Maybe<Translation_Comment_Aggregate_Fields>;
  nodes: Array<Translation_Comment>;
};

/** aggregate fields of "translation_comment" */
export type Translation_Comment_Aggregate_Fields = {
  __typename?: 'translation_comment_aggregate_fields';
  avg?: Maybe<Translation_Comment_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Translation_Comment_Max_Fields>;
  min?: Maybe<Translation_Comment_Min_Fields>;
  stddev?: Maybe<Translation_Comment_Stddev_Fields>;
  stddev_pop?: Maybe<Translation_Comment_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Translation_Comment_Stddev_Samp_Fields>;
  sum?: Maybe<Translation_Comment_Sum_Fields>;
  var_pop?: Maybe<Translation_Comment_Var_Pop_Fields>;
  var_samp?: Maybe<Translation_Comment_Var_Samp_Fields>;
  variance?: Maybe<Translation_Comment_Variance_Fields>;
};

/** aggregate fields of "translation_comment" */
export type Translation_Comment_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Translation_Comment_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "translation_comment" */
export type Translation_Comment_Aggregate_Order_By = {
  avg?: InputMaybe<Translation_Comment_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Translation_Comment_Max_Order_By>;
  min?: InputMaybe<Translation_Comment_Min_Order_By>;
  stddev?: InputMaybe<Translation_Comment_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Translation_Comment_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Translation_Comment_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Translation_Comment_Sum_Order_By>;
  var_pop?: InputMaybe<Translation_Comment_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Translation_Comment_Var_Samp_Order_By>;
  variance?: InputMaybe<Translation_Comment_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "translation_comment" */
export type Translation_Comment_Arr_Rel_Insert_Input = {
  data: Array<Translation_Comment_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Translation_Comment_On_Conflict>;
};

/** aggregate avg on columns */
export type Translation_Comment_Avg_Fields = {
  __typename?: 'translation_comment_avg_fields';
  id?: Maybe<Scalars['Float']>;
  translation_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "translation_comment" */
export type Translation_Comment_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  translation_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "translation_comment". All fields are combined with a logical 'AND'. */
export type Translation_Comment_Bool_Exp = {
  _and?: InputMaybe<Array<Translation_Comment_Bool_Exp>>;
  _not?: InputMaybe<Translation_Comment_Bool_Exp>;
  _or?: InputMaybe<Array<Translation_Comment_Bool_Exp>>;
  comment?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  translation?: InputMaybe<Translation_Bool_Exp>;
  translation_id?: InputMaybe<Int_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<User_Bool_Exp>;
  user_username?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "translation_comment" */
export enum Translation_Comment_Constraint {
  /** unique or primary key constraint */
  TranslationCommentPk = 'translation_comment_pk',
}

/** input type for incrementing numeric columns in table "translation_comment" */
export type Translation_Comment_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  translation_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "translation_comment" */
export type Translation_Comment_Insert_Input = {
  comment?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  translation?: InputMaybe<Translation_Obj_Rel_Insert_Input>;
  translation_id?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<User_Obj_Rel_Insert_Input>;
  user_username?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Translation_Comment_Max_Fields = {
  __typename?: 'translation_comment_max_fields';
  comment?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  translation_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_username?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "translation_comment" */
export type Translation_Comment_Max_Order_By = {
  comment?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  translation_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_username?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Translation_Comment_Min_Fields = {
  __typename?: 'translation_comment_min_fields';
  comment?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  translation_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_username?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "translation_comment" */
export type Translation_Comment_Min_Order_By = {
  comment?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  translation_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_username?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "translation_comment" */
export type Translation_Comment_Mutation_Response = {
  __typename?: 'translation_comment_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Translation_Comment>;
};

/** on_conflict condition type for table "translation_comment" */
export type Translation_Comment_On_Conflict = {
  constraint: Translation_Comment_Constraint;
  update_columns?: Array<Translation_Comment_Update_Column>;
  where?: InputMaybe<Translation_Comment_Bool_Exp>;
};

/** Ordering options when selecting data from "translation_comment". */
export type Translation_Comment_Order_By = {
  comment?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  translation?: InputMaybe<Translation_Order_By>;
  translation_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<User_Order_By>;
  user_username?: InputMaybe<Order_By>;
};

/** primary key columns input for table: translation_comment */
export type Translation_Comment_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "translation_comment" */
export enum Translation_Comment_Select_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  TranslationId = 'translation_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserUsername = 'user_username',
}

/** input type for updating data in table "translation_comment" */
export type Translation_Comment_Set_Input = {
  comment?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  translation_id?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_username?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Translation_Comment_Stddev_Fields = {
  __typename?: 'translation_comment_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  translation_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "translation_comment" */
export type Translation_Comment_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  translation_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Translation_Comment_Stddev_Pop_Fields = {
  __typename?: 'translation_comment_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  translation_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "translation_comment" */
export type Translation_Comment_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  translation_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Translation_Comment_Stddev_Samp_Fields = {
  __typename?: 'translation_comment_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  translation_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "translation_comment" */
export type Translation_Comment_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  translation_id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Translation_Comment_Sum_Fields = {
  __typename?: 'translation_comment_sum_fields';
  id?: Maybe<Scalars['Int']>;
  translation_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "translation_comment" */
export type Translation_Comment_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  translation_id?: InputMaybe<Order_By>;
};

/** update columns of table "translation_comment" */
export enum Translation_Comment_Update_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  TranslationId = 'translation_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserUsername = 'user_username',
}

/** aggregate var_pop on columns */
export type Translation_Comment_Var_Pop_Fields = {
  __typename?: 'translation_comment_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  translation_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "translation_comment" */
export type Translation_Comment_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  translation_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Translation_Comment_Var_Samp_Fields = {
  __typename?: 'translation_comment_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  translation_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "translation_comment" */
export type Translation_Comment_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  translation_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Translation_Comment_Variance_Fields = {
  __typename?: 'translation_comment_variance_fields';
  id?: Maybe<Scalars['Float']>;
  translation_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "translation_comment" */
export type Translation_Comment_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  translation_id?: InputMaybe<Order_By>;
};

/** unique or primary key constraints on table "translation" */
export enum Translation_Constraint {
  /** unique or primary key constraint */
  TranslationPkey = 'translation_pkey',
}

/** input type for incrementing numeric columns in table "translation" */
export type Translation_Inc_Input = {
  id?: InputMaybe<Scalars['bigint']>;
  line_id?: InputMaybe<Scalars['Int']>;
  /** The id of the locale in the locale table */
  locale_id?: InputMaybe<Scalars['Int']>;
  /** The ID of the project in the project table */
  project_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "translation" */
export type Translation_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['bigint']>;
  line?: InputMaybe<Line_Obj_Rel_Insert_Input>;
  line_id?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Locale_Obj_Rel_Insert_Input>;
  /** The id of the locale in the locale table */
  locale_id?: InputMaybe<Scalars['Int']>;
  project?: InputMaybe<Project_Obj_Rel_Insert_Input>;
  /** The ID of the project in the project table */
  project_id?: InputMaybe<Scalars['Int']>;
  translation_comments?: InputMaybe<Translation_Comment_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<User_Obj_Rel_Insert_Input>;
  /** What user translated this line last */
  user_username?: InputMaybe<Scalars['String']>;
  /** The translated string */
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Translation_Max_Fields = {
  __typename?: 'translation_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  line_id?: Maybe<Scalars['Int']>;
  /** The id of the locale in the locale table */
  locale_id?: Maybe<Scalars['Int']>;
  /** The ID of the project in the project table */
  project_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  /** What user translated this line last */
  user_username?: Maybe<Scalars['String']>;
  /** The translated string */
  value?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "translation" */
export type Translation_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  line_id?: InputMaybe<Order_By>;
  /** The id of the locale in the locale table */
  locale_id?: InputMaybe<Order_By>;
  /** The ID of the project in the project table */
  project_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  /** What user translated this line last */
  user_username?: InputMaybe<Order_By>;
  /** The translated string */
  value?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Translation_Min_Fields = {
  __typename?: 'translation_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  line_id?: Maybe<Scalars['Int']>;
  /** The id of the locale in the locale table */
  locale_id?: Maybe<Scalars['Int']>;
  /** The ID of the project in the project table */
  project_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  /** What user translated this line last */
  user_username?: Maybe<Scalars['String']>;
  /** The translated string */
  value?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "translation" */
export type Translation_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  line_id?: InputMaybe<Order_By>;
  /** The id of the locale in the locale table */
  locale_id?: InputMaybe<Order_By>;
  /** The ID of the project in the project table */
  project_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  /** What user translated this line last */
  user_username?: InputMaybe<Order_By>;
  /** The translated string */
  value?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "translation" */
export type Translation_Mutation_Response = {
  __typename?: 'translation_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Translation>;
};

/** input type for inserting object relation for remote table "translation" */
export type Translation_Obj_Rel_Insert_Input = {
  data: Translation_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Translation_On_Conflict>;
};

/** on_conflict condition type for table "translation" */
export type Translation_On_Conflict = {
  constraint: Translation_Constraint;
  update_columns?: Array<Translation_Update_Column>;
  where?: InputMaybe<Translation_Bool_Exp>;
};

/** Ordering options when selecting data from "translation". */
export type Translation_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  line?: InputMaybe<Line_Order_By>;
  line_id?: InputMaybe<Order_By>;
  locale?: InputMaybe<Locale_Order_By>;
  locale_id?: InputMaybe<Order_By>;
  project?: InputMaybe<Project_Order_By>;
  project_id?: InputMaybe<Order_By>;
  translation_comments_aggregate?: InputMaybe<Translation_Comment_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<User_Order_By>;
  user_username?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: translation */
export type Translation_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "translation" */
export enum Translation_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  LineId = 'line_id',
  /** column name */
  LocaleId = 'locale_id',
  /** column name */
  ProjectId = 'project_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserUsername = 'user_username',
  /** column name */
  Value = 'value',
}

/** input type for updating data in table "translation" */
export type Translation_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['bigint']>;
  line_id?: InputMaybe<Scalars['Int']>;
  /** The id of the locale in the locale table */
  locale_id?: InputMaybe<Scalars['Int']>;
  /** The ID of the project in the project table */
  project_id?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  /** What user translated this line last */
  user_username?: InputMaybe<Scalars['String']>;
  /** The translated string */
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Translation_Stddev_Fields = {
  __typename?: 'translation_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  line_id?: Maybe<Scalars['Float']>;
  /** The id of the locale in the locale table */
  locale_id?: Maybe<Scalars['Float']>;
  /** The ID of the project in the project table */
  project_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "translation" */
export type Translation_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  line_id?: InputMaybe<Order_By>;
  /** The id of the locale in the locale table */
  locale_id?: InputMaybe<Order_By>;
  /** The ID of the project in the project table */
  project_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Translation_Stddev_Pop_Fields = {
  __typename?: 'translation_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  line_id?: Maybe<Scalars['Float']>;
  /** The id of the locale in the locale table */
  locale_id?: Maybe<Scalars['Float']>;
  /** The ID of the project in the project table */
  project_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "translation" */
export type Translation_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  line_id?: InputMaybe<Order_By>;
  /** The id of the locale in the locale table */
  locale_id?: InputMaybe<Order_By>;
  /** The ID of the project in the project table */
  project_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Translation_Stddev_Samp_Fields = {
  __typename?: 'translation_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  line_id?: Maybe<Scalars['Float']>;
  /** The id of the locale in the locale table */
  locale_id?: Maybe<Scalars['Float']>;
  /** The ID of the project in the project table */
  project_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "translation" */
export type Translation_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  line_id?: InputMaybe<Order_By>;
  /** The id of the locale in the locale table */
  locale_id?: InputMaybe<Order_By>;
  /** The ID of the project in the project table */
  project_id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Translation_Sum_Fields = {
  __typename?: 'translation_sum_fields';
  id?: Maybe<Scalars['bigint']>;
  line_id?: Maybe<Scalars['Int']>;
  /** The id of the locale in the locale table */
  locale_id?: Maybe<Scalars['Int']>;
  /** The ID of the project in the project table */
  project_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "translation" */
export type Translation_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  line_id?: InputMaybe<Order_By>;
  /** The id of the locale in the locale table */
  locale_id?: InputMaybe<Order_By>;
  /** The ID of the project in the project table */
  project_id?: InputMaybe<Order_By>;
};

/** update columns of table "translation" */
export enum Translation_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  LineId = 'line_id',
  /** column name */
  LocaleId = 'locale_id',
  /** column name */
  ProjectId = 'project_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserUsername = 'user_username',
  /** column name */
  Value = 'value',
}

/** aggregate var_pop on columns */
export type Translation_Var_Pop_Fields = {
  __typename?: 'translation_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  line_id?: Maybe<Scalars['Float']>;
  /** The id of the locale in the locale table */
  locale_id?: Maybe<Scalars['Float']>;
  /** The ID of the project in the project table */
  project_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "translation" */
export type Translation_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  line_id?: InputMaybe<Order_By>;
  /** The id of the locale in the locale table */
  locale_id?: InputMaybe<Order_By>;
  /** The ID of the project in the project table */
  project_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Translation_Var_Samp_Fields = {
  __typename?: 'translation_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  line_id?: Maybe<Scalars['Float']>;
  /** The id of the locale in the locale table */
  locale_id?: Maybe<Scalars['Float']>;
  /** The ID of the project in the project table */
  project_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "translation" */
export type Translation_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  line_id?: InputMaybe<Order_By>;
  /** The id of the locale in the locale table */
  locale_id?: InputMaybe<Order_By>;
  /** The ID of the project in the project table */
  project_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Translation_Variance_Fields = {
  __typename?: 'translation_variance_fields';
  id?: Maybe<Scalars['Float']>;
  line_id?: Maybe<Scalars['Float']>;
  /** The id of the locale in the locale table */
  locale_id?: Maybe<Scalars['Float']>;
  /** The ID of the project in the project table */
  project_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "translation" */
export type Translation_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  line_id?: InputMaybe<Order_By>;
  /** The id of the locale in the locale table */
  locale_id?: InputMaybe<Order_By>;
  /** The ID of the project in the project table */
  project_id?: InputMaybe<Order_By>;
};

/** This is the table of all the users of the application along with their data. */
export type User = {
  __typename?: 'user';
  /** Is the user currently active right now in the application. */
  active: Scalars['Boolean'];
  /** The user profile image (Avatar) a link to a graphic (if any) */
  avatar: Scalars['String'];
  /** A cell phone number for the User.  Personnel Data. */
  cell: Scalars['String'];
  /** Current city of User.  Personnel Data. */
  city: Scalars['String'];
  /** Current country of User.   Personnel Data. */
  country: Scalars['String'];
  created_at: Scalars['timestamptz'];
  /** The users email. This must be unique per user */
  email: Scalars['String'];
  /** An array relationship */
  events: Array<Event>;
  /** An aggregate relationship */
  events_aggregate: Event_Aggregate;
  /** First name of the user.  Personnel Data. */
  first_name: Scalars['String'];
  id: Scalars['Int'];
  /** The job title of the user. Personnel Data. */
  job_title: Scalars['String'];
  /** Last name of the User. Personnel Data. */
  last_name: Scalars['String'];
  /** An array relationship */
  notifications: Array<Notification>;
  /** An aggregate relationship */
  notifications_aggregate: Notification_Aggregate;
  /** The user password field. This is encrypted with bcrypt */
  password: Scalars['String'];
  /** An array relationship */
  password_resets: Array<Password_Reset>;
  /** An aggregate relationship */
  password_resets_aggregate: Password_Reset_Aggregate;
  /** An object relationship */
  private_info?: Maybe<User_Private>;
  /** An array relationship */
  project_users: Array<Project_User>;
  /** An aggregate relationship */
  project_users_aggregate: Project_User_Aggregate;
  /** The currently set theme of the user can be one of any set theme */
  theme_name: Scalars['String'];
  /** An array relationship */
  translation_comments: Array<Translation_Comment>;
  /** An aggregate relationship */
  translation_comments_aggregate: Translation_Comment_Aggregate;
  /** An array relationship */
  translations: Array<Translation>;
  /** An aggregate relationship */
  translations_aggregate: Translation_Aggregate;
  updated_at: Scalars['timestamptz'];
  /** The username of the user. Also the primary key. */
  username: Scalars['String'];
};

/** This is the table of all the users of the application along with their data. */
export type UserEventsArgs = {
  distinct_on?: InputMaybe<Array<Event_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Event_Order_By>>;
  where?: InputMaybe<Event_Bool_Exp>;
};

/** This is the table of all the users of the application along with their data. */
export type UserEvents_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Event_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Event_Order_By>>;
  where?: InputMaybe<Event_Bool_Exp>;
};

/** This is the table of all the users of the application along with their data. */
export type UserNotificationsArgs = {
  distinct_on?: InputMaybe<Array<Notification_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Notification_Order_By>>;
  where?: InputMaybe<Notification_Bool_Exp>;
};

/** This is the table of all the users of the application along with their data. */
export type UserNotifications_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Notification_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Notification_Order_By>>;
  where?: InputMaybe<Notification_Bool_Exp>;
};

/** This is the table of all the users of the application along with their data. */
export type UserPassword_ResetsArgs = {
  distinct_on?: InputMaybe<Array<Password_Reset_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Password_Reset_Order_By>>;
  where?: InputMaybe<Password_Reset_Bool_Exp>;
};

/** This is the table of all the users of the application along with their data. */
export type UserPassword_Resets_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Password_Reset_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Password_Reset_Order_By>>;
  where?: InputMaybe<Password_Reset_Bool_Exp>;
};

/** This is the table of all the users of the application along with their data. */
export type UserProject_UsersArgs = {
  distinct_on?: InputMaybe<Array<Project_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Project_User_Order_By>>;
  where?: InputMaybe<Project_User_Bool_Exp>;
};

/** This is the table of all the users of the application along with their data. */
export type UserProject_Users_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Project_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Project_User_Order_By>>;
  where?: InputMaybe<Project_User_Bool_Exp>;
};

/** This is the table of all the users of the application along with their data. */
export type UserTranslation_CommentsArgs = {
  distinct_on?: InputMaybe<Array<Translation_Comment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Translation_Comment_Order_By>>;
  where?: InputMaybe<Translation_Comment_Bool_Exp>;
};

/** This is the table of all the users of the application along with their data. */
export type UserTranslation_Comments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Translation_Comment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Translation_Comment_Order_By>>;
  where?: InputMaybe<Translation_Comment_Bool_Exp>;
};

/** This is the table of all the users of the application along with their data. */
export type UserTranslationsArgs = {
  distinct_on?: InputMaybe<Array<Translation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Translation_Order_By>>;
  where?: InputMaybe<Translation_Bool_Exp>;
};

/** This is the table of all the users of the application along with their data. */
export type UserTranslations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Translation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Translation_Order_By>>;
  where?: InputMaybe<Translation_Bool_Exp>;
};

/** aggregated selection of "user" */
export type User_Aggregate = {
  __typename?: 'user_aggregate';
  aggregate?: Maybe<User_Aggregate_Fields>;
  nodes: Array<User>;
};

/** aggregate fields of "user" */
export type User_Aggregate_Fields = {
  __typename?: 'user_aggregate_fields';
  avg?: Maybe<User_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<User_Max_Fields>;
  min?: Maybe<User_Min_Fields>;
  stddev?: Maybe<User_Stddev_Fields>;
  stddev_pop?: Maybe<User_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Stddev_Samp_Fields>;
  sum?: Maybe<User_Sum_Fields>;
  var_pop?: Maybe<User_Var_Pop_Fields>;
  var_samp?: Maybe<User_Var_Samp_Fields>;
  variance?: Maybe<User_Variance_Fields>;
};

/** aggregate fields of "user" */
export type User_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type User_Avg_Fields = {
  __typename?: 'user_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export type User_Bool_Exp = {
  _and?: InputMaybe<Array<User_Bool_Exp>>;
  _not?: InputMaybe<User_Bool_Exp>;
  _or?: InputMaybe<Array<User_Bool_Exp>>;
  active?: InputMaybe<Boolean_Comparison_Exp>;
  avatar?: InputMaybe<String_Comparison_Exp>;
  cell?: InputMaybe<String_Comparison_Exp>;
  city?: InputMaybe<String_Comparison_Exp>;
  country?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  events?: InputMaybe<Event_Bool_Exp>;
  first_name?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  job_title?: InputMaybe<String_Comparison_Exp>;
  last_name?: InputMaybe<String_Comparison_Exp>;
  notifications?: InputMaybe<Notification_Bool_Exp>;
  password?: InputMaybe<String_Comparison_Exp>;
  password_resets?: InputMaybe<Password_Reset_Bool_Exp>;
  private_info?: InputMaybe<User_Private_Bool_Exp>;
  project_users?: InputMaybe<Project_User_Bool_Exp>;
  theme_name?: InputMaybe<String_Comparison_Exp>;
  translation_comments?: InputMaybe<Translation_Comment_Bool_Exp>;
  translations?: InputMaybe<Translation_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  username?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "user" */
export enum User_Constraint {
  /** unique or primary key constraint */
  UserEmailKey = 'user_email_key',
  /** unique or primary key constraint */
  UserIdKey = 'user_id_key',
  /** unique or primary key constraint */
  UserNameKey = 'user_name_key',
  /** unique or primary key constraint */
  UserPkey = 'user_pkey',
}

/** input type for incrementing numeric columns in table "user" */
export type User_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "user" */
export type User_Insert_Input = {
  /** Is the user currently active right now in the application. */
  active?: InputMaybe<Scalars['Boolean']>;
  /** The user profile image (Avatar) a link to a graphic (if any) */
  avatar?: InputMaybe<Scalars['String']>;
  /** A cell phone number for the User.  Personnel Data. */
  cell?: InputMaybe<Scalars['String']>;
  /** Current city of User.  Personnel Data. */
  city?: InputMaybe<Scalars['String']>;
  /** Current country of User.   Personnel Data. */
  country?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  /** The users email. This must be unique per user */
  email?: InputMaybe<Scalars['String']>;
  events?: InputMaybe<Event_Arr_Rel_Insert_Input>;
  /** First name of the user.  Personnel Data. */
  first_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  /** The job title of the user. Personnel Data. */
  job_title?: InputMaybe<Scalars['String']>;
  /** Last name of the User. Personnel Data. */
  last_name?: InputMaybe<Scalars['String']>;
  notifications?: InputMaybe<Notification_Arr_Rel_Insert_Input>;
  /** The user password field. This is encrypted with bcrypt */
  password?: InputMaybe<Scalars['String']>;
  password_resets?: InputMaybe<Password_Reset_Arr_Rel_Insert_Input>;
  private_info?: InputMaybe<User_Private_Obj_Rel_Insert_Input>;
  project_users?: InputMaybe<Project_User_Arr_Rel_Insert_Input>;
  /** The currently set theme of the user can be one of any set theme */
  theme_name?: InputMaybe<Scalars['String']>;
  translation_comments?: InputMaybe<Translation_Comment_Arr_Rel_Insert_Input>;
  translations?: InputMaybe<Translation_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  /** The username of the user. Also the primary key. */
  username?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type User_Max_Fields = {
  __typename?: 'user_max_fields';
  /** The user profile image (Avatar) a link to a graphic (if any) */
  avatar?: Maybe<Scalars['String']>;
  /** A cell phone number for the User.  Personnel Data. */
  cell?: Maybe<Scalars['String']>;
  /** Current city of User.  Personnel Data. */
  city?: Maybe<Scalars['String']>;
  /** Current country of User.   Personnel Data. */
  country?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  /** The users email. This must be unique per user */
  email?: Maybe<Scalars['String']>;
  /** First name of the user.  Personnel Data. */
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  /** The job title of the user. Personnel Data. */
  job_title?: Maybe<Scalars['String']>;
  /** Last name of the User. Personnel Data. */
  last_name?: Maybe<Scalars['String']>;
  /** The user password field. This is encrypted with bcrypt */
  password?: Maybe<Scalars['String']>;
  /** The currently set theme of the user can be one of any set theme */
  theme_name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  /** The username of the user. Also the primary key. */
  username?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type User_Min_Fields = {
  __typename?: 'user_min_fields';
  /** The user profile image (Avatar) a link to a graphic (if any) */
  avatar?: Maybe<Scalars['String']>;
  /** A cell phone number for the User.  Personnel Data. */
  cell?: Maybe<Scalars['String']>;
  /** Current city of User.  Personnel Data. */
  city?: Maybe<Scalars['String']>;
  /** Current country of User.   Personnel Data. */
  country?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  /** The users email. This must be unique per user */
  email?: Maybe<Scalars['String']>;
  /** First name of the user.  Personnel Data. */
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  /** The job title of the user. Personnel Data. */
  job_title?: Maybe<Scalars['String']>;
  /** Last name of the User. Personnel Data. */
  last_name?: Maybe<Scalars['String']>;
  /** The user password field. This is encrypted with bcrypt */
  password?: Maybe<Scalars['String']>;
  /** The currently set theme of the user can be one of any set theme */
  theme_name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  /** The username of the user. Also the primary key. */
  username?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "user" */
export type User_Mutation_Response = {
  __typename?: 'user_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User>;
};

/** input type for inserting object relation for remote table "user" */
export type User_Obj_Rel_Insert_Input = {
  data: User_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<User_On_Conflict>;
};

/** on_conflict condition type for table "user" */
export type User_On_Conflict = {
  constraint: User_Constraint;
  update_columns?: Array<User_Update_Column>;
  where?: InputMaybe<User_Bool_Exp>;
};

/** Ordering options when selecting data from "user". */
export type User_Order_By = {
  active?: InputMaybe<Order_By>;
  avatar?: InputMaybe<Order_By>;
  cell?: InputMaybe<Order_By>;
  city?: InputMaybe<Order_By>;
  country?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  events_aggregate?: InputMaybe<Event_Aggregate_Order_By>;
  first_name?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  job_title?: InputMaybe<Order_By>;
  last_name?: InputMaybe<Order_By>;
  notifications_aggregate?: InputMaybe<Notification_Aggregate_Order_By>;
  password?: InputMaybe<Order_By>;
  password_resets_aggregate?: InputMaybe<Password_Reset_Aggregate_Order_By>;
  private_info?: InputMaybe<User_Private_Order_By>;
  project_users_aggregate?: InputMaybe<Project_User_Aggregate_Order_By>;
  theme_name?: InputMaybe<Order_By>;
  translation_comments_aggregate?: InputMaybe<Translation_Comment_Aggregate_Order_By>;
  translations_aggregate?: InputMaybe<Translation_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
  username?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user */
export type User_Pk_Columns_Input = {
  /** The username of the user. Also the primary key. */
  username: Scalars['String'];
};

/** columns and relationships of "user_private" */
export type User_Private = {
  __typename?: 'user_private';
  password?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

/** aggregated selection of "user_private" */
export type User_Private_Aggregate = {
  __typename?: 'user_private_aggregate';
  aggregate?: Maybe<User_Private_Aggregate_Fields>;
  nodes: Array<User_Private>;
};

/** aggregate fields of "user_private" */
export type User_Private_Aggregate_Fields = {
  __typename?: 'user_private_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<User_Private_Max_Fields>;
  min?: Maybe<User_Private_Min_Fields>;
};

/** aggregate fields of "user_private" */
export type User_Private_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Private_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "user_private". All fields are combined with a logical 'AND'. */
export type User_Private_Bool_Exp = {
  _and?: InputMaybe<Array<User_Private_Bool_Exp>>;
  _not?: InputMaybe<User_Private_Bool_Exp>;
  _or?: InputMaybe<Array<User_Private_Bool_Exp>>;
  password?: InputMaybe<String_Comparison_Exp>;
  username?: InputMaybe<String_Comparison_Exp>;
};

/** input type for inserting data into table "user_private" */
export type User_Private_Insert_Input = {
  password?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type User_Private_Max_Fields = {
  __typename?: 'user_private_max_fields';
  password?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type User_Private_Min_Fields = {
  __typename?: 'user_private_min_fields';
  password?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "user_private" */
export type User_Private_Mutation_Response = {
  __typename?: 'user_private_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Private>;
};

/** input type for inserting object relation for remote table "user_private" */
export type User_Private_Obj_Rel_Insert_Input = {
  data: User_Private_Insert_Input;
};

/** Ordering options when selecting data from "user_private". */
export type User_Private_Order_By = {
  password?: InputMaybe<Order_By>;
  username?: InputMaybe<Order_By>;
};

/** select columns of table "user_private" */
export enum User_Private_Select_Column {
  /** column name */
  Password = 'password',
  /** column name */
  Username = 'username',
}

/** input type for updating data in table "user_private" */
export type User_Private_Set_Input = {
  password?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

/** select columns of table "user" */
export enum User_Select_Column {
  /** column name */
  Active = 'active',
  /** column name */
  Avatar = 'avatar',
  /** column name */
  Cell = 'cell',
  /** column name */
  City = 'city',
  /** column name */
  Country = 'country',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  JobTitle = 'job_title',
  /** column name */
  LastName = 'last_name',
  /** column name */
  Password = 'password',
  /** column name */
  ThemeName = 'theme_name',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Username = 'username',
}

/** input type for updating data in table "user" */
export type User_Set_Input = {
  /** Is the user currently active right now in the application. */
  active?: InputMaybe<Scalars['Boolean']>;
  /** The user profile image (Avatar) a link to a graphic (if any) */
  avatar?: InputMaybe<Scalars['String']>;
  /** A cell phone number for the User.  Personnel Data. */
  cell?: InputMaybe<Scalars['String']>;
  /** Current city of User.  Personnel Data. */
  city?: InputMaybe<Scalars['String']>;
  /** Current country of User.   Personnel Data. */
  country?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  /** The users email. This must be unique per user */
  email?: InputMaybe<Scalars['String']>;
  /** First name of the user.  Personnel Data. */
  first_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  /** The job title of the user. Personnel Data. */
  job_title?: InputMaybe<Scalars['String']>;
  /** Last name of the User. Personnel Data. */
  last_name?: InputMaybe<Scalars['String']>;
  /** The user password field. This is encrypted with bcrypt */
  password?: InputMaybe<Scalars['String']>;
  /** The currently set theme of the user can be one of any set theme */
  theme_name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  /** The username of the user. Also the primary key. */
  username?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type User_Stddev_Fields = {
  __typename?: 'user_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type User_Stddev_Pop_Fields = {
  __typename?: 'user_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type User_Stddev_Samp_Fields = {
  __typename?: 'user_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type User_Sum_Fields = {
  __typename?: 'user_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "user" */
export enum User_Update_Column {
  /** column name */
  Active = 'active',
  /** column name */
  Avatar = 'avatar',
  /** column name */
  Cell = 'cell',
  /** column name */
  City = 'city',
  /** column name */
  Country = 'country',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  JobTitle = 'job_title',
  /** column name */
  LastName = 'last_name',
  /** column name */
  Password = 'password',
  /** column name */
  ThemeName = 'theme_name',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Username = 'username',
}

/** aggregate var_pop on columns */
export type User_Var_Pop_Fields = {
  __typename?: 'user_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type User_Var_Samp_Fields = {
  __typename?: 'user_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type User_Variance_Fields = {
  __typename?: 'user_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

export type PersonnelDataFragment = {
  __typename?: 'user';
  cell: string;
  city: string;
  country: string;
  first_name: string;
  job_title: string;
  last_name: string;
};

export type InsertEventMutationVariables = Exact<{
  event_type?: InputMaybe<EventType_Enum>;
  meta?: InputMaybe<Scalars['jsonb']>;
  summary?: InputMaybe<Scalars['String']>;
  user_username?: InputMaybe<Scalars['String']>;
  entity_id?: InputMaybe<Scalars['Int']>;
}>;

export type InsertEventMutation = {
  __typename?: 'mutation_root';
  insert_event_one?: { __typename?: 'event'; id: any; created_at: any } | null;
};

export type InsertPasswordResetTokenMutationVariables = Exact<{
  token?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
}>;

export type InsertPasswordResetTokenMutation = {
  __typename?: 'mutation_root';
  insert_password_reset_one?: {
    __typename?: 'password_reset';
    token: string;
    valid_till: any;
    created_at: any;
    id: any;
  } | null;
};

export type DeleteOldPasswordTokensMutationVariables = Exact<{
  _lt1?: InputMaybe<Scalars['timestamptz']>;
}>;

export type DeleteOldPasswordTokensMutation = {
  __typename?: 'mutation_root';
  delete_password_reset?: {
    __typename?: 'password_reset_mutation_response';
    affected_rows: number;
  } | null;
};

export type UpdateUserThemeMutationVariables = Exact<{
  username?: InputMaybe<Scalars['String']>;
  theme_name?: InputMaybe<Scalars['String']>;
}>;

export type UpdateUserThemeMutation = {
  __typename?: 'mutation_root';
  update_user?: {
    __typename?: 'user_mutation_response';
    returning: Array<{ __typename?: 'user'; theme_name: string }>;
  } | null;
};

export type RegisterUserMutationVariables = Exact<{
  user?: InputMaybe<User_Insert_Input>;
}>;

export type RegisterUserMutation = {
  __typename?: 'mutation_root';
  insert_user_one?: {
    __typename?: 'user';
    username: string;
    avatar: string;
    active: boolean;
  } | null;
};

export type UpdateUserPasswordMutationVariables = Exact<{
  username?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
}>;

export type UpdateUserPasswordMutation = {
  __typename?: 'mutation_root';
  update_user_by_pk?: { __typename?: 'user'; updated_at: any } | null;
};

export type UpdateUserActiveMutationVariables = Exact<{
  username?: InputMaybe<Scalars['String']>;
  active?: InputMaybe<Scalars['Boolean']>;
}>;

export type UpdateUserActiveMutation = {
  __typename?: 'mutation_root';
  update_user_by_pk?: { __typename?: 'user'; active: boolean } | null;
};

export type LocaleNameByLocaleCodeQueryVariables = Exact<{
  localeCode?: InputMaybe<Scalars['String']>;
}>;

export type LocaleNameByLocaleCodeQuery = {
  __typename?: 'query_root';
  locale: Array<{ __typename?: 'locale'; name: string }>;
};

export type AllLocalesListQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
}>;

export type AllLocalesListQuery = {
  __typename?: 'query_root';
  locale: Array<{ __typename?: 'locale'; name: string; locale: string }>;
};

export type DoesTokenExistQueryVariables = Exact<{
  token?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
}>;

export type DoesTokenExistQuery = {
  __typename?: 'query_root';
  password_reset: Array<{
    __typename?: 'password_reset';
    valid_till: any;
    user: { __typename?: 'user'; email: string; username: string };
  }>;
};

export type AllProjectsListQueryVariables = Exact<{
  order_by?: InputMaybe<Array<Project_Order_By> | Project_Order_By>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  name_regex?: InputMaybe<Scalars['String']>;
}>;

export type AllProjectsListQuery = {
  __typename?: 'query_root';
  project: Array<{
    __typename?: 'project';
    id: number;
    name: string;
    description: string;
    created_at: any;
    slug: string;
    lines_aggregate: {
      __typename?: 'line_aggregate';
      aggregate?: {
        __typename?: 'line_aggregate_fields';
        count: number;
      } | null;
    };
    translations_aggregate: {
      __typename?: 'translation_aggregate';
      aggregate?: {
        __typename?: 'translation_aggregate_fields';
        count: number;
      } | null;
    };
  }>;
};

export type ProjectBySlugQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']>;
}>;

export type ProjectBySlugQuery = {
  __typename?: 'query_root';
  project: Array<{
    __typename?: 'project';
    created_at: any;
    description: string;
    id: number;
    name: string;
  }>;
};

export type TranslationsByProjectIdAndLocaleQueryVariables = Exact<{
  project_id?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
}>;

export type TranslationsByProjectIdAndLocaleQuery = {
  __typename?: 'query_root';
  translation: Array<{
    __typename?: 'translation';
    value?: string | null;
    id: any;
    line: { __typename?: 'line'; key: string };
  }>;
};

export type GetUserSessionDataQueryVariables = Exact<{
  username?: InputMaybe<Scalars['String']>;
}>;

export type GetUserSessionDataQuery = {
  __typename?: 'query_root';
  user?: {
    __typename?: 'user';
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    theme_name: string;
    username: string;
    avatar: string;
  } | null;
};

export type GetUserSettingsQueryVariables = Exact<{
  username?: InputMaybe<Scalars['String']>;
}>;

export type GetUserSettingsQuery = {
  __typename?: 'query_root';
  user?: {
    __typename?: 'user';
    active: boolean;
    avatar: string;
    email: string;
    theme_name: string;
    username: string;
  } | null;
};

export type GetUserThemeQueryVariables = Exact<{
  username?: InputMaybe<Scalars['String']>;
}>;

export type GetUserThemeQuery = {
  __typename?: 'query_root';
  user?: { __typename?: 'user'; theme_name: string } | null;
};

export type GetUserDataAllQueryVariables = Exact<{
  username?: InputMaybe<Scalars['String']>;
}>;

export type GetUserDataAllQuery = {
  __typename?: 'query_root';
  user?: {
    __typename?: 'user';
    theme_name: string;
    active: boolean;
    username: string;
    created_at: any;
    updated_at: any;
    avatar: string;
    email: string;
    cell: string;
    city: string;
    country: string;
    first_name: string;
    job_title: string;
    last_name: string;
  } | null;
};

export type DoesUserExistQueryVariables = Exact<{
  username?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
}>;

export type DoesUserExistQuery = {
  __typename?: 'query_root';
  user: Array<{ __typename?: 'user'; username: string; email: string }>;
};

export type GetUserPasswordQueryVariables = Exact<{
  username?: InputMaybe<Scalars['String']>;
}>;

export type GetUserPasswordQuery = {
  __typename?: 'query_root';
  user?: {
    __typename?: 'user';
    username: string;
    email: string;
    password: string;
  } | null;
};

export type EventsByUserUsernameSubscriptionVariables = Exact<{
  user_username?: InputMaybe<Scalars['String']>;
}>;

export type EventsByUserUsernameSubscription = {
  __typename?: 'subscription_root';
  event: Array<{
    __typename?: 'event';
    meta?: any | null;
    event_type: EventType_Enum;
    created_at: any;
    summary: string;
    id: any;
  }>;
};

export const PersonnelDataFragmentDoc = gql`
  fragment PersonnelData on user {
    cell
    city
    country
    first_name
    job_title
    last_name
  }
`;
export const InsertEventDocument = gql`
  mutation InsertEvent(
    $event_type: EventType_enum = ENTITY_CLASS_CREATE
    $meta: jsonb = ""
    $summary: String = ""
    $user_username: String = ""
    $entity_id: Int = -1
  ) {
    insert_event_one(
      object: {
        event_type: $event_type
        meta: $meta
        summary: $summary
        user_username: $user_username
        entity_id: $entity_id
      }
    ) {
      id
      created_at
    }
  }
`;
export type InsertEventMutationFn = Apollo.MutationFunction<
  InsertEventMutation,
  InsertEventMutationVariables
>;

/**
 * __useInsertEventMutation__
 *
 * To run a mutation, you first call `useInsertEventMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertEventMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertEventMutation, { data, loading, error }] = useInsertEventMutation({
 *   variables: {
 *      event_type: // value for 'event_type'
 *      meta: // value for 'meta'
 *      summary: // value for 'summary'
 *      user_username: // value for 'user_username'
 *      entity_id: // value for 'entity_id'
 *   },
 * });
 */
export function useInsertEventMutation(
  baseOptions?: Apollo.MutationHookOptions<
    InsertEventMutation,
    InsertEventMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<InsertEventMutation, InsertEventMutationVariables>(
    InsertEventDocument,
    options,
  );
}
export type InsertEventMutationHookResult = ReturnType<
  typeof useInsertEventMutation
>;
export type InsertEventMutationResult =
  Apollo.MutationResult<InsertEventMutation>;
export type InsertEventMutationOptions = Apollo.BaseMutationOptions<
  InsertEventMutation,
  InsertEventMutationVariables
>;
export const InsertPasswordResetTokenDocument = gql`
  mutation InsertPasswordResetToken(
    $token: String = ""
    $username: String = ""
  ) {
    insert_password_reset_one(
      object: { token: $token, user_username: $username }
    ) {
      token
      valid_till
      created_at
      id
    }
  }
`;
export type InsertPasswordResetTokenMutationFn = Apollo.MutationFunction<
  InsertPasswordResetTokenMutation,
  InsertPasswordResetTokenMutationVariables
>;

/**
 * __useInsertPasswordResetTokenMutation__
 *
 * To run a mutation, you first call `useInsertPasswordResetTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertPasswordResetTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertPasswordResetTokenMutation, { data, loading, error }] = useInsertPasswordResetTokenMutation({
 *   variables: {
 *      token: // value for 'token'
 *      username: // value for 'username'
 *   },
 * });
 */
export function useInsertPasswordResetTokenMutation(
  baseOptions?: Apollo.MutationHookOptions<
    InsertPasswordResetTokenMutation,
    InsertPasswordResetTokenMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    InsertPasswordResetTokenMutation,
    InsertPasswordResetTokenMutationVariables
  >(InsertPasswordResetTokenDocument, options);
}
export type InsertPasswordResetTokenMutationHookResult = ReturnType<
  typeof useInsertPasswordResetTokenMutation
>;
export type InsertPasswordResetTokenMutationResult =
  Apollo.MutationResult<InsertPasswordResetTokenMutation>;
export type InsertPasswordResetTokenMutationOptions =
  Apollo.BaseMutationOptions<
    InsertPasswordResetTokenMutation,
    InsertPasswordResetTokenMutationVariables
  >;
export const DeleteOldPasswordTokensDocument = gql`
  mutation DeleteOldPasswordTokens($_lt1: timestamptz = "") {
    delete_password_reset(where: { created_at: { _lt: $_lt1 } }) {
      affected_rows
    }
  }
`;
export type DeleteOldPasswordTokensMutationFn = Apollo.MutationFunction<
  DeleteOldPasswordTokensMutation,
  DeleteOldPasswordTokensMutationVariables
>;

/**
 * __useDeleteOldPasswordTokensMutation__
 *
 * To run a mutation, you first call `useDeleteOldPasswordTokensMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOldPasswordTokensMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOldPasswordTokensMutation, { data, loading, error }] = useDeleteOldPasswordTokensMutation({
 *   variables: {
 *      _lt1: // value for '_lt1'
 *   },
 * });
 */
export function useDeleteOldPasswordTokensMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteOldPasswordTokensMutation,
    DeleteOldPasswordTokensMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    DeleteOldPasswordTokensMutation,
    DeleteOldPasswordTokensMutationVariables
  >(DeleteOldPasswordTokensDocument, options);
}
export type DeleteOldPasswordTokensMutationHookResult = ReturnType<
  typeof useDeleteOldPasswordTokensMutation
>;
export type DeleteOldPasswordTokensMutationResult =
  Apollo.MutationResult<DeleteOldPasswordTokensMutation>;
export type DeleteOldPasswordTokensMutationOptions = Apollo.BaseMutationOptions<
  DeleteOldPasswordTokensMutation,
  DeleteOldPasswordTokensMutationVariables
>;
export const UpdateUserThemeDocument = gql`
  mutation UpdateUserTheme($username: String = "", $theme_name: String = "") {
    update_user(
      where: { username: { _eq: $username } }
      _set: { theme_name: $theme_name }
    ) {
      returning {
        theme_name
      }
    }
  }
`;
export type UpdateUserThemeMutationFn = Apollo.MutationFunction<
  UpdateUserThemeMutation,
  UpdateUserThemeMutationVariables
>;

/**
 * __useUpdateUserThemeMutation__
 *
 * To run a mutation, you first call `useUpdateUserThemeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserThemeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserThemeMutation, { data, loading, error }] = useUpdateUserThemeMutation({
 *   variables: {
 *      username: // value for 'username'
 *      theme_name: // value for 'theme_name'
 *   },
 * });
 */
export function useUpdateUserThemeMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateUserThemeMutation,
    UpdateUserThemeMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateUserThemeMutation,
    UpdateUserThemeMutationVariables
  >(UpdateUserThemeDocument, options);
}
export type UpdateUserThemeMutationHookResult = ReturnType<
  typeof useUpdateUserThemeMutation
>;
export type UpdateUserThemeMutationResult =
  Apollo.MutationResult<UpdateUserThemeMutation>;
export type UpdateUserThemeMutationOptions = Apollo.BaseMutationOptions<
  UpdateUserThemeMutation,
  UpdateUserThemeMutationVariables
>;
export const RegisterUserDocument = gql`
  mutation RegisterUser($user: user_insert_input = {}) {
    insert_user_one(object: $user) {
      username
      avatar
      active
    }
  }
`;
export type RegisterUserMutationFn = Apollo.MutationFunction<
  RegisterUserMutation,
  RegisterUserMutationVariables
>;

/**
 * __useRegisterUserMutation__
 *
 * To run a mutation, you first call `useRegisterUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerUserMutation, { data, loading, error }] = useRegisterUserMutation({
 *   variables: {
 *      user: // value for 'user'
 *   },
 * });
 */
export function useRegisterUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RegisterUserMutation,
    RegisterUserMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    RegisterUserMutation,
    RegisterUserMutationVariables
  >(RegisterUserDocument, options);
}
export type RegisterUserMutationHookResult = ReturnType<
  typeof useRegisterUserMutation
>;
export type RegisterUserMutationResult =
  Apollo.MutationResult<RegisterUserMutation>;
export type RegisterUserMutationOptions = Apollo.BaseMutationOptions<
  RegisterUserMutation,
  RegisterUserMutationVariables
>;
export const UpdateUserPasswordDocument = gql`
  mutation UpdateUserPassword($username: String = "", $password: String = "") {
    update_user_by_pk(
      pk_columns: { username: $username }
      _set: { password: $password }
    ) {
      updated_at
    }
  }
`;
export type UpdateUserPasswordMutationFn = Apollo.MutationFunction<
  UpdateUserPasswordMutation,
  UpdateUserPasswordMutationVariables
>;

/**
 * __useUpdateUserPasswordMutation__
 *
 * To run a mutation, you first call `useUpdateUserPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserPasswordMutation, { data, loading, error }] = useUpdateUserPasswordMutation({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useUpdateUserPasswordMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateUserPasswordMutation,
    UpdateUserPasswordMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateUserPasswordMutation,
    UpdateUserPasswordMutationVariables
  >(UpdateUserPasswordDocument, options);
}
export type UpdateUserPasswordMutationHookResult = ReturnType<
  typeof useUpdateUserPasswordMutation
>;
export type UpdateUserPasswordMutationResult =
  Apollo.MutationResult<UpdateUserPasswordMutation>;
export type UpdateUserPasswordMutationOptions = Apollo.BaseMutationOptions<
  UpdateUserPasswordMutation,
  UpdateUserPasswordMutationVariables
>;
export const UpdateUserActiveDocument = gql`
  mutation UpdateUserActive($username: String = "", $active: Boolean = false) {
    update_user_by_pk(
      pk_columns: { username: $username }
      _set: { active: $active }
    ) {
      active
    }
  }
`;
export type UpdateUserActiveMutationFn = Apollo.MutationFunction<
  UpdateUserActiveMutation,
  UpdateUserActiveMutationVariables
>;

/**
 * __useUpdateUserActiveMutation__
 *
 * To run a mutation, you first call `useUpdateUserActiveMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserActiveMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserActiveMutation, { data, loading, error }] = useUpdateUserActiveMutation({
 *   variables: {
 *      username: // value for 'username'
 *      active: // value for 'active'
 *   },
 * });
 */
export function useUpdateUserActiveMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateUserActiveMutation,
    UpdateUserActiveMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateUserActiveMutation,
    UpdateUserActiveMutationVariables
  >(UpdateUserActiveDocument, options);
}
export type UpdateUserActiveMutationHookResult = ReturnType<
  typeof useUpdateUserActiveMutation
>;
export type UpdateUserActiveMutationResult =
  Apollo.MutationResult<UpdateUserActiveMutation>;
export type UpdateUserActiveMutationOptions = Apollo.BaseMutationOptions<
  UpdateUserActiveMutation,
  UpdateUserActiveMutationVariables
>;
export const LocaleNameByLocaleCodeDocument = gql`
  query LocaleNameByLocaleCode($localeCode: String = "") {
    locale(where: { locale: { _eq: $localeCode } }) {
      name
    }
  }
`;

/**
 * __useLocaleNameByLocaleCodeQuery__
 *
 * To run a query within a React component, call `useLocaleNameByLocaleCodeQuery` and pass it any options that fit your needs.
 * When your component renders, `useLocaleNameByLocaleCodeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLocaleNameByLocaleCodeQuery({
 *   variables: {
 *      localeCode: // value for 'localeCode'
 *   },
 * });
 */
export function useLocaleNameByLocaleCodeQuery(
  baseOptions?: Apollo.QueryHookOptions<
    LocaleNameByLocaleCodeQuery,
    LocaleNameByLocaleCodeQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    LocaleNameByLocaleCodeQuery,
    LocaleNameByLocaleCodeQueryVariables
  >(LocaleNameByLocaleCodeDocument, options);
}
export function useLocaleNameByLocaleCodeLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    LocaleNameByLocaleCodeQuery,
    LocaleNameByLocaleCodeQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    LocaleNameByLocaleCodeQuery,
    LocaleNameByLocaleCodeQueryVariables
  >(LocaleNameByLocaleCodeDocument, options);
}
export type LocaleNameByLocaleCodeQueryHookResult = ReturnType<
  typeof useLocaleNameByLocaleCodeQuery
>;
export type LocaleNameByLocaleCodeLazyQueryHookResult = ReturnType<
  typeof useLocaleNameByLocaleCodeLazyQuery
>;
export type LocaleNameByLocaleCodeQueryResult = Apollo.QueryResult<
  LocaleNameByLocaleCodeQuery,
  LocaleNameByLocaleCodeQueryVariables
>;
export const AllLocalesListDocument = gql`
  query AllLocalesList($limit: Int = 50) {
    locale(limit: $limit) {
      name
      locale
    }
  }
`;

/**
 * __useAllLocalesListQuery__
 *
 * To run a query within a React component, call `useAllLocalesListQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllLocalesListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllLocalesListQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useAllLocalesListQuery(
  baseOptions?: Apollo.QueryHookOptions<
    AllLocalesListQuery,
    AllLocalesListQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<AllLocalesListQuery, AllLocalesListQueryVariables>(
    AllLocalesListDocument,
    options,
  );
}
export function useAllLocalesListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    AllLocalesListQuery,
    AllLocalesListQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<AllLocalesListQuery, AllLocalesListQueryVariables>(
    AllLocalesListDocument,
    options,
  );
}
export type AllLocalesListQueryHookResult = ReturnType<
  typeof useAllLocalesListQuery
>;
export type AllLocalesListLazyQueryHookResult = ReturnType<
  typeof useAllLocalesListLazyQuery
>;
export type AllLocalesListQueryResult = Apollo.QueryResult<
  AllLocalesListQuery,
  AllLocalesListQueryVariables
>;
export const DoesTokenExistDocument = gql`
  query DoesTokenExist($token: String = "", $username: String = "") {
    password_reset(
      where: { token: { _eq: $token }, user: { username: { _eq: $username } } }
    ) {
      user {
        email
        username
      }
      valid_till
    }
  }
`;

/**
 * __useDoesTokenExistQuery__
 *
 * To run a query within a React component, call `useDoesTokenExistQuery` and pass it any options that fit your needs.
 * When your component renders, `useDoesTokenExistQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDoesTokenExistQuery({
 *   variables: {
 *      token: // value for 'token'
 *      username: // value for 'username'
 *   },
 * });
 */
export function useDoesTokenExistQuery(
  baseOptions?: Apollo.QueryHookOptions<
    DoesTokenExistQuery,
    DoesTokenExistQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<DoesTokenExistQuery, DoesTokenExistQueryVariables>(
    DoesTokenExistDocument,
    options,
  );
}
export function useDoesTokenExistLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    DoesTokenExistQuery,
    DoesTokenExistQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<DoesTokenExistQuery, DoesTokenExistQueryVariables>(
    DoesTokenExistDocument,
    options,
  );
}
export type DoesTokenExistQueryHookResult = ReturnType<
  typeof useDoesTokenExistQuery
>;
export type DoesTokenExistLazyQueryHookResult = ReturnType<
  typeof useDoesTokenExistLazyQuery
>;
export type DoesTokenExistQueryResult = Apollo.QueryResult<
  DoesTokenExistQuery,
  DoesTokenExistQueryVariables
>;
export const AllProjectsListDocument = gql`
  query AllProjectsList(
    $order_by: [project_order_by!] = { name: asc }
    $limit: Int = 10
    $offset: Int = 0
    $name_regex: String = ".*"
  ) {
    project(
      order_by: $order_by
      limit: $limit
      offset: $offset
      where: { name: { _iregex: $name_regex } }
    ) {
      id
      name
      description
      created_at
      slug
      lines_aggregate {
        aggregate {
          count
        }
      }
      translations_aggregate {
        aggregate {
          count
        }
      }
    }
  }
`;

/**
 * __useAllProjectsListQuery__
 *
 * To run a query within a React component, call `useAllProjectsListQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllProjectsListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllProjectsListQuery({
 *   variables: {
 *      order_by: // value for 'order_by'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      name_regex: // value for 'name_regex'
 *   },
 * });
 */
export function useAllProjectsListQuery(
  baseOptions?: Apollo.QueryHookOptions<
    AllProjectsListQuery,
    AllProjectsListQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<AllProjectsListQuery, AllProjectsListQueryVariables>(
    AllProjectsListDocument,
    options,
  );
}
export function useAllProjectsListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    AllProjectsListQuery,
    AllProjectsListQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    AllProjectsListQuery,
    AllProjectsListQueryVariables
  >(AllProjectsListDocument, options);
}
export type AllProjectsListQueryHookResult = ReturnType<
  typeof useAllProjectsListQuery
>;
export type AllProjectsListLazyQueryHookResult = ReturnType<
  typeof useAllProjectsListLazyQuery
>;
export type AllProjectsListQueryResult = Apollo.QueryResult<
  AllProjectsListQuery,
  AllProjectsListQueryVariables
>;
export const ProjectBySlugDocument = gql`
  query ProjectBySlug($slug: String = "") {
    project(where: { slug: { _eq: $slug } }) {
      created_at
      description
      id
      name
    }
  }
`;

/**
 * __useProjectBySlugQuery__
 *
 * To run a query within a React component, call `useProjectBySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useProjectBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProjectBySlugQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useProjectBySlugQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ProjectBySlugQuery,
    ProjectBySlugQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ProjectBySlugQuery, ProjectBySlugQueryVariables>(
    ProjectBySlugDocument,
    options,
  );
}
export function useProjectBySlugLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ProjectBySlugQuery,
    ProjectBySlugQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<ProjectBySlugQuery, ProjectBySlugQueryVariables>(
    ProjectBySlugDocument,
    options,
  );
}
export type ProjectBySlugQueryHookResult = ReturnType<
  typeof useProjectBySlugQuery
>;
export type ProjectBySlugLazyQueryHookResult = ReturnType<
  typeof useProjectBySlugLazyQuery
>;
export type ProjectBySlugQueryResult = Apollo.QueryResult<
  ProjectBySlugQuery,
  ProjectBySlugQueryVariables
>;
export const TranslationsByProjectIdAndLocaleDocument = gql`
  query TranslationsByProjectIDAndLocale(
    $project_id: Int = -1
    $locale: String = "en_US"
  ) {
    translation(
      where: {
        project_id: { _eq: $project_id }
        locale: { locale: { _eq: $locale } }
      }
    ) {
      line {
        key
      }
      value
      id
    }
  }
`;

/**
 * __useTranslationsByProjectIdAndLocaleQuery__
 *
 * To run a query within a React component, call `useTranslationsByProjectIdAndLocaleQuery` and pass it any options that fit your needs.
 * When your component renders, `useTranslationsByProjectIdAndLocaleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTranslationsByProjectIdAndLocaleQuery({
 *   variables: {
 *      project_id: // value for 'project_id'
 *      locale: // value for 'locale'
 *   },
 * });
 */
export function useTranslationsByProjectIdAndLocaleQuery(
  baseOptions?: Apollo.QueryHookOptions<
    TranslationsByProjectIdAndLocaleQuery,
    TranslationsByProjectIdAndLocaleQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    TranslationsByProjectIdAndLocaleQuery,
    TranslationsByProjectIdAndLocaleQueryVariables
  >(TranslationsByProjectIdAndLocaleDocument, options);
}
export function useTranslationsByProjectIdAndLocaleLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    TranslationsByProjectIdAndLocaleQuery,
    TranslationsByProjectIdAndLocaleQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    TranslationsByProjectIdAndLocaleQuery,
    TranslationsByProjectIdAndLocaleQueryVariables
  >(TranslationsByProjectIdAndLocaleDocument, options);
}
export type TranslationsByProjectIdAndLocaleQueryHookResult = ReturnType<
  typeof useTranslationsByProjectIdAndLocaleQuery
>;
export type TranslationsByProjectIdAndLocaleLazyQueryHookResult = ReturnType<
  typeof useTranslationsByProjectIdAndLocaleLazyQuery
>;
export type TranslationsByProjectIdAndLocaleQueryResult = Apollo.QueryResult<
  TranslationsByProjectIdAndLocaleQuery,
  TranslationsByProjectIdAndLocaleQueryVariables
>;
export const GetUserSessionDataDocument = gql`
  query GetUserSessionData($username: String = "") {
    user: user_by_pk(username: $username) {
      id
      first_name
      last_name
      email
      theme_name
      username
      avatar
    }
  }
`;

/**
 * __useGetUserSessionDataQuery__
 *
 * To run a query within a React component, call `useGetUserSessionDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserSessionDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserSessionDataQuery({
 *   variables: {
 *      username: // value for 'username'
 *   },
 * });
 */
export function useGetUserSessionDataQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetUserSessionDataQuery,
    GetUserSessionDataQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetUserSessionDataQuery,
    GetUserSessionDataQueryVariables
  >(GetUserSessionDataDocument, options);
}
export function useGetUserSessionDataLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetUserSessionDataQuery,
    GetUserSessionDataQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetUserSessionDataQuery,
    GetUserSessionDataQueryVariables
  >(GetUserSessionDataDocument, options);
}
export type GetUserSessionDataQueryHookResult = ReturnType<
  typeof useGetUserSessionDataQuery
>;
export type GetUserSessionDataLazyQueryHookResult = ReturnType<
  typeof useGetUserSessionDataLazyQuery
>;
export type GetUserSessionDataQueryResult = Apollo.QueryResult<
  GetUserSessionDataQuery,
  GetUserSessionDataQueryVariables
>;
export const GetUserSettingsDocument = gql`
  query GetUserSettings($username: String = "") {
    user: user_by_pk(username: $username) {
      active
      avatar
      email
      theme_name
      username
    }
  }
`;

/**
 * __useGetUserSettingsQuery__
 *
 * To run a query within a React component, call `useGetUserSettingsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserSettingsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserSettingsQuery({
 *   variables: {
 *      username: // value for 'username'
 *   },
 * });
 */
export function useGetUserSettingsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetUserSettingsQuery,
    GetUserSettingsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetUserSettingsQuery, GetUserSettingsQueryVariables>(
    GetUserSettingsDocument,
    options,
  );
}
export function useGetUserSettingsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetUserSettingsQuery,
    GetUserSettingsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetUserSettingsQuery,
    GetUserSettingsQueryVariables
  >(GetUserSettingsDocument, options);
}
export type GetUserSettingsQueryHookResult = ReturnType<
  typeof useGetUserSettingsQuery
>;
export type GetUserSettingsLazyQueryHookResult = ReturnType<
  typeof useGetUserSettingsLazyQuery
>;
export type GetUserSettingsQueryResult = Apollo.QueryResult<
  GetUserSettingsQuery,
  GetUserSettingsQueryVariables
>;
export const GetUserThemeDocument = gql`
  query GetUserTheme($username: String = "") {
    user: user_by_pk(username: $username) {
      theme_name
    }
  }
`;

/**
 * __useGetUserThemeQuery__
 *
 * To run a query within a React component, call `useGetUserThemeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserThemeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserThemeQuery({
 *   variables: {
 *      username: // value for 'username'
 *   },
 * });
 */
export function useGetUserThemeQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetUserThemeQuery,
    GetUserThemeQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetUserThemeQuery, GetUserThemeQueryVariables>(
    GetUserThemeDocument,
    options,
  );
}
export function useGetUserThemeLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetUserThemeQuery,
    GetUserThemeQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetUserThemeQuery, GetUserThemeQueryVariables>(
    GetUserThemeDocument,
    options,
  );
}
export type GetUserThemeQueryHookResult = ReturnType<
  typeof useGetUserThemeQuery
>;
export type GetUserThemeLazyQueryHookResult = ReturnType<
  typeof useGetUserThemeLazyQuery
>;
export type GetUserThemeQueryResult = Apollo.QueryResult<
  GetUserThemeQuery,
  GetUserThemeQueryVariables
>;
export const GetUserDataAllDocument = gql`
  query GetUserDataAll($username: String = "") {
    user: user_by_pk(username: $username) {
      theme_name
      active
      username
      created_at
      updated_at
      avatar
      email
      ...PersonnelData
    }
  }
  ${PersonnelDataFragmentDoc}
`;

/**
 * __useGetUserDataAllQuery__
 *
 * To run a query within a React component, call `useGetUserDataAllQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserDataAllQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserDataAllQuery({
 *   variables: {
 *      username: // value for 'username'
 *   },
 * });
 */
export function useGetUserDataAllQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetUserDataAllQuery,
    GetUserDataAllQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetUserDataAllQuery, GetUserDataAllQueryVariables>(
    GetUserDataAllDocument,
    options,
  );
}
export function useGetUserDataAllLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetUserDataAllQuery,
    GetUserDataAllQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetUserDataAllQuery, GetUserDataAllQueryVariables>(
    GetUserDataAllDocument,
    options,
  );
}
export type GetUserDataAllQueryHookResult = ReturnType<
  typeof useGetUserDataAllQuery
>;
export type GetUserDataAllLazyQueryHookResult = ReturnType<
  typeof useGetUserDataAllLazyQuery
>;
export type GetUserDataAllQueryResult = Apollo.QueryResult<
  GetUserDataAllQuery,
  GetUserDataAllQueryVariables
>;
export const DoesUserExistDocument = gql`
  query DoesUserExist($username: String = "", $email: String = "") {
    user(
      where: {
        _or: [
          { username: { _ilike: $username } }
          { email: { _ilike: $email } }
        ]
      }
    ) {
      username
      email
    }
  }
`;

/**
 * __useDoesUserExistQuery__
 *
 * To run a query within a React component, call `useDoesUserExistQuery` and pass it any options that fit your needs.
 * When your component renders, `useDoesUserExistQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDoesUserExistQuery({
 *   variables: {
 *      username: // value for 'username'
 *      email: // value for 'email'
 *   },
 * });
 */
export function useDoesUserExistQuery(
  baseOptions?: Apollo.QueryHookOptions<
    DoesUserExistQuery,
    DoesUserExistQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<DoesUserExistQuery, DoesUserExistQueryVariables>(
    DoesUserExistDocument,
    options,
  );
}
export function useDoesUserExistLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    DoesUserExistQuery,
    DoesUserExistQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<DoesUserExistQuery, DoesUserExistQueryVariables>(
    DoesUserExistDocument,
    options,
  );
}
export type DoesUserExistQueryHookResult = ReturnType<
  typeof useDoesUserExistQuery
>;
export type DoesUserExistLazyQueryHookResult = ReturnType<
  typeof useDoesUserExistLazyQuery
>;
export type DoesUserExistQueryResult = Apollo.QueryResult<
  DoesUserExistQuery,
  DoesUserExistQueryVariables
>;
export const GetUserPasswordDocument = gql`
  query GetUserPassword($username: String = "") {
    user: user_by_pk(username: $username) {
      username
      email
      password
    }
  }
`;

/**
 * __useGetUserPasswordQuery__
 *
 * To run a query within a React component, call `useGetUserPasswordQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserPasswordQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserPasswordQuery({
 *   variables: {
 *      username: // value for 'username'
 *   },
 * });
 */
export function useGetUserPasswordQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetUserPasswordQuery,
    GetUserPasswordQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetUserPasswordQuery, GetUserPasswordQueryVariables>(
    GetUserPasswordDocument,
    options,
  );
}
export function useGetUserPasswordLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetUserPasswordQuery,
    GetUserPasswordQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetUserPasswordQuery,
    GetUserPasswordQueryVariables
  >(GetUserPasswordDocument, options);
}
export type GetUserPasswordQueryHookResult = ReturnType<
  typeof useGetUserPasswordQuery
>;
export type GetUserPasswordLazyQueryHookResult = ReturnType<
  typeof useGetUserPasswordLazyQuery
>;
export type GetUserPasswordQueryResult = Apollo.QueryResult<
  GetUserPasswordQuery,
  GetUserPasswordQueryVariables
>;
export const EventsByUserUsernameDocument = gql`
  subscription EventsByUserUsername($user_username: String = "") {
    event(where: { user_username: { _eq: $user_username } }) {
      meta
      event_type
      created_at
      summary
      id
    }
  }
`;

/**
 * __useEventsByUserUsernameSubscription__
 *
 * To run a query within a React component, call `useEventsByUserUsernameSubscription` and pass it any options that fit your needs.
 * When your component renders, `useEventsByUserUsernameSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEventsByUserUsernameSubscription({
 *   variables: {
 *      user_username: // value for 'user_username'
 *   },
 * });
 */
export function useEventsByUserUsernameSubscription(
  baseOptions?: Apollo.SubscriptionHookOptions<
    EventsByUserUsernameSubscription,
    EventsByUserUsernameSubscriptionVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSubscription<
    EventsByUserUsernameSubscription,
    EventsByUserUsernameSubscriptionVariables
  >(EventsByUserUsernameDocument, options);
}
export type EventsByUserUsernameSubscriptionHookResult = ReturnType<
  typeof useEventsByUserUsernameSubscription
>;
export type EventsByUserUsernameSubscriptionResult =
  Apollo.SubscriptionResult<EventsByUserUsernameSubscription>;

export interface PossibleTypesResultData {
  possibleTypes: {
    [key: string]: string[];
  };
}
const result: PossibleTypesResultData = {
  possibleTypes: {},
};
export default result;
