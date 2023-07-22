"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTicketsForEvent = void 0;
const axios_1 = __importDefault(require("axios"));
const EVENT_URL = 'https://my.laphil.com/en/syos2/package/1195';
async function getTicketsForEvent(eventId) {
    try {
        const response = await axios_1.default.get(EVENT_URL);
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
        ];
        return tickets;
    }
    catch (error) {
        throw new Error('Failed to fetch tickets from the website');
    }
}
exports.getTicketsForEvent = getTicketsForEvent;
