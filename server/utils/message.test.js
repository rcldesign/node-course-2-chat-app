const expect = require('expect');

let {generateMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        let from = 'administrator';
        let message = 'this is a test message';
        let createdMessage = generateMessage(from, message);
        expect(createdMessage.from).toBe(from);
        expect(createdMessage.text).toBe(message);
        expect(typeof createdMessage.createdAt).toBe('number');
    });
});