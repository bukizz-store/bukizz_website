import express from "express"
import { db } from "./connect.js"
import cors from "cors"
const app = express();

app.use(
    cors({
        origin: "*",
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
        preflightContinue: false,
        optionsSuccessStatus: 204,
    })
);

app.use(express.json());

app.get("/", (req, res) => {
    res.send("hi Mayank Saini")
})

app.post("/formData", (req, res) => {

    const q = "INSERT INTO contact_data (s_no,fname, lname, email, schoolName, msg) VALUES (?)";
    const values = [req.body.s_no, req.body.fname, req.body.lname, req.body.email, req.body.schoolName, req.body.msg];

    db.query(q, [values], (err, data) => {
        if (err) {
            console.error("Error encountered in insertion:", err);
            return res.status(500).json({ error: "Internal Server Error" });
        }

        console.log("Data inserted successfully");
        return res.status(200).json({ message: "Data inserted in database" });
    });
});


app.listen(3000, () => {
    console.log("Listening on port ", 3000);
})