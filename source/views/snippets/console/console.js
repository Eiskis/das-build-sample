
V.views['console'] = {

	// props: [],

	data: function () {
		return {
			loopFps: 0,
			loopIndex: 0
		};
	},

	computed: {

		app: function () {
			return app;
		},

		platformInfo: function () {
			return {

				// Info
				browser: app.env.browser,
				platform: app.env.platform,
				version: app.env.version,
				uuid: app.env.uuid,

				// Booleans
				isWeb: app.env.isWeb,
				isCordova: app.env.isCordova,
				isIos: app.env.isIos,
				isAndroid: app.env.isAndroid,
				isWindows: app.env.isWindows,
				isMac: app.env.isMac,
				isTizen: app.env.isTizen

			};
		}

	},

	methods: {

		reset: function () {
			app.game.loadState(app.game.getInitialState());
		},

		testLoop: function () {
			var vm = this;

			// Toggle
			if (app.loop.getIsRunning()) {
				app.loop.stop();
			} else {

				// Track loop FPS
				app.loop.onFrameUpdate(function () {
					l('updating frame');
					vm.loopFps = app.loop.getFps();
					vm.loopIndex++;
				});

				// Start loop
				app.loop.start();

				l('Loop started');

			}

		},

		testSound: function () {
			app.audio.play('on');
		}

	}

};
