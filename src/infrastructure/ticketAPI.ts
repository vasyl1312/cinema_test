import axios from 'axios'

const EVENT_URL = 'https://my.laphil.com/en/syos2/package/1195'

export async function getTicketsForEvent(eventId: string) {
  try {
    const response = await axios.get(EVENT_URL)
    // Parse the response and extract ticket data here
    // For simplicity, let's assume we have the required data from the response
    const tickets = [
      {
        section: 'Main',
        row: 'A',
        seatNumber: '101',
        price: 100,
      },
      {
        section: 'Balcony',
        row: 'B',
        seatNumber: '202',
        price: 50,
      },
      // Add more tickets if available
    ]
    return tickets
  } catch (error) {
    throw new Error('Failed to fetch tickets from the website')
  }
}
