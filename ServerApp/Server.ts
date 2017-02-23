/**
 * This class is the actual root class of your app.
 * The public APIs of this class define your apps behavior.
 */
export class Server implements App {
	
	private static typeScriptTrivia: string[] = [
		"TypeScript is a superset of current ECMAScript standards known as JavaScript.",
		"TypeScript is a static typed object-oriented programming language.",
		"The website of TypeScript is _https://www.typescriptlang.org_.",
		"TypeScript is developed and designed by Microsoft.",
		"TypeScript is completely Open Source, as you can see here: _https://github.com/Microsoft/TypeScript_",
		"TypeScript is usually transpiled to JavaScript to run in Browsers or Node.js environments.",
	];
	
	constructor() {
		const info: AppInfo = KnuddelsServer.getAppAccess().getOwnInstance().getAppInfo();
		const developer: string = info.getAppDeveloper().getNick().escapeKCode();
		const appName: string = info.getAppName();
		const version: string = info.getAppVersion();
		
		KnuddelsServer.getDefaultLogger().info(`${developer}s App ${appName} version ${version} has been instanciated!`);
	}
	
	public chatCommands = {
		"typescript": (user: User, params: string, command: string) => {
			user.sendPrivateMessage(RandomOperations.getRandomObject(Server.typeScriptTrivia));
		}
	};
	
	public onAppStart() {
		KnuddelsServer.getDefaultBotUser().sendPublicMessage("Hallo World! I was developed with TypeScript. Awesome!");
		
		KnuddelsServer.getChannel().getOnlineUsers(UserType.Human).forEach((user: User) => {
			this.onUserJoined(user)
		});
	}
	
	public onUserJoined(user: User) {
		const channel: Channel = KnuddelsServer.getChannel();
		user.sendPrivateMessage(`Hi ${user.getNick().escapeKCode()}, welcome to the Channel ${channel.getChannelName().escapeKCode()}!`)
	}
	
	public onPrepareShutdown(secondsTillShutdown: number) {
		const bot: BotUser = KnuddelsServer.getDefaultBotUser();
		bot.sendPublicMessage("Bye World, i have to go now.");
		KnuddelsServer.getChannel().getOnlineUsers(UserType.Human).forEach((user: User) => {
			bot.sendPrivateMessage(`Bye bye ${user.getNick().escapeKCode()}`)
		});
	}
	
}
