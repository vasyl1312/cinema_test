import { Ticket } from '../domain/ticket'
import { getTicketsForEvent } from '../infrastructure/ticketAPI'

export async function getTicketsForEventId(eventId: string): Promise<Ticket[]> {
  const tickets = await getTicketsForEvent(eventId)
  return tickets
}
