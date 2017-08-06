const { Service } = require('engined');
const AgentManager = require('./lib/agent_manager');

module.exports = (opts = {}) => class extends Service {

	constructor(context) {
		super(context);
	}

	async start() {

		let manager = new AgentManager();

		this.getContext().set('Storage', manager);
	}

	async stop() {

		this.getContext().set('Storage', undefined);
	}
}
