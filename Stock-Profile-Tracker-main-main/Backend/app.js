import express from "express";
import router from "./Routes/Routes.js";
import cors from "cors";
import dotenv from "dotenv";  
dotenv.config(); 
import conn from "./DB/conn.js"
const app = express();
const port = process.env.PORT || 3000;
conn();
import './Controllers/Auth.js'
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cors());

app.use("/api/user", router);
app.use("/service", router);

app.use('/stock',router)
app.get('/',(req,res)=>{
    console.log("hellor")
})



app.listen(3000, () => {
    console.log(`Server is listening on port ${port}`);
});
