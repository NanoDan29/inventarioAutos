process.env.PORT = process.env.PORT || 4000

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


// ============================
//  Base de datos
// ============================
let urlDB;
urlDB = "mongodb+srv://autos:123@cluster0.kgukc.mongodb.net/AUTOS?retryWrites=true&w=majority"
process.env.URLDB = urlDB;