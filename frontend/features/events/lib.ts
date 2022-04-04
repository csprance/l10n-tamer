import {
  EventType_Enum, InsertEventDocument,
  InsertEventMutation,
  InsertEventMutationVariables,
} from '@/graphql/graphql';
import { initializeApollo } from '@/lib/apollo';

export interface EventData {
  summary: string;
  user_username?: string;
  event_type?: EventType_Enum;
  entity_id?: number;
  meta?: { [key: string]: any };
}

/**
 * This function takes in some data about an event and logs it to the events table.
 * Every action we take in the application if it should be trackable we log it. Most things that interact with the db
 * (Query/Mutation) will automatically dispatch events on hasura side but certain things need to be manually logged.
 * This is the function to use if you are manually logging an event.
 * @param summary A human readable description of the event.
 * @param user_username The user who instigated the event
 * @param entity_id The entity id the event belongs to (ex: Admin comments on issue3. issue3 is the entity)
 * @param event_type What type of event is this. Comes from an Enum
 * @param meta Any additional data about the event goes here. This could be anything but should always be the same shape
 * for each event_type
 */
export async function logEvent({
  summary,
  entity_id,
  user_username = 'system',
  event_type = EventType_Enum.SystemInfo,
  meta = {},
}: EventData) {
  try {
    const client = initializeApollo();
    const { data, errors } = await client.mutate<
      InsertEventMutation,
      InsertEventMutationVariables
    >({
      mutation: InsertEventDocument,
      variables: {
        user_username,
        entity_id,
        event_type,
        meta,
        summary,
      },
    });
    if (errors) {
      return errors;
    }

    return data;
  } catch (e) {
    return e;
  }
}
