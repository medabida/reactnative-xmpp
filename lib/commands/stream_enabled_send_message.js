import Command from './command'

const StreamEnabledSendMessageCommandStatus = {
	SENT: "SENT",
	ACK_PENDING: "ACK_PENDING",
	ACK_RECEIVED: "ACK_RECEIVED"
}

export default class StreamEnabledSendMessage extends Command {
	constructor(to, message, data, messaege_sent, stanza) {
		super();
		this.to = to;
		this.message = message;
		this.data = data;
		this.messaege_sent = messaege_sent;
		this.stanza = stanza;
	}
}

export {StreamEnabledSendMessageCommandStatus}