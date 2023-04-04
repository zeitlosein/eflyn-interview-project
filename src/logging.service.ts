// Logging Service to handle logging errors and sending them to the 
// frontend 
import { Injectable } from '@nestjs/common';
import { EventEmitter } from 'events';

@Injectable()
export class LoggingService {
    errorEvent: EventEmitter = new EventEmitter();

    logError(message: string, error: any) {
        console.error(message, error);
        this.errorEvent.emit('error', message);
    }
}