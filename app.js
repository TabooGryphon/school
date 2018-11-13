// Full Documentation - https://www.turbo360.co/docs
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})


const config = {
	views: 'views', 		// Set views directory 
	static: 'public', 		// Set static assets directory
	db: { 					// Database configuration. Remember to set env variables in .env file: MONGODB_URI, PROD_MONGODB_URI
		url: 'mongodb://school_admin:password2@ds111913.mlab.com:11913/students',
		//url: (process.env.TURBO_ENV == 'dev') ? process.env.MONGODB_URI : process.env.PROD_MONGODB_URI,
		type: 'mongo',
		onError: (err) => {
			console.log('DB Connection Failed!')
		},
		onSuccess: () => {
			console.log('DB Successfully Connected!')
		}
	}
}

const app = vertex.app(config) // initialize app with config options


// import routes
const indexRouter = require('./routes/index');
const schoolsRouter = require('./routes/schools');
const studentsRouter = require('./routes/students');

// set routes
app.use('/', indexRouter);
app.use('/schools', schoolsRouter);
app.use('/students', studentsRouter);
module.exports = app;