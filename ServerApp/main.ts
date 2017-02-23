import {Server} from './Server';

declare let App: Server;// tell the compiler that "App" will be available

App = new Server();
