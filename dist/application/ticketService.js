"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTicketsForEventId = void 0;
const ticketAPI_1 = require("../infrastructure/ticketAPI");
async function getTicketsForEventId(eventId) {
    const tickets = await (0, ticketAPI_1.getTicketsForEvent)(eventId);
    return tickets;
}
exports.getTicketsForEventId = getTicketsForEventId;
