const expect = require('expect');

let {generateMessage, generateLocationMessage} = require('./message');

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

describe('generateLocationMessage', () => {
    it('should generate correct location message object', () => {
        let from = 'administrator';
        let lon = 1;
        let lat = 2;
        
        let createdMessage = generateLocationMessage(from, lat, lon);
        expect(createdMessage.from).toBe(from);
        expect(createdMessage.url).toBe(`https://www.google.com/maps?q=${lat},${lon}`);
        expect(typeof createdMessage.createdAt).toBe('number');
    });
});